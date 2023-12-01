import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url(img/carousel-bg-1.jpg)" }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              About Us
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>

                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  About
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Service Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="d-flex py-5 px-2">
                <i className="text-primary flex-shrink-0">
                  <img src="/img/fast-delivery.png" height="120px" alt="" />
                </i>

                <div className="ps-4">
                  <h5 className="mb-3">Fast Delivery</h5>
                  <p>Get Your Product On Your Doorstep within 2 Days.</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="d-flex bg-light py-5 px-4">
                <i className="text-primary flex-shrink-0">
                  <img src="/img/refund-policy.png" height="75px" alt="" />
                </i>
                <div className="ps-4">
                  <h5 className="mb-3">100% Refund Policy</h5>
                  <p>
                    {" "}
                    You can Refund Your Product Within 7 Days. T&C Apllied.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="d-flex py-5 px-4">
                <i className=" text-primary flex-shrink-0">
                  <img src="/img/quality.png" height="75px" alt="" />
                </i>
                <div className="ps-4">
                  <h5 className="mb-3">100% Original Product</h5>
                  <p> Get 100% Original Product From Various Brands.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}

      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }}>
              <div
                className="position-relative h-100 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <img
                  className="position-absolute img-fluid w-100 h-100"
                  src="/img/about-us.jpeg"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
                <div
                  className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5"
                  style={{ background: "rgba(0, 0, 0, .08)" }}
                >
                  <h1 className="display-4 text-white mb-0">
                    15 <span className="fs-4">Years</span>
                  </h1>
                  <h4 className="text-white">Experience</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h6 className="text-primary text-uppercase"> About Us </h6>
              <h1 className="mb-4">
                <span className="text-primary">Kifayati.com</span> Is The Best
                Place for shopping online.
              </h1>
              <p className="mb-4">
                At Your Kifayati.com, we believe in the power of choice and
                quality. We strive to deliver a diverse range of products, right
                at your doorstep, with utmost ease and efficiency. We understand
                that in today’s fast-paced world, convenience is key, and we are
                here to make your life a little simpler.
              </p>
              <div className="row g-4 mb-3 pb-3">
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">01</span>
                    </div>
                    <div className="ps-3">
                      <h6>Fast Delivery</h6>
                      <span>
                        Get Your Product On Your Doorstep within 2 Days.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">02</span>
                    </div>
                    <div className="ps-3">
                      <h6>100% Refund Policy</h6>
                      <span>
                        You can Refund Your Product Within 7 Days. T&C Apllied.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <div
                      className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold text-secondary">03</span>
                    </div>
                    <div className="ps-3">
                      <h6>100% Original Product</h6>
                      <span>
                        Get 100% Original Product From Various Brands.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Fact Start --> */}
      <div className="container-fluid fact bg-dark my-5 py-5">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-4 text-center wow fadeIn"
              data-wow-delay="0.1s"
            >
              <i className="fa fa-check fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2" data-toggle="counter-up">
                50k+
              </h2>
              <p className="text-white mb-0">Happy Customers</p>
            </div>
            <div
              className="col-md-6 col-lg-4 text-center wow fadeIn"
              data-wow-delay="0.3s"
            >
              <i className="fa fa-users-cog fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2" data-toggle="counter-up">
                10+
              </h2>
              <p className="text-white mb-0">Categories of Products</p>
            </div>
            <div
              className="col-md-6 col-lg-4 text-center wow fadeIn"
              data-wow-delay="0.5s"
            >
              <i className="fa fa-users fa-2x text-white mb-3"></i>
              <h2 className="text-white mb-2" data-toggle="counter-up">
                10k+
              </h2>
              <p className="text-white mb-0">Products</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Fact End --> */}
    </>
  );
}
