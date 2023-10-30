import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/todo-provider";
import axios from "axios";

function TodoList (){
    const { todos, setTodos, setTodoInput, setIsEdit, setTodoEdit } =
    useContext(TodoContext);
    const [activeFilter, setActiveFilter] = useState("All");

    const handleStatus = (index) => {
        let cloneTodos = [...todos];
        cloneTodos[index].status = !cloneTodos[index].status;
    
        setTodos([...cloneTodos]);
      };
    
      const handleEdit = (todo) => {
        setTodoEdit(todo);
        setTodoInput(todo.value);
        setIsEdit(true);
      };

      const handleDelete = (todo) => {
        const updatedTodos = todos.filter((item) => item.id !== todo.id);
        setTodos(updatedTodos);

      }

      const filteredTodo = () => {
        if (activeFilter === "Completed") {
          return todos.filter((todo) => todo.status);
        } else if (activeFilter === "Active") {
          return todos.filter((todo) => !todo.status);
        }
      
        return todos;
      };

      const handleClick = (status) => {
        setActiveFilter(status);
      };

      const handleActive = () => {
        setActiveFilter("Active");
      };
      
      const handleComplete = () => {
        setActiveFilter("Completed");
      };


    return (
        <>
        <div>
            <div className="flex justify-between mb-5">
                <button className="bg-gray-400 p-1 px-2 rounded-md focus:bg-gray-600 " onClick={() => handleClick("All")} >All</button> 
                <button className="bg-gray-400 p-1 px-2 rounded-md focus:bg-gray-600 " onClick={() => handleClick("Active")}>Active</button>
                <button className="bg-gray-400 p-1 px-2 rounded-md focus:bg-gray-600 " onClick={() => handleClick('Completed')}>Completed</button>
            </div>
            {filteredTodo().map((todo, index) => (
            <div key={todo.id} className={`flex items.center justify-between w-80 outline outline-1 outline-slate-400 px-2 mb-5 py-2 $`}>
                <div>
                <input type="checkbox" checked={todo.status} onClick={() => handleStatus(index)}
                className={ `h-3 w-3 rounded-full shadow ${todo.status ? "line-through" : ""}  `}/>

                <span className={ `ml-2 ${todo.status == true ? "line-through" : ""}  `}>
                    {todo.value}
                </span>
                </div>
                <div>
                    <button onClick={()=>handleEdit(todo)} className={todo.status ? "hidden" : ""}>✏️</button>
                    <button onClick={()=>handleDelete(todo)} className={todo.status ? "hidden" : ""}>🗑️</button>
                </div>
            </div>
            ))}
        </div>
        </>
    )
}

export default TodoList