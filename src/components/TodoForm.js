import { AddToDriveOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import "../App.css";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function TodoForm({ addTodo }) {
  const [userInput, setUserInput] = useState("");
  const handleOnChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      addTodo(userInput);
      setUserInput("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleOnChange}
          className="form"
        ></input>
        <a>
          <button>Add todo</button>
        </a>
      </form>
    </div>
  );
}
