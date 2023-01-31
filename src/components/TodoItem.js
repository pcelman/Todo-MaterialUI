import React from 'react'
import "./styles.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { Delete } from '@mui/icons-material';
import "../App.css";

// todo.completed ? "line-through" : "none"
// minuto 15 text decoration  

export default function TodoItem({todo, onComplete, onDeleteItem}) {
  return (
    <section className='todoItem'>
<input className="todoItem__checkbox "type="checkbox"checked= {todo.completed} onChange={()=> onComplete(todo.id)}/>
    <a onClick={()=>onDeleteItem(todo.id)}>
<DeleteIcon />
    </a>
    <div className={ todo.completed ? "completed" : "none" }>{todo.task }</div>
    </section>
  )
}
