import { useState } from "react";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { createTodo } from "../features/todoSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../features/store";
import TodoEditMode from "./TodoEditMode";
import ErrorTemplate from "./Error/ErrorTemplate";

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

  const addTodo = () => {
    if (isMinInput || isMaxInput || isMinDesc || isMaxDesc) {
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
          detailsNumber={"500"}
          howMuch={"Çox"}
        />
      )}
      {isEditMode && <TodoEditMode />}
      <div className="flex flex-col justify-center items-center gap-8 border-2 px-8 py-4 bg-[#6FCF97] h-2/5 w-2/5">
        <h1 className="text-2xl ">My Todo App V2</h1>
        <div className="flex flex-col justify-center items-center w-full h-full gap-4">
          <div className="flex flex-col w-full h-full">
            <label htmlFor="Name">Name</label>
            <input
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                setName(value);
                if (value.length < 5) {
                  setIsMaxInput(false);
                  setIsMinInput(true);
                } else if (value.length >= 25) {
                  setIsMaxInput(true);
                  setIsMinInput(false);
                } else {
                  setIsMinInput(false);
                  setIsMaxInput(false);
                  setName(e.target.value);
                }
              }}
              minLength={5}
              maxLength={25}
              id="Name"
              className="outline-none border px-1 rounded-lg w-2/3 transition-transform bg-amber-50 hover:scale-102"
              type="text"
            />
            <label htmlFor="Description">Description</label>
            <textarea
              value={description}
              maxLength={501}
              minLength={20}
              className="outline-none border p-1 h-full transition-transform bg-amber-50 hover:scale-102"
              id="Description"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                const value = e.target.value;
                setDescription(value);
                if (value.length < 20) {
                  setIsMaxDesc(false);
                  setIsMinDesc(true);
                } else if (value.length >= 501) {
                  setIsMaxDesc(true);
                  setIsMinDesc(false);
                } else {
                  setIsMinDesc(false);
                  setIsMaxDesc(false);
                  setDescription(e.target.value);
                }
              }}
              type="text"
            />
          </div>

          <button
            onClick={addTodo}
            className="border rounded-2xl px-2 py-1 cursor-pointer bg-[#2FA084] transition-colors text-amber-50 border-none hover:bg-[#9AD872]"
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
