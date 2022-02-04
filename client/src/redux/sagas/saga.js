import { call, put, takeEvery } from 'redux-saga/effects'
import { initItemsAC, deleteItemsAC, updateItemsAC, addItemsAC, initCategoriesAC } from '../actionCreators/itemsAC'

async function fetchData({ url, method, headers, body }) {
  const response = await fetch(url, { method, headers, body });
  return (await response.json());
}

function* getItemsAsync() {
  const items = yield call(fetchData, { url: process.env.REACT_APP_ITEMS_URL });

  yield put(initItemsAC(items));
}

function* deleteItemAsync(action) {
  const id = yield call(fetchData, { url: `${process.env.REACT_APP_ITEMS_URL}/${action.payload}`, headers: { 'Content-Type': 'Application/json' }, method: 'DELETE' });

  yield put(deleteItemsAC(id));
}

function* putItemAsync(action) {
  const updatedItem = yield call(fetchData, { url: `${process.env.REACT_APP_ITEMS_URL}/${action.payload.id}`, headers: { 'Content-Type': 'Application/json' }, method: 'PUT', body: JSON.stringify(action.payload) });

  yield put(updateItemsAC(updatedItem));
}

function* postItemAsync(action) {
  const newItem = yield call(fetchData, { url: `${process.env.REACT_APP_ITEMS_URL}`, headers: { 'Content-Type': 'Application/json' }, method: 'POST', body: JSON.stringify(action.payload) });

  yield put(addItemsAC(newItem));
}

function* getCategoryAsync() {
  const categories = yield call(fetchData, {url: `${process.env.REACT_APP_CATEGORIES_URL}` })
  yield put(initCategoriesAC(categories));
}

export function* globalWatcher() {
  yield takeEvery("FETCH_GET_ITEMS", getItemsAsync);
  yield takeEvery("FETCH_DELETE_ITEM", deleteItemAsync);
  yield takeEvery("FETCH_PUT_ITEM", putItemAsync);
  yield takeEvery("FETCH_POST_ITEM", postItemAsync);
  yield takeEvery("FETCH_GET_CATEGORY", getCategoryAsync);
}