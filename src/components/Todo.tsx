import { FaRegEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import { useDispatch } from "react-redux"
import { deleteTodo } from "../features/todoSlice"

function Todo({ todo }: any) {

    const dispatch = useDispatch()

    const deleteT = () => {
        dispatch(deleteTodo(todo.id))
    }

    return (
        <div className="flex flex-col border p-4">
            <div className="flex flex-col gap-3">
                <div className="font-medium text-2xl">{todo.name}</div>
                <div>
                    {todo.description}
                </div>
            </div>
            <div className="flex gap-2 justify-end items-end">
                <div onClick={deleteT} className="text-2xl text-red-500 cursor-pointer"><MdDelete /></div>
                <div className="text-2xl text-cyan-600 cursor-pointer"><FaRegEdit /></div>
            </div>
        </div>
    )
}

export default Todo