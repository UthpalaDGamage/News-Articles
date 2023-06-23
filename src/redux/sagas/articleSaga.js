import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  GET_ARTICLE_ERROR,
  GET_ARTICLE_FETCH,
  GET_ARTICLE_SUCCESS
} from "../actions/actions";

async function getArticleFetch(action) {
    const response = await axios.get(
        `https://api.spaceflightnewsapi.net/v4/articles`
      );
      console.log(response?.data?.results);
      return response?.data?.results;
}

function* workerGetArticleFetch(action) {
  try {
    const getArticle = yield call(getArticleFetch, action);
    yield put({ type: GET_ARTICLE_SUCCESS, getArticle });
  } catch (error) {
    yield put({ type: GET_ARTICLE_ERROR, error: error });
  }
}

function* articleSaga() {
  yield takeEvery(GET_ARTICLE_FETCH, workerGetArticleFetch);
}

export default articleSaga;
