import { all } from "redux-saga/effects";
import articleSaga from "./articleSaga";
function* rootSaga(){
    yield all([articleSaga()])
  }
  export default rootSaga;