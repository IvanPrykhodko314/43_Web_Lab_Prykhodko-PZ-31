import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const [inputValue, setInputValue] = useState('');
  
  // Дістаємо масив todos зі state
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TODO', payload: inputValue });
      setInputValue('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo Redux</h1>
      
      <div>
        <input 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Нове завдання"
        />
        <button onClick={handleAdd}>Додати</button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
            <span 
              onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
              style={{ 
                textDecoration: todo.completed ? 'line-through' : 'none', 
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;