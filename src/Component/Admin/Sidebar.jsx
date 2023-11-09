import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="list-group">
        <Link
          to="/admin"
          className="list-group-item list-group-item-action my-1 active"
          aria-current="true"
        >
          <i className="fa fa-home"></i>
          <span className="ms-5 ps-3">Home</span>
        </Link>
        <Link
          to="/admin/users"
          className="list-group-item list-group-item-action my-1"
        >
          <i className="fa fa-user"></i>
          <span className="ms-5 ps-3">User</span>
        </Link>
        <Link
          to="/admin/maincategory"
          className="list-group-item list-group-item-action my-1"
        >
          <i className="fa fa-filter"></i>
          <span className="ms-5 ps-3">Main Catergory</span>
        </Link>
        <Link
          to="/admin/subcategory"
          className="list-group-item list-group-item-action my-1"
        >
          <i className="fa fa-filter"></i>
          <span className="ms-5 ps-3">Sub Category</span>
        </Link>
        <Link
          to="/admin/brand"
          className="list-group-item list-group-item-action"
        >
          <i className="fa fa-list"></i>
          <span className="ms-5 ps-3">Brand</span>
        </Link>
        <Link
          to="/admin/product"
          className="list-group-item list-group-item-action my-1"
        >
          <i className="fa fa-list"></i>
          <span className="ms-5 ps-3">Product</span>
        </Link>
        <Link
          to="/admin/newsletter"
          className="list-group-item list-group-item-action my-1"
        >
          <i className="fa fa-envelope"></i>
          <span className="ms-5 ps-3">Newslatter</span>
        </Link>
        <Link
          to="/admin/contactus"
          className="list-group-item list-group-item-action my-1"
        >
          <i className="fa fa-phone"></i>
          <span className="ms-5 ps-3">Contact Us</span>
        </Link>
        <Link
          to="/admin/checkout"
          className="list-group-item list-group-item-action my-1"
        >
          <i className="fa fa-shopping-cart"></i>
          <span className="ms-5 ps-3">Checkout</span>
        </Link>
        <Link
          to="/admin/testimonial"
          className="list-group-item list-group-item-action my-1"
        >
          <i className="fa fa-star"></i>
          <span className="ms-5 ps-3">Testimonial</span>
        </Link>
      </div>
    </>
  );
}
