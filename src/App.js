import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { Paper, Box } from "@mui/material";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const onComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === Number(id)
          ? { ...todo, completed: !todo.completed }
          : { ...todo };
      })
    );

    todos.map((todo) => {
      return todo.id === Number(id)
        ? { ...todo, completed: true }
        : { ...todo };
    });
  };
  const onDeleteItem = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  const addTodo = (newTodo) => {
    if (todos.length < 10) {
      let newItem = { id: +new Date(), task: newTodo, completed: false };
      setTodos([...todos, newItem]);
    }
  };

  return (
    <Box >
      <Paper
        elevation={11}
        className="paper"
        sx={{ backgroundColor: "#F7EABE", borderRadius: "30px" }}
      >
        <h2 className="paper__title">my todo list</h2>
        <hr className="paper__horizontal" />
        <hr className="paper__vertical" />
       
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          onComplete={onComplete}
          onDeleteItem={onDeleteItem}
        />
      </Paper>
      <div className="link">
      Designed and developed by  <br />
      <a
        href="https://portfolio-paulacelman.vercel.app/"
        target="_blank"
        rel="noreferrer noopener"
    
        >
        Paula Celman
      </a>
        </div>
    </Box>
  );
}

export default App;
