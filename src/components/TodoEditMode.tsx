import { useDispatch, useSelector } from "react-redux"
import { editMode } from "../features/additionSlice"
import type { RootState } from '../features/store';
import { useState } from "react";
import { updateTodo } from "../features/todoSlice";
import ShortDesc from "./Error/ShortDesc";
import LongDesc from "./Error/LongDesc";


function TodoEditMode() {
    const todo = useSelector((state: RootState) => state.editTodo)

    const [isMin, setIsMin] = useState<boolean>(false)
    const [isMax, setIsMax] = useState<boolean>(false)

    const [name, setName] = useState<string>(todo.name)
    const [description, setDescription] = useState<string>(todo.description)

    const dispatch = useDispatch()

    const cancel = () => {
        dispatch(editMode(false))
    }

    const save = () => {
        dispatch(updateTodo({
            id: todo.id,
            name,
            description
        }))

        dispatch(editMode(false))
    }

    return (
        <div className="flex absolute h-full w-full justify-center items-center backdrop-blur-sm ">
            {
                isMin && <ShortDesc />
            }
            {
                isMax && <LongDesc />
            }
            <div className=" border bg-green-300 w-2/7 h-1/3">
                <div className="flex gap-3   p-4 h-9/10 w-full">
                    <div className="flex flex-col p-1 gap-10">
                        <label className="" htmlFor="Name">Name</label>
                        <label className="" htmlFor="Description">Description</label>
                    </div>
                    <div className="flex flex-col p-1 gap-5 w-full h-full">
                        <input minLength={5} maxLength={25} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if(e.target.value.length < )
                            setName(e.target.value)
                        }} value={name} className="outline-none border px-1 rounded-lg w-full transition-transform bg-amber-50 hover:scale-102" id="Name" type="text" />
                        <textarea maxLength={501} minLength={20} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setDescription(e.target.value)
                        }} value={description} id="Description" className="w-full h-full outline-none border p-1transition-transform bg-amber-50 hover:scale-102 resize-none"></textarea>
                    </div>
                </div>
                <div className="flex justify-end gap-5 pr-2">
                    <div onClick={save} className="text-xl font-black text-blue-600 cursor-pointer hover:text-blue-400">
                        Save
                    </div>
                    <div onClick={cancel} className="text-xl font-bold text-red-700 cursor-pointer hover:text-red-400">
                        Cancel
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TodoEditMode