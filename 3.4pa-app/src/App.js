import React, { useState } from 'react';
import './App.css';
import Button from './button';
import TextField from './TextField';
import TodoList from './TodoList'

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count === 0){
      return;
    }
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <Button label="Increment" onClick={handleIncrement} />
      <Button label="Decrement" onClick={handleDecrement} />
      <Button label="Reset" onClick={handleReset} />
      <p></p>
      <TextField value={inputValue} onChange={handleChange} />
      <h1>Text Field Value: {inputValue}</h1>
      <p></p>
      <header className="App-header">
        <p>Todo List</p>
          <TodoList />
      </header>
    </div>
  );
}

export default App;