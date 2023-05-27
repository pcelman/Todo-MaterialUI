import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Checkbox } from "@mui/material";
import "../App.css";

export default function TodoItem({ todo, onComplete, onDeleteItem }) {
  return (
    <Box className="todo__item">
      <Checkbox
        defaultChecked
        type="checkbox"
        checked={todo.completed}
        onChange={() => onComplete(todo.id)}
      />
      <a onClick={() => onDeleteItem(todo.id)}>
        <DeleteIcon sx={{ color: "rgb(72, 99, 149)" }} />
      </a>
      <div className={todo.completed ? "completed" : "simple"}>{todo.task}</div>
    </Box>
  );
}
