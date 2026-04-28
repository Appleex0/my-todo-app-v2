import Todo from './Todo'

function TodoList() {
    return (
        <div className='w-full overflow-x-hidden overflow-y-auto px-15 py-8 bg-[#EEEEEE]'>
            <div className='grid grid-cols-4 gap-4'>
                <Todo />
                <Todo />
                <Todo />
            </div>
        </div>
    )
}

export default TodoList