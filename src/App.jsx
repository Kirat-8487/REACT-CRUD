import { useState, useEffect } from 'react'
import ToDoForm from './components/ToDoForm'
import ToDoItem from './components/ToDoItem'
import './App.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      )
    ])
  }

  return (
    <div className="App">
      <header>
        <h1>My Tasks</h1>
      </header>
      <ToDoForm addTask={addTask} />
      <div className="todo-list">
        {todos.map((todo) => {
          return (
            <ToDoItem
              todo={todo}
              key={todo.id}
              toggleTask={handleToggle}
              removeTask={removeTask}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
