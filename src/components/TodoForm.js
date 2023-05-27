import React, { useState } from "react";
import "../App.css";
import { OutlinedInput, Box, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

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
    <Box>
      <OutlinedInput
        placeholder="Type in here…"
        variant="outlined"
        size="lg"
        onSubmit={handleSubmit}
        type="text"
        value={userInput}
        onChange={handleOnChange}
        className="form"
      ></OutlinedInput>

       <Button onClick={handleSubmit} type="submit">
         <AddIcon />
      </Button>
    </Box>
  );
}
