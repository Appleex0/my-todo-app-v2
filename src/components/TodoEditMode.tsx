import { useDispatch, useSelector } from "react-redux";
import { editMode } from "../features/additionSlice";
import type { RootState } from "../features/store";
import { useState } from "react";
import { updateTodo } from "../features/todoSlice";
import ErrorTemplate from "./Error/ErrorTemplate";

function TodoEditMode() {
  const todo = useSelector((state: RootState) => state.editTodo);

  const [isMinInput, setIsMinInput] = useState<boolean>(false);
  const [isMaxInput, setIsMaxInput] = useState<boolean>(false);
  const [isMinDesc, setIsMinDesc] = useState<boolean>(false);
  const [isMaxDesc, setIsMaxDesc] = useState<boolean>(false);

  const [name, setName] = useState<string>(todo.name);
  const [description, setDescription] = useState<string>(todo.description);
  const hasError = isMinInput || isMaxInput || isMinDesc || isMaxDesc;
  const dispatch = useDispatch();
  
  const cancel = () => {
    dispatch(editMode(false));
  };

  const save = () => {
    if (hasError) return;
    dispatch(
      updateTodo({
        id: todo.id,
        name,
        description,
      }),
    );
    dispatch(editMode(false));
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-md bg-slate-900/40 dark:bg-black/60 p-4 transition-all duration-300 animate-fade-in">
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

      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl border border-slate-200/60 dark:border-slate-800 p-6 flex flex-col gap-5 transition-all transform scale-100">
        
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 tracking-wide border-b border-slate-100 dark:border-slate-800 pb-2">
          Todo Redaktə Et
        </h2>

        <div className="flex flex-col gap-4">
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400" htmlFor="Name">
              Name
            </label>
            <input
              maxLength={25}
              id="Name"
              type="text"
              value={name}
              className="w-full outline-none border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-xl dark:focus:bg-slate-800 transition-all duration-200 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:bg-white dark:focus:bg-slate-850 focus:border-indigo-500 dark:focus:border-amber-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-amber-500/10"
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
                }
              }}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400" htmlFor="Description">
              Description
            </label>
            <textarea
              maxLength={301}
              id="Description"
              rows={4}
              value={description}
              className="w-full outline-none border dark:focus:bg-slate-800 border-slate-200 dark:border-slate-700 p-3 rounded-xl transition-all duration-200 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:bg-white dark:focus:bg-slate-850 focus:border-indigo-500 dark:focus:border-amber-500 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-amber-500/10 resize-none"
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
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end items-center gap-3 mt-2 pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={cancel}
            type="button"
            className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-150 cursor-pointer"
          >
            Cancel
          </button>
          
          <button
            onClick={save}
            disabled={hasError}
            type="button"
            className={`px-5 py-2 rounded-xl text-sm font-bold shadow-sm transition-all duration-200 ${
              hasError
                ? "bg-indigo-300 dark:bg-slate-800 text-indigo-100 dark:text-slate-600 cursor-not-allowed shadow-none"
                : "bg-indigo-600 hover:bg-indigo-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white dark:text-slate-950 active:scale-97 cursor-pointer"
            }`}
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
}

export default TodoEditMode;