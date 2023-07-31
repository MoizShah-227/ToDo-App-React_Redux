import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './Components/Action/Action';

function App() {
  const [todo, setTodo]= useState();
  
  const dispatch = useDispatch()
  
  const Todo = useSelector((state)=>state.Todo)
  
  const {todos} =Todo;

  const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(AddTodoAction(todo))
    setTodo()    
  }

  const removerHandler=(t)=>{
    dispatch(RemoveTodoAction(t))
  }
  return (
    <div className='container'>
      <h1 className='d-flex '>ToDo App</h1>
      
      <form onSubmit={handleSubmit}>
      <input className='bg-transparent' placeholder='Enter item'  onChange={(e)=>setTodo(e.target.value)}/>
      <button className='btn btn-dark'>Add</button>
      </form>
      <ul className='alltodos'>
      {todos&&todos.map((t)=>(
         <li key={t.id} className='todo-list'>
          <span>{t.todo} </span>
          <button onClick={()=>removerHandler(t)} className='btn btn-danger'>Delete</button>
        </li>
      ))}
      
      </ul>
      {JSON.stringify(todo)}
    </div>
    
  );
}

export default App;
