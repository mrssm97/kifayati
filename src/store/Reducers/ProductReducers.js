import {
  ADD_PRODUCT_RED,
  DELETE_PRODUCT_RED,
  GET_PRODUCT_RED,
  UPDATE_PRODUCT_RED,
} from "../Constants";

export default function ProductReducers(state = [], action) {
  let newState, index;
  switch (action.type) {
    case ADD_PRODUCT_RED: {
      newState = [...state];
      newState.push(action.payload);
      return newState;
    }
    case GET_PRODUCT_RED:
      return action.payload;
    case UPDATE_PRODUCT_RED: {
      newState = [...state];
      index = newState.findIndex((x) => x.id === Number(action.payload.id));
      newState[index].name = action.payload.name;
      newState[index].mainCategory = action.payload.maincategory;
      newState[index].subcategory = action.payload.subcategory;
      newState[index].brand = action.payload.brand;
      newState[index].color = action.payload.color;
      newState[index].size = action.payload.size;
      newState[index].baseprice = action.payload.baseprice;
      newState[index].discount = action.payload.discount;
      newState[index].finalprice = action.payload.finalprice;
      newState[index].stock = action.payload.stock;
      newState[index].description = action.payload.description;
      newState[index].pic = action.payload.pic;
      newState[index].pic2 = action.payload.pic2;
      newState[index].pic3 = action.payload.pic3;
      newState[index].pic4 = action.payload.pic4;
      console.log("Product store updated!");
      return newState;
    }
    case DELETE_PRODUCT_RED: {
      newState = [...state];
      index = newState.findIndex((x) => x.id === Number(action.payload.id));
      newState.splice(index, 1);
      return newState;
    }
    default:
      return state;
  }
}
