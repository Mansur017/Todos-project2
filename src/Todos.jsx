import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Todos = () => {
  const todos = useSelector(state => state);
  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE",
      payload: id
    });
  }

  const addTodo = (id) => {
    dispatch({
      type: "ADD",
      payload: id
    });
  }

  return (
    <div className="container">
      {
        todos.map((item, index) => {
          return (
            <div className='todos' key={index}>
              <div>
                <input 
                  type="checkbox"  checked={item.done} onClick={() => addTodo(index)} 
                />
              </div>
              <div className={item.done ? 'text-done' : ''}>
                {item.text}
              </div>
              <div>
                <button onClick={() => deleteTodo(index)} className='delete-btn'>X</button>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};


export default Todos;






