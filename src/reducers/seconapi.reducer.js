
import { RENDER_SEARCH_LIST } from '../actions/secondapi.action';


const initialState = {
  searchList: []
};

export default function searchApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_SEARCH_LIST:
        return {
          ...state,
          searchList: action.searchList
        };
    
    default:
      return state;
  }
}