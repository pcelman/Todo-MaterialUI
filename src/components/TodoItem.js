import React from 'react'
import "./styles.css"
import DeleteIcon from '@mui/icons-material/Delete';
import { Delete } from '@mui/icons-material';

// todo.completed ? "line-through" : "none"
// minuto 15 text decoration  

export default function TodoItem({todo, onComplete, onDeleteItem}) {
  return (
    <section>
<input type="checkbox"checked= {todo.completed} onChange={()=> onComplete(todo.id)}/>
    <div className={ todo.completed ? "completed" : "none" }>{todo.task }</div>
    <a onClick={()=>onDeleteItem(todo.id)}>
<DeleteIcon />
    </a>
    </section>
  )
}
