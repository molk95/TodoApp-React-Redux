import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETE_TASK
} from "../constants/actionTypes";

const initialState = [];

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return state.concat({
        tasks: action.payload.task,
        id: action.payload.id,
        isComplete: false
      });
    case DELETE_TASK:
      return state.filter((el, i) => i !== action.payload);
    case COMPLETE_TASK:
      return state.map((el, i) => {
        if (i === action.payload) return { ...el, isComplete: !el.isComplete };
        else {
          return el;
        }
      });
    case EDIT_TASK:
      return state.map(el => {
        if (el.id === action.payload.id) {
          return {
            ...el,
            tasks: action.payload.task,
            id: action.payload.id,
            isComplete: false
          };
        } else return el;
      });
    default:
      return state;
  }
};
export default TodoReducer;
