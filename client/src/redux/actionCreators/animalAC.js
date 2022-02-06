import {
  ADD_ANIMAL,
  UPDATE_ANIMAL,
  DELETE_ANIMAL,
  INIT_ANIMAL,
} from '../actionTypes/animalAT.js';

export const addAnimalsAC = payload => {
  return {
    type: ADD_ANIMAL,
    payload,
  };
};

export const updateAnimalsAC = payload => {
  return {
    type: UPDATE_ANIMAL,
    payload,
  };
};

export const deleteAnimalsAC = payload => {
  return {
    type: DELETE_ANIMAL,
    payload,
  };
};

export const initAnimalsAC = payload => {
  return {
    type: INIT_ANIMAL,
    payload,
  };
};
