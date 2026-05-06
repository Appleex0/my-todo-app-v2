import { useDispatch, useSelector } from "react-redux"
import { editMode } from "../features/additionSlice"
import type { RootState } from '../features/store';
import { useState } from "react";



function TodoEditMode() {
    const dispatch = useDispatch()
    const todo = useSelector((state: RootState) => state.editTodo)
    const cancel = () => {
        dispatch(editMode(false))
    }

    const [name, setName] = useState<string>(todo.name)
    const [description, setDescription] = useState<string>(todo.description)

    return (
        <div className="flex absolute h-full w-full justify-center items-center backdrop-blur-sm ">
            <div className=" border bg-green-300 w-2/7 h-1/3">
                <div className="flex gap-3   p-4 h-9/10 w-full">
                    <div className="flex flex-col p-1 gap-10">
                        <label className="" htmlFor="Name">Name</label>
                        <label className="" htmlFor="Description">Description</label>
                    </div>
                    <div className="flex flex-col p-1 gap-5 w-full h-full">
                        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setName(e.target.value)
                        }} value={todo.name} className="outline-none border px-1 rounded-lg w-full transition-transform bg-amber-50 hover:scale-102" id="Name" type="text" />
                        <textarea onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setDescription(e.target.value)
                        }} value={todo.description} id="Description" className="w-full h-full outline-none border p-1transition-transform bg-amber-50 hover:scale-102 resize-none"></textarea>
                    </div>
                </div>
                <div className="flex justify-end gap-5 pr-2">
                    <div className="text-xl font-black text-blue-600 cursor-pointer hover:text-blue-400">
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