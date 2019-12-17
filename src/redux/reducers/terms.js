import { ADD_TERM } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  
  switch (action.type) {
    case ADD_TERM: {
      const { id, content } = action.payload;      
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
          }
        }
      };
    }
    default:
      return state;
  }
}
