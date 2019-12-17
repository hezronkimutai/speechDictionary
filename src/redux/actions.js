import { ADD_TERM} from "./actionTypes";

let nextTodoId = 0;

export const addTerm = content => ({
  type: ADD_TERM,
  payload: {
    id: ++nextTodoId,
    content
  }
});

