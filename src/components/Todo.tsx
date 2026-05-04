import { FaRegEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"

type TodoData = {
    name?: string
    description?: string
}

type TodoProps = {
    data?: TodoData
}

function Todo({ data }: TodoProps) {
    const name = data?.name ?? "Untitled"
    const description = data?.description ?? "No description provided."

    return (
        <div className="flex flex-col border p-4">
            <div className="flex flex-col gap-3">
                <div className="font-medium text-2xl">{name}</div>
                <div>
                    {description}
                </div>
            </div>
            <div className="flex gap-2 justify-end items-end">
                <div className="text-2xl text-red-500 cursor-pointer"><MdDelete /></div>
                <div className="text-2xl text-cyan-600 cursor-pointer"><FaRegEdit /></div>
            </div>
        </div>
    )
}

export default Todo