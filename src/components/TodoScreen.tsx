import { useState } from "react";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { createTodo } from "../features/todoSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../features/store";
import TodoEditMode from "./TodoEditMode";
import ErrorTemplate from "./Error/ErrorTemplate";
import { MdModeNight } from "react-icons/md";
import { FaRegSun } from "react-icons/fa";
import { changeTheme } from "../features/additionSlice";

function TodoScreen() {
  const [isMinInput, setIsMinInput] = useState<boolean>(false);
  const [isMaxInput, setIsMaxInput] = useState<boolean>(false);
  const [isMinDesc, setIsMinDesc] = useState<boolean>(false);
  const [isMaxDesc, setIsMaxDesc] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const isEditMode = useSelector(
    (state: RootState) => state.addition.isEditMode,
  );

  const isDark = useSelector((state: RootState) => state.addition.isDark)
  const change = () => {
    dispatch(changeTheme())
    console.log(isDark)
  }
  const addTodo = () => {
    if (isMinInput || isMaxInput || isMinDesc || isMaxDesc || name.length === 0 || description.length === 0) {
      return;
    }
    return (
      dispatch(
        createTodo({
          id: crypto.randomUUID(),
          name: name,
          description: description,
        }),
      ),
      setName(""),
      setDescription("")
    );
  };
  return (
    <div className="flex justify-center items-center flex-col w-full h-full relative">
      <div onClick={() => {
        change()
      }} className="absolute  top-13 right-20 xl:right-15 lg:top-5 lg:right-15 md:top-5 md:right-15  text-2xl text-gray-700 hover:scale-120 transition-all cursor-pointer duration-500">
        <MdModeNight
          className={`absolute transition-all duration-500 transform ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
            }`}
        />
        <FaRegSun
          className={`absolute transition-all duration-500 transform ${!isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"
            }`}
        />
      </div>
      {isMinInput && (
        <ErrorTemplate details={"Adı"} detailsNumber={"5"} howMuch={"Az"} />
      )}
      {isMaxInput && (
        <ErrorTemplate details={"Adı"} detailsNumber={"20"} howMuch={"Çox"} />
      )}
      {isMinDesc && (
        <ErrorTemplate
          details={"Detayları"}
          detailsNumber={"20"}
          howMuch={"Az"}
        />
      )}
      {isMaxDesc && (
        <ErrorTemplate
          details={"Detayları"}
          detailsNumber={"300"}
          howMuch={"Çox"}
        />
      )}
      {isEditMode && <TodoEditMode />}
      <div className="flex flex-col justify-center items-center gap-8 border-2 px-8 py-4 h-3/7 w-4/5 bg-[#716FA5] sm:h-2/5 lg:h-2/5 lg:w-1/2 md:w-1/2 xl:w-2/5 rounded-lg">
        <h1 className="text-2xl text-[#FAFAFA]">My Todo App V2</h1>
        <div className="flex flex-col justify-center items-center w-full h-full gap-4">
          <div className="flex flex-col w-full h-full">
            <label className="text-[#FAFAFA]" htmlFor="Name">Name</label>
            <input
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                setName(value);
                if (value.length < 5 && value.length > 0) {
                  setIsMaxInput(false);
                  setIsMinInput(true);
                  console.log(value.length)
                } else if (value.length >= 25) {
                  setIsMaxInput(true);
                  setIsMinInput(false);
                } else if (value.length == 0) {
                  setIsMinInput(false);
                  setIsMaxInput(false);
                } else {
                  setIsMinInput(false);
                  setIsMaxInput(false);
                  setName(e.target.value);
                }
              }}
              minLength={5}
              maxLength={25}
              id="Name"
              className="outline-none border px-1 rounded-lg w-2/3 transition-transform  bg-amber-50 hover:scale-102"
              type="text"
            />
            <label className="text-[#FAFAFA]" htmlFor="Description">Description</label>
            <textarea
              value={description}
              maxLength={301}
              minLength={20}
              className=" outline-none border p-1 h-full transition-transform bg-amber-50 hover:scale-102"
              id="Description"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                const value = e.target.value;
                setDescription(value);
                if (value.length < 20 && value.length > 0) {
                  setIsMaxDesc(false);
                  setIsMinDesc(true);
                } else if (value.length >= 301) {
                  setIsMaxDesc(true);
                  setIsMinDesc(false);
                } else if (value.length == 0) {
                  setIsMinDesc(false);
                  setIsMaxDesc(false);
                } else {
                  setIsMinDesc(false);
                  setIsMaxDesc(false);
                  setDescription(e.target.value);
                }
              }}
            />
          </div>

          <button
            onClick={addTodo}
            className="border rounded-2xl px-2 py-1 cursor-pointer bg-[#37355F] transition-colors text-amber-50 border-none hover:bg-[#2A284A]"
          >
            Add Todo
          </button>
        </div>
      </div>
      <div className="h-1/2 w-full ">
        <TodoList />
      </div>
    </div>
  );
}

export default TodoScreen;
