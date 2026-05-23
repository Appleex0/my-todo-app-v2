import type { RootState } from "../features/store";
import type { TodoType } from '../features/Types/todoType'
import Todo from './Todo'
import { useSelector } from "react-redux"

function TodoList() {
    const todos = useSelector((state: RootState) => state.todo.list)

    return (
        <div className="w-full max-w-7xl mx-auto rounded-2xl px-4 py-8 bg-[#EEEEEE] dark:bg-slate-900/40 border border-transparent dark:border-slate-800/50 shadow-inner min-h-50 transition-all duration-300">
            {todos && todos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-max">
                    {todos.map((todo: TodoType) => {
                        return (
                            <Todo key={todo.id} todo={todo}/>
                        )
                    })}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <p className="text-gray-500 dark:text-slate-400 font-medium tracking-wide">
                        There are no todos yet. Add a new one!
                    </p>
                </div>
            )}
        </div>
    )
}

export default TodoList