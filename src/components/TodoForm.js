import React, { useState } from "react";
import "../App.css";

import { AiOutlineEnter } from "react-icons/ai";

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
        <a onClick={handleSubmit}>
          <AiOutlineEnter className="enter-icon" />
        </a>
      </form>
    </div>
  );
}
