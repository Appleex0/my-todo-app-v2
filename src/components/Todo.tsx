import { FaRegEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, type Todo, type TodoState } from "../features/todoSlice"
import { editMode } from "../features/additionSlice"
import { savedEditTodo } from "../features/editTodoSlice"

function Todo({ todo }: any) {

    const dispatch = useDispatch()

    const edit = () => {
        dispatch(editMode(true))
        dispatch(savedEditTodo({
            id: todo.id,
            name: todo.name,
            description: todo.description
        }))
    }

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
                <div onClick={edit} className="text-2xl text-cyan-600 cursor-pointer"><FaRegEdit /></div>
            </div>
        </div>
    )
}

export default Todo