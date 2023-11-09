import { put, takeEvery } from "redux-saga/effects";
import {
  addRecord,
  deleteRecord,
  getRecord,
  updateRecord,
} from "./Services/TestimonialServices";
import {
  ADD_TESTIMONIAL,
  ADD_TESTIMONIAL_RED,
  DELETE_TESTIMONIAL,
  DELETE_TESTIMONIAL_RED,
  GET_TESTIMONIAL,
  GET_TESTIMONIAL_RED,
  UPDATE_TESTIMONIAL,
  UPDATE_TESTIMONIAL_RED,
} from "../Constants";

function* add(action) {
  let response = yield addRecord(action.payload);
  yield put({ type: ADD_TESTIMONIAL_RED, payload: response });
}
function* get() {
  console.log("get called");
  let response = yield getRecord();
  yield put({ type: GET_TESTIMONIAL_RED, payload: response });
}
function* update(action) {
  yield updateRecord(action.payload);
  yield put({ type: UPDATE_TESTIMONIAL_RED, payload: action.payload });
}
function* deleteItem(action) {
  yield deleteRecord(action.payload);
  yield put({ type: DELETE_TESTIMONIAL_RED, payload: action.payload });
}

export default function* TestimonialSaga() {
  yield takeEvery(ADD_TESTIMONIAL, add);
  yield takeEvery(GET_TESTIMONIAL, get);
  yield takeEvery(UPDATE_TESTIMONIAL, update);
  yield takeEvery(DELETE_TESTIMONIAL, deleteItem);
}
