import { useState } from "react";
import data from "./data.json";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";
import { SecurityUpdateGoodSharp } from "@mui/icons-material";

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

  const addTodo=(newTodo)=> {
let newItem = {id: +new Date(), task: newTodo, completed: false}
setTodos([...todos, newItem])
}
  
  return (
    <div className="App">
      <TodoForm addTodo={addTodo}/>
      <TodoList
        todos={todos}
        onComplete={onComplete}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
}

export default App;
