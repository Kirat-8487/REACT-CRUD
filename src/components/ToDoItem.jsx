import React from 'react';

function ToDoItem({ todo, toggleTask, removeTask }) {
    return (
        <div className={`todo-item ${todo.complete ? "complete" : ""}`} key={todo.id}>
            <div
                className="item-text"
                onClick={() => toggleTask(todo.id)}
            >
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                ✕
            </div>
        </div>
    );
}

export default ToDoItem;
