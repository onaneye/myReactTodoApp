import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [nextId, setNextId] = useState(1);

  // Function to handle adding a new TODO item
  function addTodo() {
    if (text.trim() === '') {
      return; // Prevent adding empty TODO items
    }
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: nextId, text: text, completed: false },
    ]);
    setText('');
    setNextId(nextId + 1);
  }

  // Function to handle toggling the completion status of a TODO item
  function toggleTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // Function to handle deleting a TODO item
  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  // Render the JSX
  return (
    <>
      <div className="container">
        <div className="heading">
          <h2>TODO APP</h2>
        </div>
        <input
          className="input-text"
          placeholder="Enter a text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="button" onClick={addTodo}>
          +
        </button>
        <ul className="todo-container">
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                className="checked"
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span
                className={todo.completed ? 'completed' : ''}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
