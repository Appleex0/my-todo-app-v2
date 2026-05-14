import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo} from "../features/todoSlice";
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
    <div className="flex flex-col dark:bg-[#716FA5] border p-4 text-[#090911] w-full">
      <div className="flex flex-col gap-3">
        <div className="font-medium text-2xl  text-[#090911]">{todo.name}</div>
        <div className=" text-[#090911]  break-words md:w-72 md:h-55 sm:w-58 lg:w-64 lg:h-64 xl:w-60 xl:h-70 2xl:w-96 2xl:h-80">
          {todo.description}
        </div>
      </div>
      <div className="flex gap-2 justify-end items-end">
        <div onClick={deleteT} className="text-2xl text-red-500 cursor-pointer">
          <MdDelete />
        </div>
        <div onClick={edit} className="text-2xl text-cyan-600 cursor-pointer">
          <FaRegEdit />
        </div>
      </div>
    </div>
  );
}

export default Todo;
