import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  todos: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE":
      const updatedTodosAfterDelete = state.todos.filter((item, index) => {
        return action.payload !== index;
      });
      return {
        ...state,
        todos: updatedTodosAfterDelete,
      };

    case "ADD":
      const updatedTodos = state.todos.map((item, index) => {
        if (action.payload === index) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    case "load":
      return action.payload
    case "todos/start":
      return {
        ...state,
        loading: true
      }
    case "todos/items":
      return {
        ...state,
        todos: action.payload,
        loading: false
      }
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
