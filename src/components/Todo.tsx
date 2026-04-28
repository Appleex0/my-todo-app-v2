import { BiEdit, BiRename } from "react-icons/bi"
import { FaRegEdit } from "react-icons/fa"
import { FaDeleteLeft } from "react-icons/fa6"
import { LuDelete } from "react-icons/lu"
import { MdDelete } from "react-icons/md"

function Todo() {
    return (
        <div className="flex flex-col border p-4">
            <div className="flex flex-col gap-3">
                <div className="font-medium text-2xl">Bu Ilk Tododur</div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quibusdam omnis sit praesentium placeat voluptate delectus dolores ratione sunt. Culpa beatae, animi iusto dolorum explicabo optio debitis ipsam sit maxime.
                </div>
            </div>
            <div className="flex gap-2 justify-end items-end">
                <div className="text-2xl text-red-500 cursor-pointer"><MdDelete/></div>
                <div className="text-2xl text-cyan-600 cursor-pointer"><FaRegEdit /></div>
            </div>
        </div>
    )
}

export default Todo