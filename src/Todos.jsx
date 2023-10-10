import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos, setLoading } from "./actions"

const Todos = () => {
  const { todos, loading } = useSelector((state) => state);

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

  useEffect(() => {
    dispatch(loadTodos())
  }, []);
  

  return (
    <div className="container">
      {
        loading ? "loading" : todos.map((item, index) => {
          return (
            <div className='todos' key={index}>
              <div>
                <input 
                  type="checkbox"  checked={item.completed} onClick={() => addTodo(index)} 
                />
              </div>
              <div className={item.completed ? 'text-done' : ''}>
                {item.title}
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






