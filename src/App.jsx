import { useState } from "react"

export default function App(){
 const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: input }]); // Assign a unique ID
      setInput("");
    }
  };
    const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
    const clearAll= () => {
    setTodos([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Todo List</h2>
        {/* <button onClick={clearAll} className="border p-2 flex-1 rounded bg-red-400">Clear All</button> */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown} // 🔹 Handles Enter Key
            className="border p-2 flex-1 rounded"
            placeholder="Enter a todo..."
          />
          <button
            onClick={addTodo}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center justify-between bg-gray-200 p-2 rounded">
              <span>{todo.text}</span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="text-red-500 font-bold cursor-pointer"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
             {todos.length > 0 && (
          <button
            onClick={clearAll}
            className="mt-4  bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 block mx-auto w-[50%]"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}