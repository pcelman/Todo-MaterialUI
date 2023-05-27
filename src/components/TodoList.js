import React from "react";
import Box from '@mui/material/Box';
import TodoItem from "./TodoItem";
import "../App.css";

export default function TodoList({ todos, onComplete, onDeleteItem }) {
  return (
    <Box className="todo__list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </Box>
  );
}
