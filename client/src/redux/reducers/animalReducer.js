import {
  ADD_ANIMAL,
  UPDATE_ANIMAL,
  DELETE_ANIMAL,
  INIT_ANIMAL,
} from '../actionTypes/animalAT.js';
const initialState = {
  animals: [],
};

export const animalReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_ANIMAL:
      return {
        ...state,
        animals: action.payload,
      };

    case ADD_ANIMAL:
      // const newAnimal = {
      //   id: action.payload.id,
      //   name: action.payload.name,
      //   isChecked: action.payload.isChecked,
      //   age: action.payload.age,
      //   city: action.payload.city,
      //   breed: action.payload.breed,
      //   title: action.payload.title,
      //   description: action.payload.description,
      //   user_id: action.payload.user_id,
      //   img: action.payload.img,
      //   type: action.payload.type,
      // };

      return {
        ...state,
        animals: state.animals ? [...state.animals, action.payload] : [action.payload],
      };

    // case UPDATE_ANIMAL:
    //   return {
    //     ...state,
    //   };

    case DELETE_ANIMAL:
      return {
        ...state,
        animals: state.animals.filter(animal => {
          return animal.id !== action.payload.id;
        }),
      };

    default:
      return state;
  }
};
