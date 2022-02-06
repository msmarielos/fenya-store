import { call, put, takeEvery } from 'redux-saga/effects';
import { routesApi } from '../../utils/routesApi';
import {
  initItemsAC,
  deleteItemsAC,
  updateItemsAC,
  addItemsAC,
  initCategoriesAC,
} from '../actionCreators/itemsAC';
import { initListsAC } from '../actionCreators/listsAC';
import { createUserAC, loginUserAC } from '../actionCreators/userAC';

async function fetchData({ url, method, headers, body }) {
  const response = await fetch(url, { method, headers, body });
  return await response.json();
}

function* postUserAsync(action) {
  const newUser = yield call(fetchData, {
    url: routesApi.reg,
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify(action.payload),
  });
  yield put(createUserAC(newUser));
}

function* loginUserAsync(action) {
  const user = yield call(fetchData, {
    url: routesApi.login,
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
      Authorization: 'Bearer',
    },
    body: JSON.stringify(action.payload),
  });
  yield put(loginUserAC(user));
  localStorage.setItem('token', JSON.stringify(user.token.accessToken));
}

function* getItemsAsync(action) {
  const items = yield call(fetchData, {
    url: `${process.env.REACT_APP_ITEMS_URL}/${action.payload.type}/${action.payload.category}`,
  });

  yield put(initItemsAC(items));
}

function* deleteItemAsync(action) {
  const id = yield call(fetchData, {
    url: `${process.env.REACT_APP_ITEMS_URL}/${action.payload}`,
    headers: { 'Content-Type': 'Application/json' },
    method: 'DELETE',
  });

  yield put(deleteItemsAC(id));
}

function* putItemAsync(action) {
  const updatedItem = yield call(fetchData, {
    url: `${process.env.REACT_APP_ITEMS_URL}/${action.payload.id}`,
    headers: { 'Content-Type': 'Application/json' },
    method: 'PUT',
    body: JSON.stringify(action.payload),
  });

  yield put(updateItemsAC(updatedItem));
}

function* postItemAsync(action) {
  const newItem = yield call(fetchData, {
    url: process.env.REACT_APP_ITEMS_URL,
    method: 'POST',
    body: action.payload,
  });
  yield put(addItemsAC(newItem));
}

function* getCategoryCatAsync() {
  const categories = yield call(fetchData, {
    url: `${process.env.REACT_APP_CATEGORIES_URL}/cats`,
  });
  yield put(initCategoriesAC(categories));
}

function* getCategoryDogAsync() {
  const categories = yield call(fetchData, {
    url: `${process.env.REACT_APP_CATEGORIES_URL}/dogs`,
  });
  yield put(initCategoriesAC(categories));
}

function* getListsAsync() {
  const lists = yield call(fetchData, { url: process.env.REACT_APP_TYPES_URL });

  yield put(initListsAC(lists));
}

export function* globalWatcher() {
  yield takeEvery('FETCH_GET_ITEMS', getItemsAsync);
  yield takeEvery('FETCH_DELETE_ITEM', deleteItemAsync);
  yield takeEvery('FETCH_PUT_ITEM', putItemAsync);
  yield takeEvery('FETCH_POST_ITEM', postItemAsync);
  yield takeEvery('FETCH_GET_CATEGORY_CATS', getCategoryCatAsync);
  yield takeEvery('FETCH_GET_CATEGORY_DOGS', getCategoryDogAsync);
  yield takeEvery('FETCH_GET_LISTS', getListsAsync);
  yield takeEvery('FETCH_CREATE_USER', postUserAsync);
  yield takeEvery('FETCH_LOGIN_USER', loginUserAsync);
}
