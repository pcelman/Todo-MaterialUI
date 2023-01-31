import { useState } from "react";
import data from "./data.json";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";
import { SecurityUpdateGoodSharp } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";

function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const onComplete = (id) => {
    console.log("task id", id);

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
    console.log("delete", id);
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  const addTodo = (newTodo) => {
    if (todos.length < 10) {
      let newItem = { id: +new Date(), task: newTodo, completed: false };
      setTodos([...todos, newItem]);
    }
  };

  // const useStyles = makeStyles({
  //   root: {
  //     fontFamily: 'Satisfy',
  //   },
  // });

  return (
    <main className="App">
      <Paper
        elevation={4}
        className="paper"
        sx={{ backgroundColor: "#F7EABE", borderRadius: "30px" }}
      >
        {/* <Typography variant="h1" component="h2" className="typography"> */}
        <h2>my todo list</h2>
        {/* </Typography> */}
        {/* <Typography variant="h3">My Todo List <Typography/> */}
        <hr className="horizontal" />
        <hr className="vertical" />
        <div className="yellow-pad"></div>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          onComplete={onComplete}
          onDeleteItem={onDeleteItem}
        />
      </Paper>
    </main>
  );
}

export default App;
