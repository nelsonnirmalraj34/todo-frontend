import React, { useState } from 'react';
import './Dashboard.css';

const TodoDashboard = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTodos([...todos, { text, completed: false }]);
    setText('');
  };

  const toggleTodo = (idx) => {
    setTodos(
      todos.map((todo, i) =>
        i === idx ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (idx) => {
    setTodos(todos.filter((_, i) => i !== idx));
  };

  return (
    <div className="dashboard-container gradient-bg">
      <div className="dashboard-card">
        <h2 className="dashboard-title">My Todos</h2>
        <form onSubmit={addTodo} className="dashboard-form">
          <input
            type="text"
            placeholder="Add a new todo..."
            value={text}
            onChange={e => setText(e.target.value)}
            className="dashboard-input"
          />
          <button type="submit" className="dashboard-btn">Add</button>
        </form>
        <ul className="dashboard-list">
          {todos.map((todo, idx) => (
            <li key={idx} className={`dashboard-item ${todo.completed ? 'completed' : ''}`}>
              <span onClick={() => toggleTodo(idx)}>{todo.text}</span>
              <button onClick={() => deleteTodo(idx)} className="dashboard-delete">✕</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoDashboard; 