import React, { useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

function OptimizedTodoApp() {
  const [todoTopic, setTodoTopic] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodoTopicChange = useCallback((e) => {
    setTodoTopic(e.target.value);
  }, []);

  const handleComplete = useCallback(() => {
    const trimmedTopic = todoTopic.trim();
    if (trimmedTopic !== "") {
      const newTask = {
        id: Date.now(),
        text: trimmedTopic,
      };
      setTodos((prevTodos) => [...prevTodos, newTask]);
      setTodoTopic("");
    }
  }, [todoTopic]);

  const handleDelete = useCallback((idToDelete) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== idToDelete));
  }, []);

  const todoList = useMemo(
    () =>
      todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-2 m-2 border-b border-gray-300"
        >
          <span>{todo.text}</span>
          <button
            className="bg-red-500 text-white rounded-md p-1 m-1"
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </button>
        </li>
      )),
    [todos, handleDelete]
  );

  return (
    <>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-center m-4 font-bold text-yellow-500">
          My TO DO Tasks
        </h1>
        <span className="bg-green-500 p-2 mr-4 rounded-md absolute right-0">
          <Link to="/" className="text-white">
            CounterApp
          </Link>
        </span>
      </div>

      <div className="flex justify-between p-4">
        <div className="w-1/2 max-w-md">
          <h2 className="font-bold">Add tasks to do:</h2>
          <input
            type="text"
            value={todoTopic}
            placeholder="Enter Task"
            className="p-1 m-2 rounded-md bg-slate-400 w-full"
            onChange={handleTodoTopicChange}
          />
          <button
            className="bg-green-500 text-white rounded-md p-2 m-1"
            onClick={handleComplete}
          >
            Add Task
          </button>
        </div>

        <div className="w-1/2 max-h-96 overflow-y-auto">
          <ul>{todoList}</ul>
        </div>
      </div>
    </>
  );
}

export default OptimizedTodoApp;
