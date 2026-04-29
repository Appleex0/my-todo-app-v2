import { useState, type ReactHTMLElement } from "react"
import TodoList from "./TodoList"
import Warm from "./Warm"

function TodoScreen() {
    const [descriptionValue, setDescriptionValue] = useState<string>('')
    const lenghtChecker = ()=>{
        if(){

        }
    }
    return (
        <div className="flex justify-center items-center flex-col w-full h-full ">
            <div className="flex flex-col justify-center items-center gap-8 border-2 px-8 py-4 bg-[#6FCF97] h-2/5 w-2/5">
                <h1 className="text-2xl ">My Todo App V2</h1>
                <div className="flex flex-col justify-center items-center w-full h-full gap-4">
                    <div className="flex flex-col w-full h-full">
                        <label htmlFor="Name">Name</label>
                        <input id="Name" className="outline-none border px-1 rounded-lg w-2/3 transition-transform bg-amber-50 hover:scale-102" type="text" />
                        <label htmlFor="Description">Description</label>
                        <textarea className="bg-amber-50 outline-none border p-1 h-full" id="Description" onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=>{
                            if(lenghtChecker(e.target.value)){
                              setDescriptionValue(e.target.value)
                            }
                        }} type="text" />
                    </div>

                    <button className="border rounded-2xl px-2 py-1 cursor-pointer bg-[#2FA084] transition-colors text-amber-50 border-none hover:bg-[#9AD872]">Add Todo</button>
                </div>
            </div>
            <div className="h-1/2 w-full ">
                <TodoList />
            </div>
        </div>
    )
}

export default TodoScreen