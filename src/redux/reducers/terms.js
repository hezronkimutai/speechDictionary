import { ADD_TERM, ADD_INPUT } from "../actionTypes";

const initialState = {
  terms: [],
  currentId:'',
  input:''
};

export default function(state = initialState, action) {
  
  switch (action.type) {
    case ADD_TERM: {
      const { id, content } = action.payload;      
      return {
        ...state,
       terms:[ 
         ...state.terms,
         {
          id,
            content,
        }
      ]
      ,currentId:id
      };
    }
    case ADD_INPUT: {
      const { content } = action.payload;      
      return {
        ...state,
       input:content
      };
    }
    default:
      return state;
  }
}
