import { call, put, takeEvery } from 'redux-saga/effects';
import { routesApi } from '../../utils/routesApi';
import {
  initItemsAC,
  deleteItemsAC,
  updateItemsAC,
  addItemsAC,
  initCategoriesAC,
  initCurrentItemAC,
  initListItemsAC,
} from '../actionCreators/itemsAC';
import { initListsAC } from '../actionCreators/listsAC';
import { createUserAC } from '../actionCreators/userAC';

async function fetchData({ url, method, headers, body }) {
  const response = await fetch(url, { method, headers, body });
  return await response.json();
}

function* postUserAsync(action) {
  console.log(process.env.REACT_APP_REG);
  const user = yield call(fetchData, {
    url: routesApi.reg,
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify(action.payload),
  });
  yield put(createUserAC(user));
}

function* getItemsAsync(action) {
  const items = yield call(fetchData, {
    url: `${process.env.REACT_APP_ITEMS_URL}/${action.payload.type}/${action.payload.category}`,
  });

  yield put(initItemsAC(items));
}

function* getListItemsAsync(action) {
  const items = yield call(fetchData, {
    url: process.env.REACT_APP_ITEMS_URL,
  });

  yield put(initListItemsAC(items));
}

function* getCurrentItemAsync(action) {
  const item = yield call(fetchData, {
    url: `${process.env.REACT_APP_ITEMS_URL}/${action.payload}`,
  });

  yield put(initCurrentItemAC(item));
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

function* getCategoryAsync(action) {
  const categories = yield call(fetchData, {
    url: `${process.env.REACT_APP_CATEGORIES_URL}${action.payload}`,
  });
  yield put(initCategoriesAC(categories));
}

function* getListsAsync() {
  const lists = yield call(fetchData, { url: process.env.REACT_APP_TYPES_URL });

  yield put(initListsAC(lists));
}

function* postOrderItemsAsync(action) {
  const newItem = yield call(fetchData, {
    url: process.env.REACT_APP_ORDER_URL,
    headers: { 'Content-Type': 'Application/json' },
    method: 'POST',
    body: JSON.stringify(action.payload),
  });
}

export function* globalWatcher() {
  yield takeEvery('FETCH_GET_ITEMS', getItemsAsync);
  yield takeEvery('FETCH_GET_CURRENT_ITEM', getCurrentItemAsync);
  yield takeEvery('FETCH_DELETE_ITEM', deleteItemAsync);
  yield takeEvery('FETCH_PUT_ITEM', putItemAsync);
  yield takeEvery('FETCH_POST_ITEM', postItemAsync);
  yield takeEvery('FETCH_GET_CATEGORY', getCategoryAsync);
  yield takeEvery('FETCH_GET_LISTS', getListsAsync);
  yield takeEvery('FETCH_POST_ORDER_ITEMS', postOrderItemsAsync);
  yield takeEvery('FETCH_CREATE_USER', postUserAsync);
  yield takeEvery('FETCH_GET_ITEM_LIST', getListItemsAsync);
}
