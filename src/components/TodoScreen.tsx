import TodoList from "./TodoList"

function TodoScreen() {
  return (
    <div className="flex justify-center items-center flex-col w-full h-full ">
        <div className="flex flex-col justify-center items-center gap-8 border-2 px-8 py-4 bg-[#6FCF97] h-1/5 w-1/3">
            <h1 className="text-2xl ">My Todo App V2</h1>
            <div className="flex justify-center items-center w-full gap-4">
                <input className="outline-none border px-1 rounded-lg w-2/3 transition-transform bg-amber-50 hover:scale-102" type="text" />
                <button className="border rounded-2xl px-2 py-1 cursor-pointer bg-[#2FA084] transition-colors text-amber-50 border-none hover:bg-[#9AD872]">Add Todo</button>
            </div>
        </div>
        <div className="h-1/2 w-full ">
            <TodoList/>
        </div>
    </div>
  )
}

export default TodoScreen