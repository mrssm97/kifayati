import React, { useEffect, useState } from "react";
import Testimonials from "./Testimonials";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/ActionCreators/ProductActionCreator";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  let dispatch = useDispatch();
  let ProductStateData = useSelector((state) => state.ProductStateData);

  function getApiData() {
    dispatch(getProduct());
    if (ProductStateData.length) {
      setData(ProductStateData.slice(1).reverse().slice(0, 8));
    }
  }
  useEffect(() => {
    getApiData();
    // eslint-disable-next-line
  }, [ProductStateData.length]);
  return (
    <>
      {/* <!-- Carousel Start --> */}
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-100"
                src="/img/carousel-bg-1.jpg"
                height="500px"
                alt="pic1"
              />
              <div className="carousel-caption d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">
                      <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                        Online Best Shopping Plateform
                      </h6>
                      <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                        Latest Trending Products
                      </h1>
                      <Link
                        to="/shop"
                        className="btn btn-primary py-3 px-5 animated slideInDown"
                      >
                        Shop Now<i className="fa fa-arrow-right ms-3"></i>
                      </Link>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img
                        className="img-fluid"
                        src="/img/carousel-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="w-100"
                src="/img/carousel-bg-2.jpg"
                height="500px"
                alt="pic1"
              />
              <div className="carousel-caption d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">
                      <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                        Online Best Shopping Plateform
                      </h6>
                      <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                        Latest Trending Products
                      </h1>
                      <button className="btn btn-primary py-3 px-5 animated slideInDown">
                        Shop Now<i className="fa fa-arrow-right ms-3"></i>
                      </button>
                    </div>
                    <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                      <img
                        className="img-fluid"
                        src="/img/carousel-2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

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
                  <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
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
                  <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
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
                  <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}

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

      {/* <!-- Product Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase">Best In Fashion</h6>
            <h1 className="mb-5">Latest Products</h1>
          </div>
          <div className="row g-4">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item">
                    <div className="position-relative overflow-hidden">
                      <img
                        className="img-fluid"
                        src={`/products/${item.pic1}`}
                        style={{ height: "230px", width: "100%" }}
                        alt=""
                      />
                      <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                        <img
                          src={`/products/${item.pic2}`}
                          className="position-absolute start-0 top-0 w-100 h-100 z-1"
                          style={{ height: "230px", width: "100%" }}
                          alt=""
                        />
                        <Link
                          className="btn btn-square bg-primary text-light w-100 position-absolute start-0 bottom-0 w-100 h-25 z-3"
                          to={`/product/${item.id}`}
                        >
                          <i className="fa fa-shopping-cart me-2"></i>
                          <span>Add to Cart</span>
                        </Link>
                      </div>
                    </div>
                    <div className="bg-light text-center p-4">
                      <h5 className="fw-bold mb-0" height="50px">
                        {item.name}
                      </h5>
                      <small>
                        <del className="text-danger">
                          &#8377;{item.baseprice}
                          {"  "}
                        </del>
                        &#8377;{item.finalprice}{" "}
                        <sup className="text-success">{item.discount}% off</sup>
                      </small>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <!-- Product End --> */}

      <Testimonials />
    </>
  );
}
