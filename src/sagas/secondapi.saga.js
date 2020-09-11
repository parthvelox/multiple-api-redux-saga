import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_SEARCH_LIST, RENDER_SEARCH_LIST,ADD_SEARCH} from '../actions/secondapi.action';


export function* fetchSearchList(action) {    
    //console.log(action.payload.limit);
    //`https://api.unsplash.com/search/photos/?client_id=Us-4gEnCggUOaB7XmLdDBVFED1AQS0n3f7ORbscSbwM&per_page=50&query=${search}`
  const endpoint = `https://api.unsplash.com/search/photos/?client_id=Us-4gEnCggUOaB7XmLdDBVFED1AQS0n3f7ORbscSbwM&per_page=50&query=${action.payload.search}`;
  //const endpoint = `https://jsonplaceholder.typicode.com/posts`;
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_SEARCH_LIST, searchList: data.results });
}

export function* loadSearchList() {
  //yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
  yield takeEvery(ADD_SEARCH, fetchSearchList);
}

export default function* rootSearchSaga() {
    
  yield all([loadSearchList()]);
}