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
export const addInput = content => {
  console.log('====fff====',content);
  
  return {
  type: ADD_INPUT,
  payload: {content}
}};
export const addCurrentId = content => {
  return ({
  type: ADD_CURRENT_ID,
  payload: {content}
})};
