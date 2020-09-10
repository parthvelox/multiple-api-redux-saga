import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST,ADD_LIMIT} from '../actions';


export function* fetchToDoList(action) {    
    //console.log(action.payload.limit);
  //const endpoint = `https://jsonplaceholder.typicode.com/posts?_limit=${action.payload.limit}`;
  const endpoint = `https://jsonplaceholder.typicode.com/posts`;
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export default function* rootSaga() {
    yield takeEvery(ADD_LIMIT, fetchToDoList);
  yield all([loadToDoList()]);
}