import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="list-group">
        <NavLink
          exact
          to="/admin"
          className="list-group-item list-group-item-action my-1"
          end
        >
          <i className="fa fa-home"></i>
          <span className="ms-5 ps-3">Home</span>
        </NavLink>

        <NavLink
          to="/admin/users"
          className="list-group-item list-group-item-action my-1"
        >
          <i className="fa fa-user"></i>
          <span className="ms-5 ps-3">User</span>
        </NavLink>
        <NavLink
          to="/admin/maincategory"
          className="list-group-item list-group-item-action my-1"
        >
          <i className="fa fa-filter"></i>
          <span className="ms-5 ps-3">Main Catergory</span>
        </NavLink>
        <NavLink
          to="/admin/subcategory"
          className="list-group-item list-group-item-action my-1"
        >
          <i className="fa fa-filter"></i>
          <span className="ms-5 ps-3">Sub Category</span>
        </NavLink>
        <NavLink
          to="/admin/brand"
          className="list-group-item list-group-item-action"
        >
          <i className="fa fa-list"></i>
          <span className="ms-5 ps-3">Brand</span>
        </NavLink>
        <NavLink
          to="/admin/product"
          className="list-group-item list-group-item-action my-1"
        >
          <i className="fa fa-list"></i>
          <span className="ms-5 ps-3">Product</span>
        </NavLink>
        <NavLink
          to="/admin/newsletter"
          className="list-group-item list-group-item-action my-1"
        >
          <i className="fa fa-envelope"></i>
          <span className="ms-5 ps-3">Newslatter</span>
        </NavLink>
        <NavLink
          to="/admin/contactus"
          className="list-group-item list-group-item-action my-1"
        >
          <i className="fa fa-phone"></i>
          <span className="ms-5 ps-3">Contact Us</span>
        </NavLink>
        <NavLink
          to="/admin/checkout"
          className="list-group-item list-group-item-action my-1"
        >
          <i className="fa fa-shopping-cart"></i>
          <span className="ms-5 ps-3">Checkout</span>
        </NavLink>
        <NavLink
          to="/admin/testimonial"
          className="list-group-item list-group-item-action my-1"
        >
          <i className="fa fa-star"></i>
          <span className="ms-5 ps-3">Testimonial</span>
        </NavLink>
      </div>
    </>
  );
}
