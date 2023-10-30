import TodoInput from "./components/todo-input"
import TodoList from "./components/todo-list"

function App() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-y-3">
      <h1 className="text-3xl">What's the plan for today?</h1>
      <TodoInput/>
      <TodoList/>
    </div>
  )
}

export default App