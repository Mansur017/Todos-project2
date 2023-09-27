import { createStore } from 'redux';

const initialState = [
  {
    text: "React",
    done: false
  },
  {
    text: "HTML",
    done: false
  },
  {
    text: "CSS",
    done: false
  }, 
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE":
      return state.filter((item, index) => {
        if (action.payload === index) {
          return false;
        }
        return true;
      });

    case "ADD":
      return state.map((item, index) => {
        if (action.payload === index) {
          return { ...item, done: !item.done };
        }
        return item;
      });

    default:
      return state;
  }
};


const store = createStore(reducer);

export default store;
