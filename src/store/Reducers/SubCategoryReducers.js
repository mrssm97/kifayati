import {
  ADD_SUBCATEGORY_RED,
  DELETE_SUBCATEGORY_RED,
  GET_SUBCATEGORY_RED,
  UPDATE_SUBCATEGORY_RED,
} from "../Constants";

export default function SubCategoryReducers(state = [], action) {
  let newState, index;
  switch (action.type) {
    case ADD_SUBCATEGORY_RED: {
      newState = state;
      newState.push(action.payload);
      return newState;
    }
    case GET_SUBCATEGORY_RED:
      return action.payload;
    case UPDATE_SUBCATEGORY_RED: {
      newState = state;
      index = state.findIndex((x) => x.id === Number(action.payload.id));
      newState[index].name = action.payload.name;
      return newState;
    }
    case DELETE_SUBCATEGORY_RED: {
      newState = state;
      index = state.findIndex((x) => x.id === Number(action.payload.id));
      newState.splice(index, 1);
      return newState;
    }
    default:
      return state;
  }
}
