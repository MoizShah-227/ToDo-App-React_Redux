import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, handleCheckbox } from '../redux/todoapp/actions';

export const Todos = ({handleEditClick, editFormVisibility}) => {
  
  const dispatch = useDispatch();

  
  const todos = useSelector((state)=>state.operationsReducer);
  {return todos.map((todo)=>(
    <div key={todo.id} className='todo-box'>
        <div className='content'>
            
            <p className='mt-1' style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>
        </div>
        <div className='actions-box'>
              {editFormVisibility===false&&(
                <>
                  <button onClick={()=>handleEditClick(todo)} className='btn btn-dark m-1'>Edit</button>
                  <button onClick={()=>dispatch(removeTodo(todo.id))}  className='btn btn-danger m-1'>Dlt</button>
                </>
              )}
        </div>
    </div>
  ))}
}
