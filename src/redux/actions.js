import { ADD_TERM,ADD_INPUT} from "./actionTypes";
let nextTermId = 0;

export const addTerm = content => {
  const word = content.list[0].word;
  
  return {
  type: ADD_TERM,
  payload: {
    id: word,
    content
  }
}};
export const addInput = content => ({
  type: ADD_INPUT,
  payload: {content}
});

