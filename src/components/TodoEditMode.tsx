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
    <div className="flex absolute h-full w-full justify-center items-center backdrop-blur-sm ">
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
      <div className=" border bg-green-300 w-2/7 h-1/3">
        <div className="flex gap-3 p-4 h-9/10 w-full">
          <div className="flex flex-col p-1 gap-10">
            <label className="" htmlFor="Name">
              Name
            </label>
            <label className="" htmlFor="Description">
              Description
            </label>
          </div>
          <div className="flex flex-col p-1 gap-5 w-full h-full">
            <input
              maxLength={25}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                setName(value);
                if (value.length < 5) {
                  setIsMaxInput(false);
                  setIsMinInput(true);
                  console.log(value.length)
                } else if (value.length >= 25) {
                  setIsMaxInput(true);
                  setIsMinInput(false);
                } else if(value.length == 0){
                  setIsMinInput(false);
                  setIsMaxInput(false);
                } else {
                  setIsMinInput(false);
                  setIsMaxInput(false);
                  setName(e.target.value);
                }
              }}
              value={name}
              className="outline-none border px-1 rounded-lg w-full transition-transform bg-amber-50 hover:scale-102"
              id="Name"
              type="text"
            />
            <textarea
              maxLength={301}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                const value = e.target.value;
                setDescription(value);
                if (value.length < 20 && value.length > 0) {
                  setIsMaxDesc(false);
                  setIsMinDesc(true);
                } else if (value.length >= 301) {
                  setIsMaxDesc(true);
                  setIsMinDesc(false);
                } else if(value.length == 0){
                  setIsMinDesc(false);
                  setIsMaxDesc(false);
                } else {
                  setIsMinDesc(false);
                  setIsMaxDesc(false);
                  setDescription(e.target.value);
                }
              }}
              value={description}
              id="Description"
              className="w-full h-full outline-none border p-1transition-transform bg-amber-50 hover:scale-102 resize-none"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end gap-5 pr-2">
          <div
            onClick={() => {
              save();
            }}
            className={
              hasError
                ? "text-xl font-black text-blue-400 cursor-no-drop "
                : "text-xl font-black text-blue-600 cursor-pointer hover:text-blue-400"
            }
          >
            Save
          </div>
          <div
            onClick={cancel}
            className="text-xl font-bold text-red-700 cursor-pointer hover:text-red-400"
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoEditMode;
