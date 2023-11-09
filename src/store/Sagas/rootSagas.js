import { all } from "redux-saga/effects";
import MainCategorySaga from "./MainCategorySaga";
import SubCategorySaga from "./SubCategorySaga";
import BrandSaga from "./BrandSaga";
import ProductSaga from "./ProductSaga";
import TestimonialSaga from "./TestimonialSaga";
import CartSagas from "./CartSagas";
import WishlistSagas from "./WishlistSagas";
import CheckoutSagas from "./CheckoutSagas";
import NewsletterSagas from "./NewsletterSagas";
import ContactUsSagas from "./ContactUsSagas";

export default function* rootSagas() {
  yield all([
    MainCategorySaga(),
    SubCategorySaga(),
    BrandSaga(),
    ProductSaga(),
    TestimonialSaga(),
    CartSagas(),
    WishlistSagas(),
    CheckoutSagas(),
    NewsletterSagas(),
    ContactUsSagas(),
  ]);
}
