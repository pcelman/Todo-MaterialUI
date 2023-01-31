import React from "react";
import TodoItem from "./TodoItem";
import "../App.css";

export default function TodoList({ todos, onComplete, onDeleteItem }) {
  return (
    <div className="todoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
}
