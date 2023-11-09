import { put, takeEvery } from "redux-saga/effects";
import {
  addRecord,
  deleteRecord,
  getRecord,
  updateRecord,
} from "./Services/ProductServices";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_RED,
  DELETE_PRODUCT,
  DELETE_PRODUCT_RED,
  GET_PRODUCT,
  GET_PRODUCT_RED,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_RED,
} from "../Constants";

function* add(action) {
  let response = yield addRecord(action.payload);
  yield put({ type: ADD_PRODUCT_RED, payload: response });
}
function* get() {
  let response = yield getRecord();
  yield put({ type: GET_PRODUCT_RED, payload: response });
}
function* update(action) {
  yield updateRecord(action.payload);
  yield put({ type: UPDATE_PRODUCT_RED, payload: action.payload });
}
function* deleteItem(action) {
  yield deleteRecord(action.payload);
  yield put({ type: DELETE_PRODUCT_RED, payload: action.payload });
}

export default function* ProductSaga() {
  yield takeEvery(ADD_PRODUCT, add);
  yield takeEvery(GET_PRODUCT, get);
  yield takeEvery(UPDATE_PRODUCT, update);
  yield takeEvery(DELETE_PRODUCT, deleteItem);
}
