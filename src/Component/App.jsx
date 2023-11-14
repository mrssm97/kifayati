import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";
import AdminHome from "./Admin/AdminHome";
import MainCategory from "./Admin/MainCategory/MainCategory";
import CreateMainCategory from "./Admin/MainCategory/CreateMainCategory";
import UpdateMainCategory from "./Admin/MainCategory/UpdateMainCategory";
import SubCategory from "./Admin/SubCategory/SubCategory";
import CreateSubCategory from "./Admin/SubCategory/CreateSubCategory";
import UpdateSubCategory from "./Admin/SubCategory/UpdateSubCategory";
import Brand from "./Admin/Brand/Brand";
import User from "./Admin/User/User";
import CreateBrand from "./Admin/Brand/CreateBrand";
import UpdateBrand from "./Admin/Brand/UpdateBrand";
import Product from "./Admin/Product/Product";
import CreateProduct from "./Admin/Product/CreateProduct";
import UpdateProduct from "./Admin/Product/UpdateProduct";
import Testimonial from "./Admin/Testimonial/Testimonial";
import CreateTestimonial from "./Admin/Testimonial/CreateTestimonial";
import UpdateTestimonial from "./Admin/Testimonial/UpdateTestimonial";
import Shop from "./Shop";
import SingleProduct from "./SingleProduct";
import Profile from "./Profile";
import UpdateProfile from "./UpdateProfile";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Confirmation from "./Confirmation";
import Newsletter from "./Admin/Newsletter/Newsletter";
import ContactUs from "./Admin/ContactUs/ContactUs";
import ShowContact from "./Admin/ContactUs/ShowContactUs";
import AdminCheckout from "./Admin/Checkout/AdminCheckout";
import ShowCheckout from "./Admin/Checkout/ShowCheckout";
import NoAdminMessage from "./NoAdminMessage";

export default function App(props) {
  // const basename = document.querySelector("base")?.getAttribute("href");
  const [storage, setStorage] = useState({
    invalid: false,
    remember: "",
    login: localStorage.getItem("login"),
    fName: localStorage.getItem("fName"),
    lName: localStorage.getItem("lName"),
    email: localStorage.getItem("email"),
    password: localStorage.getItem("password"),
    subscribe: localStorage.getItem("subscribe"),
  });
  return (
    <>
      <BrowserRouter basename="/kifayati">
        <Navbar storage={storage} setProfile={setStorage} />
        <Routes>
          {/*Public Access*/}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup setProfile={setStorage} />} />
          {/*User Login*/}
          <Route
            path="/profile"
            element={
              localStorage.getItem("login") === "true" ? <Profile /> : <Login />
            }
          />
          <Route
            path="/update-profile"
            element={
              localStorage.getItem("login") === "true" ? (
                <UpdateProfile />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/cart"
            element={
              localStorage.getItem("login") === "true" ? <Cart /> : <Login />
            }
          />
          <Route
            path="/checkout"
            element={
              localStorage.getItem("login") === "true" ? (
                <Checkout />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/confirmation"
            element={
              localStorage.getItem("login") === "true" ? (
                <Confirmation />
              ) : (
                <Login />
              )
            }
          />
          {/*Admin Login*/}
          <Route
            path="/admin"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminHome />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/maincategory"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <MainCategory />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/maincategory/create"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <CreateMainCategory />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/maincategory/update/:id"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <UpdateMainCategory />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/subcategory"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <SubCategory />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/subcategory/create"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <CreateSubCategory />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/subcategory/update/:id"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <UpdateSubCategory />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/brand"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <Brand />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/brand/create"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <CreateBrand />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/brand/update/:id"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <UpdateBrand />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/product"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <Product />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/product/create"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <CreateProduct />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/product/update/:id"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <UpdateProduct />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/users"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <User />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/testimonial"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <Testimonial />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/testimonial/create"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <CreateTestimonial />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/testimonial/update/:id"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <UpdateTestimonial />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/newsletter"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <Newsletter />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/contactus"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <ContactUs />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/contactus/show/:id"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <ShowContact />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/checkout"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <AdminCheckout />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin/checkout/show/:id"
            element={
              localStorage.getItem("login") === "true" ? (
                localStorage.getItem("role") === "Admin" ? (
                  <ShowCheckout />
                ) : (
                  <NoAdminMessage />
                )
              ) : (
                <Login />
              )
            }
          />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
