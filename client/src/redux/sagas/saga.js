import { call, put, takeEvery } from 'redux-saga/effects';
import { createUserAC, loginUserAC } from '../actionCreators/userAC';
import { routesApi } from '../../utils/routesApi';
import {
  initItemsAC,
  deleteItemsAC,
  updateItemsAC,
  addItemsAC,
  initCategoriesAC,
  initCurrentItemAC,
  initListItemsAC,
  successResponseAC,
  errorResponseAC,
  pendingResponseAC,
} from '../actionCreators/itemsAC';
import { initListsAC } from '../actionCreators/listsAC';
import { initAnimalsAC } from '../actionCreators/animalAC';

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
  yield put(pendingResponseAC());

  const response = yield call(fetchData, {
    url: `${process.env.REACT_APP_ITEMS_URL}/${action.payload}`,
    headers: { 'Content-Type': 'Application/json' },
    method: 'DELETE',
  });

  if (response.success) {
    yield put(successResponseAC());
    yield put(deleteItemsAC(action.payload));
  } else {
    yield put(errorResponseAC());
  }
}

function* putItemAsync(action) {
  yield put(pendingResponseAC());
  const response = yield call(fetchData, {
    url: `${process.env.REACT_APP_ITEMS_URL}/${action.payload.id}`,
    method: 'PUT',
    body: action.payload.item,
  });

  if (response.success) {
    yield put(successResponseAC());
    yield put(addItemsAC(response.item));
  } else {
    yield put(errorResponseAC());
  }

  yield put(updateItemsAC(response.item));
}

function* postItemAsync(action) {
  yield put(pendingResponseAC());
  const response = yield call(fetchData, {
    url: process.env.REACT_APP_ITEMS_URL,
    method: 'POST',
    body: action.payload,
  });

  if (response.success) {
    yield put(successResponseAC());
    yield put(addItemsAC(response.item));
  } else {
    yield put(errorResponseAC());
  }
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

function* getAnimalsAsync(action) {
  const animals = yield call(fetchData, {
    url: process.env.REACT_APP_ANIMALS_URL,
  });

  yield put(initAnimalsAC(animals));
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
  yield takeEvery('FETCH_LOGIN_USER', loginUserAsync);
  yield takeEvery('FETCH_GET_ANIMALS', getAnimalsAsync);
}
