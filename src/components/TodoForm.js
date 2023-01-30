import { AddToDriveOutlined } from "@mui/icons-material";
import React, { useState } from "react";

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
        <input type="text" value={userInput} onChange={handleOnChange}></input>
        <button>Add todo</button>
      </form>
    </div>
  );
}
