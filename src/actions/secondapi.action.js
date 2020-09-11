export const ADD_SEARCH = 'ADD_SEARCH';
export const LOAD_SEARCH_LIST = 'LOAD_SEARCH_LIST';
export const RENDER_SEARCH_LIST = 'RENDER_SEARCH_LIST';

export function loadSearchList() {
    return {
      type: LOAD_SEARCH_LIST
    };
  }
export function addSearch(search) {
  return {
    type: ADD_SEARCH,
    payload: {
      search
    }
  };
}