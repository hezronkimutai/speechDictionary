import { ADD_TERM} from "./actionTypes";

let nextTermId = 0;

export const addTerm = content => ({
  type: ADD_TERM,
  payload: {
    id: ++nextTermId,
    content
  }
});

