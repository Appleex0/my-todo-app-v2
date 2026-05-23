import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todoSlice";
import { editMode } from "../features/additionSlice";
import { savedEditTodo } from "../features/editTodoSlice";
import type { TodoType } from "../features/Types/todoType";

function Todo({ todo }: { todo: TodoType }) {
  const dispatch = useDispatch();

  const edit = () => {
    dispatch(editMode(true));
    dispatch(
      savedEditTodo({
        id: todo.id,
        name: todo.name,
        description: todo.description,
      }),
    );
  };

  const deleteT = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="flex flex-col justify-between p-5 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-l-4 border-l-indigo-500 dark:border-l-amber-500 border-y border-r border-slate-200/80 dark:border-slate-700/60 rounded-r-2xl rounded-l-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_25px_-5px_rgba(99,102,241,0.15)] dark:hover:shadow-[0_10px_30px_-5px_rgba(245,158,11,0.15)] hover:-translate-y-1 transition-all duration-300 w-full min-h-[220px] group">
      <div className="flex flex-col gap-2.5">
        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-50 tracking-wide break-words group-hover:text-indigo-600 dark:group-hover:text-amber-400 transition-colors duration-200">
          {todo.name}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed break-words overflow-y-auto max-h-[120px] pr-1 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
          {todo.description}
        </p>
      </div>

      <div className="flex gap-3 justify-end items-center mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60">
        <button
          onClick={edit}
          aria-label="Edit Todo"
          className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-amber-400 hover:bg-indigo-50 dark:hover:bg-amber-500/10 transition-all duration-200 cursor-pointer text-lg shadow-sm border border-transparent hover:border-indigo-100 dark:hover:border-amber-500/20"
        >
          <FaRegEdit />
        </button>
        <button
          onClick={deleteT}
          aria-label="Delete Todo"
          className="p-2 rounded-xl text-slate-400 hover:text-rose-600 dark:text-slate-500 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-all duration-200 cursor-pointer text-lg shadow-sm border border-transparent hover:border-rose-100 dark:hover:border-rose-500/20"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default Todo;
