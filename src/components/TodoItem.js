import React from "react";
import "./styles.css";
import DeleteIcon from "@mui/icons-material/Delete";
import "../App.css";

export default function TodoItem({ todo, onComplete, onDeleteItem }) {
  return (
    <section className="todoItem">
      <input
        className="todoItem__checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={() => onComplete(todo.id)}
      />
      <a onClick={() => onDeleteItem(todo.id)}>
        <DeleteIcon sx={{ color: "rgb(72, 99, 149)" }} />
      </a>
      <div className={todo.completed ? "completed" : "simple"}>{todo.task}</div>
    </section>
  );
}
