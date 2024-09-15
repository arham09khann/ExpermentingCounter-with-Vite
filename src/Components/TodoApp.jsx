import React, { useState } from "react";
import { Link } from "react-router-dom";

function TodoApp() {
  const [todoTopic, setTodoTopic] = useState("");
  const [todos, setTodos] = useState([]);
  const handleTodoTopicChnage = (e) => {
    setTodoTopic(e.target.value);
  };

  const handleComplete = () => {
    console.log(todoTopic);

    if (todoTopic.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: todoTopic,
      };
      setTodos([...todos, newTask]);
      setTodoTopic("");
    }
  };

  const handleDelete = (idToDelete) => {
    setTodos(todos.filter((todo) => todo.id !== idToDelete));
  };
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-center m-4 font-bold text-yellow-500 text-wrap">
          My TO DO tasks
        </h1>

        <span className="bg-green-500 p-2 mr-4 rounded-md absolute right-0 justify-end">
          <button>
            <Link to="/">CounterApp</Link>
          </button>
        </span>
      </div>
      <div className="flex justify-between items-center p-4 ">
        <div className="">
          <h2>Add tasks to Do-</h2>
          <input
            type="text"
            value={todoTopic}
            placeholder="Enter Topic"
            className="p-1 m-2 rounded-md bg-slate-400"
            onChange={handleTodoTopicChnage}
          ></input>
          <button
            className=" bg-green-500 rounded-md p-1 m-1"
            onClick={handleComplete}
          >
            Completed Task
          </button>
        </div>

        <div>
          <ul>
            {todos.map((todo, index) => (
              <div className="flex m-2 p-2" key={todo.id}>
                <li className=" m-2">{todo.text}</li>
                <button
                  className=" bg-green-500 rounded-md p-1 m-1"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
