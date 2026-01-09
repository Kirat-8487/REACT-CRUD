import { useState } from 'react';

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input 
        value={userInput} 
        onChange={handleChange} 
        type="text" 
        placeholder="What's on your mind today?"
        className="todo-input"
      />
      <button className="todo-btn">Add Task</button>
    </form>
  );
}

export default ToDoForm;
