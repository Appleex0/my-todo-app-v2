import { useState } from "react"
import TodoList from "./TodoList"
import LongError from "./LongError"
import ShortError from "./ShortError"
import { useDispatch } from "react-redux"
import { createTodo } from "../features/todoSlice"
import { useSelector } from "react-redux"
import type { RootState } from '../features/store';
import TodoEditMode from "./TodoEditMode"

function TodoScreen() {
    const [isMin, setIsMin] = useState<boolean>(false)
    const [isMax, setIsMax] = useState<boolean>(false)
    const dispatch = useDispatch()
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const isEditMode = useSelector((state: RootState) => state.addition.isEditMode)

    const addTodo = () => {
        if (name.length < 5 || name.length > 25 || description.length < 25 || description.length > 500) {
            return
        }
        return dispatch(createTodo({
            id: crypto.randomUUID(),
            name: name,
            description: description
        })), setName(""), setDescription("")



    }
    return (
        <div className="flex justify-center items-center flex-col w-full h-full relative">
            {isMax && <LongError />}
            {isMin && <ShortError />}
            { isEditMode && <TodoEditMode/> }
            <div className="flex flex-col justify-center items-center gap-8 border-2 px-8 py-4 bg-[#6FCF97] h-2/5 w-2/5">
                <h1 className="text-2xl ">My Todo App V2</h1>
                <div className="flex flex-col justify-center items-center w-full h-full gap-4">
                    <div className="flex flex-col w-full h-full">
                        <label htmlFor="Name">Name</label>
                        <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setName(e.target.value)
                        }} minLength={5} maxLength={25} id="Name" className="outline-none border px-1 rounded-lg w-2/3 transition-transform bg-amber-50 hover:scale-102" type="text" />
                        <label htmlFor="Description">Description</label>
                        <textarea value={description} maxLength={501} minLength={20} className="outline-none border p-1 h-full transition-transform bg-amber-50 hover:scale-102" id="Description" onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            setDescription(e.target.value)
                            if (e.target.value.length < 20) {
                                setIsMin(true)
                                setIsMax(false)
                                return
                            }
                            if (e.target.value.length > 500) {
                                setIsMax(true)
                                setIsMin(false)
                                return
                            }
                            setIsMax(false)
                            setIsMin(false)

                        }} type="text" />
                    </div>

                    <button onClick={addTodo} className="border rounded-2xl px-2 py-1 cursor-pointer bg-[#2FA084] transition-colors text-amber-50 border-none hover:bg-[#9AD872]">Add Todo</button>
                </div>
            </div>
            <div className="h-1/2 w-full ">
                <TodoList />
            </div>
        </div>
    )
}

export default TodoScreen