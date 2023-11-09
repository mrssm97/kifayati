import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  let navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      {/* <!-- Spinner Start --> */}
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem", role: "status" }}
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      {/* <!-- Spinner End --> */}

      {/* <!-- Topbar Start --> */}
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
                <Link to="tel:7542006442">+91-7542006442</Link>
              </small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-envelope text-primary me-2"></small>
              <small>
                <Link to="mailto:ssm.mrsanjay97@gmail.com">
                  ssm.mrsanjay97@gmail.com
                </Link>
              </small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <Link
                className="btn btn-sm-square bg-white text-primary me-1"
                to=""
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                className="btn btn-sm-square bg-white text-primary me-1"
                to=""
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                className="btn btn-sm-square bg-white text-primary me-1"
                to=""
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link
                className="btn btn-sm-square bg-white text-primary me-0"
                to=""
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar Start --> */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center px-1 px-lg-5"
        >
          <h2 className="m-0 text-primary">
            <i className="fa fa-shopping-cart me-3"></i>Kifayti.com
          </h2>
        </Link>
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
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="about" className="nav-item nav-link">
              About
            </Link>
            <Link to="contact" className="nav-item nav-link">
              Contact
            </Link>

            <Link to="shop" className="nav-item nav-link">
              Shop
            </Link>
          </div>
          {localStorage.getItem("login") === "true" ? (
            <div className="btn btn-primary py-4 px-lg-4">
              <div className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle text-light"
                  data-bs-toggle="dropdown"
                >
                  {localStorage.getItem("name")}
                </Link>
                <div
                  className="dropdown-menu fade-up m-0"
                  style={{ width: "5px", left: "-25px" }}
                >
                  {localStorage.getItem("role") === "Admin" ? (
                    <Link to="/admin" className="dropdown-item">
                      Profile
                    </Link>
                  ) : (
                    <Link to="/profile" className="dropdown-item">
                      Profile
                    </Link>
                  )}
                  {localStorage.getItem("role") === "Buyer" ? (
                    <>
                      {" "}
                      <Link to="cart" className="dropdown-item">
                        Cart
                      </Link>
                      <Link to="checkout" className="dropdown-item">
                        Checkout
                      </Link>
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
            <Link to={"/login"} className="btn btn-primary py-4 px-lg-5">
              Login
            </Link>
          )}
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </>
  );
}
