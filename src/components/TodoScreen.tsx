import { useState } from "react";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { createTodo } from "../features/todoSlice";
import { useSelector } from "react-redux";
import type { RootState } from "../features/store";
import TodoEditMode from "./TodoEditMode";
import ErrorTemplate from "./Error/ErrorTemplate";
import { changeTheme } from "../features/additionSlice";
import { MdDarkMode } from "react-icons/md";
import { FaRegSun } from "react-icons/fa";

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
    if (
      isMinInput ||
      isMaxInput ||
      isMinDesc ||
      isMaxDesc ||
      name.length === 0 ||
      description.length === 0
    ) {
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

  const isDark = useSelector((state: RootState) => state.addition.isDark);

  const toggleTheme = () => {
    dispatch(changeTheme());
  };



  return (
    <div className="flex justify-center items-center flex-col w-full min-h-screen relative p-4 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
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

      <div className="absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="rounded-full p-2.5 cursor-pointer bg-[#37355F] hover:bg-[#2A284A] dark:bg-amber-500 dark:hover:bg-amber-600 transition-all duration-200 shadow-md flex items-center justify-center text-white"
        >
          {isDark ? <MdDarkMode size={30} /> : <FaRegSun size={30} />}
        </button>
      </div>

      <div className="flex flex-col justify-center items-center gap-6 border border-slate-200/50 dark:border-slate-800/50 px-6 py-6 w-full max-w-xl bg-[#716FA5] dark:bg-slate-900 rounded-2xl shadow-xl transition-all duration-300">
        <h1 className="text-2xl font-bold tracking-wide text-white dark:text-amber-400">
          My Todo App V2
        </h1>

        <div className="flex flex-col justify-center items-center w-full gap-4">
          <div className="flex flex-col w-full gap-3">
            <div className="flex flex-col gap-1">
              <label
                className="text-sm font-medium text-purple-100 dark:text-slate-300"
                htmlFor="Name"
              >
                Name
              </label>
              <input
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value;
                  setName(value);
                  if (value.length < 5 && value.length > 0) {
                    setIsMaxInput(false);
                    setIsMinInput(true);
                  } else if (value.length >= 25) {
                    setIsMaxInput(true);
                    setIsMinInput(false);
                  } else {
                    setIsMinInput(false);
                    setIsMaxInput(false);
                  }
                }}
                minLength={5}
                maxLength={25}
                id="Name"
                className="w-full outline-none border border-transparent px-3 py-2 rounded-xl transition-all duration-200 bg-amber-50 focus:bg-white dark:bg-slate-800 dark:text-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-purple-400 dark:focus:ring-amber-500 shadow-sm"
                type="text"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                className="text-sm font-medium text-purple-100 dark:text-slate-300"
                htmlFor="Description"
              >
                Description
              </label>
              <textarea
                value={description}
                maxLength={301}
                minLength={20}
                id="Description"
                rows={4}
                className="w-full outline-none border border-transparent p-3 rounded-xl transition-all duration-200 bg-amber-50 focus:bg-white dark:bg-slate-800 dark:text-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-purple-400 dark:focus:ring-amber-500 shadow-sm resize-none"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  const value = e.target.value;
                  setDescription(value);
                  if (value.length < 20 && value.length > 0) {
                    setIsMaxDesc(false);
                    setIsMinDesc(true);
                  } else if (value.length >= 301) {
                    setIsMaxDesc(true);
                    setIsMinDesc(false);
                  } else {
                    setIsMinDesc(false);
                    setIsMaxDesc(false);
                  }
                }}
              />
            </div>
          </div>

          <button
            onClick={addTodo}
            className="w-full mt-2 sm:w-auto border-none rounded-xl px-6 py-2.5 font-semibold cursor-pointer bg-[#37355F] hover:bg-[#2A284A] dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-slate-950 text-white transition-all duration-200 shadow-md active:scale-98"
          >
            Add Todo
          </button>
        </div>
      </div>

      <div className="w-full mt-6">
        <TodoList />
      </div>
    </div>
  );
}

export default TodoScreen;
