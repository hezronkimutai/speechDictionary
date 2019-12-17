import { ADD_TERM,ADD_INPUT,ADD_CURRENT_ID} from "./actionTypes";

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
export const addCurrentId = content => ({
  type: ADD_CURRENT_ID,
  payload: {content}
});
