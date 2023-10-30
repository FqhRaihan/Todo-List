import TodoInput from "./component/todo-input"
import TodoList from "./component/todo-list"

function App() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 gap-y-5">
      <h1 className="text-3xl">What's the plan for today?</h1>
      <TodoInput/>
      <TodoList/>
    </div>
  )
}

export default App