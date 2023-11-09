import { combineReducers } from "@reduxjs/toolkit";
import MainCategoryReducers from "./MainCategoryReducers";
import SubCategoryReducers from "./SubCategoryReducers";
import BrandReducers from "./BrandReducers";
import ProductReducers from "./ProductReducers";
import TestimonialReducers from "./TestimonialReducers";
import { CartReducer } from "./CartReducers";
import { WishlistReducer } from "./WishlistReducers";
import { CheckoutReducer } from "./CheckoutReducers";
import { NewsletterReducer } from "./NewsletterReducers";
import { ContactUsReducer } from "./ContactUsReducers";
export default combineReducers({
  MainCategoryStateData: MainCategoryReducers,
  SubCategoryStateData: SubCategoryReducers,
  BrandStateData: BrandReducers,
  ProductStateData: ProductReducers,
  TestimonialStateData: TestimonialReducers,
  CartStateData: CartReducer,
  WishlistStateData: WishlistReducer,
  CheckoutStateData: CheckoutReducer,
  NewsletterStateData: NewsletterReducer,
  ContactUsStateData: ContactUsReducer,
});
