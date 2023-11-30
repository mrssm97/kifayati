import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
export default function Navbar() {
  let navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-4 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-map-marker-alt text-primary me-2"></small>
              <small>D-7, Sector-55, Noida, U.P, India</small>
            </div>
          </div>
          <div className="col-lg-8 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-phone-alt text-primary me-2"></small>
              <small>
                <NavLink to="tel:7542006442">+91-7542006442</NavLink>
              </small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-envelope text-primary me-2"></small>
              <small>
                <NavLink to="mailto:ssm.mrsanjay97@gmail.com">
                  ssm.mrsanjay97@gmail.com
                </NavLink>
              </small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <NavLink
                className="btn btn-sm-square bg-white text-primary me-1"
                to=""
              >
                <i className="fab fa-facebook-f"></i>
              </NavLink>
              <NavLink
                className="btn btn-sm-square bg-white text-primary me-1"
                to=""
              >
                <i className="fab fa-twitter"></i>
              </NavLink>
              <NavLink
                className="btn btn-sm-square bg-white text-primary me-1"
                to=""
              >
                <i className="fab fa-linkedin-in"></i>
              </NavLink>
              <NavLink
                className="btn btn-sm-square bg-white text-primary me-0"
                to=""
              >
                <i className="fab fa-instagram"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar Start --> */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center px-1 px-lg-5"
        >
          <h2 className="m-0 text-primary">
            <i className="fa fa-shopping-cart me-3"></i>Kifayti.com
          </h2>
        </NavLink>
        <button
          type="button"
          className="navbar-toggler me-1"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-lg-0">
            <NavLink to="/" className="nav-item nav-link">
              Home
            </NavLink>
            <NavLink to="about" className="nav-item nav-link">
              About
            </NavLink>
            <NavLink to="contact" className="nav-item nav-link">
              Contact
            </NavLink>

            <NavLink to="shop" className="nav-item nav-link">
              Shop
            </NavLink>
          </div>
          {localStorage.getItem("login") === "true" ? (
            <div className="btn btn-primary px-lg-4">
              <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className="nav-link dropdown-toggle text-light"
                  data-bs-toggle="dropdown"
                >
                  {localStorage.getItem("name")}
                </NavLink>
                <div
                  className="dropdown-menu fade-up m-0"
                  style={{ width: "5px", left: "-25px" }}
                >
                  {localStorage.getItem("role") === "Admin" ? (
                    <NavLink to="/admin" className="dropdown-item">
                      Profile
                    </NavLink>
                  ) : (
                    <NavLink to="/profile" className="dropdown-item">
                      Profile
                    </NavLink>
                  )}
                  {localStorage.getItem("role") === "Buyer" ? (
                    <>
                      {" "}
                      <NavLink to="cart" className="dropdown-item">
                        Cart
                      </NavLink>
                      <NavLink to="checkout" className="dropdown-item">
                        Checkout
                      </NavLink>
                    </>
                  ) : (
                    ""
                  )}
                  <button className="dropdown-item" onClick={logOut}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="btn btn-primary px-lg-4">
              <div className="nav-item dropdown">
                {" "}
                <NavLink
                  to={"/login"}
                  className="nav-link dropdown-toggle text-light"
                >
                  Login
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </>
  );
}
