"use client"
import React, { useState } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

const TodoList: React.FC = () => {
  const [todos, setTodo] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleAddTodo = () => {
    if (input.trim()) {
      setTodo([...todos, input]);
      setInput("");
    }
  };

  const handleDeleteTodo = (index: number) => {
    setTodo(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="transition-all duration-700 ease-in-out hover:shadow-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 w-[350px] md:w-[700px] h-auto p-6 rounded-xl flex flex-col items-center">
      <h1 className="text-white text-3xl font-bold mb-6">My To-Do List</h1>
      <input
        className="w-full md:w-[80%] h-[3rem] rounded-md mb-4 px-4 text-lg text-gray-800 shadow-md focus:outline-none focus:ring-4 focus:ring-purple-300"
        type="text"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleAddTodo}
        className="w-[50%] h-12 bg-purple-600 text-white font-semibold rounded-md shadow-md hover:shadow-lg hover:bg-purple-700 transition-all duration-500"
      >
        Add To-Do
      </button>

      <ul className="w-full mt-6 space-y-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-all duration-500"
          >
            <span className="text-gray-800 text-lg">{todo}</span>
            <button
              onClick={() => handleDeleteTodo(index)}
              className="text-red-500 hover:text-red-700 transition-all"
            >
              {/* Wrap the icon with a span for styling */}
              <span className="h-6 w-6 flex items-center justify-center">
                <RiDeleteBack2Fill size={24} color="currentColor" />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
