import TodoScreen from "./components/TodoScreen"

function App() {
  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center bg-gray-50 dark:bg-gray-800 antialiased selection:bg-indigo-500 selection:text-white">
        <TodoScreen/>
      </div>
    </>
  )
}

export default App