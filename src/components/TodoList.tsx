import Todo from './Todo'
import { useSelector } from "react-redux"
function TodoList() {
    const todos = useSelector((state: any) => state.todo.list)

    return (
        <div className='w-full overflow-x-hidden overflow-y-auto px-15 py-8 bg-[#EEEEEE] '>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    todos && todos.map((todo: any)=>{
                        return (
                            <Todo key={todo.id} todo={todo}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TodoList