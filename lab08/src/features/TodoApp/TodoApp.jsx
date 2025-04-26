// src/features/TodoApp/TodoApp.jsx
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './todoSlice';

export default function TodoApp() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div style={{ border: '1px solid green', padding: '1rem', margin: '1rem' }}>
      <h2>📋 To-do List</h2>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Thêm công việc"
      />
      <button onClick={handleAdd} style={{ marginLeft: '0.5rem' }}>Thêm</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ margin: '0.5rem 0' }}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                marginRight: '1rem'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
