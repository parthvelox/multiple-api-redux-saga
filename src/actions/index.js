export const ADD_LIMIT = 'ADD_LIMIT';
export const LOAD_TODO_LIST = 'LOAD_TODO_LIST';
export const RENDER_TODO_LIST = 'RENDER_TODO_LIST';

export function loadToDoList() {
    return {
      type: LOAD_TODO_LIST
    };
  }
export function addLimit(limit) {
  return {
    type: ADD_LIMIT,
    payload: {
      limit
    }
  };
}