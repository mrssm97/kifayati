import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useDispatch, useSelector } from "react-redux";
import { getTestimonial } from "../store/ActionCreators/TestimonialActionCreator";
export default function Testimonials() {
  const [data, setData] = useState([]);
  let dispatch = useDispatch();
  let TestimonialStateData = useSelector((state) => state.TestimonialStateData);
  function getApiData() {
    dispatch(getTestimonial());
    if (TestimonialStateData.length)
      setData(TestimonialStateData.slice(1).reverse());
  }

  useEffect(() => {
    getApiData();
    // eslint-disable-next-line
  }, [TestimonialStateData.length]);
  return (
    <>
      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="text-primary text-uppercase">Testimonial </h6>
            <h1 className="mb-5">Our Clients Say!</h1>
          </div>
          <div className="position-relative">
            <OwlCarousel className="owl-theme" loop margin={10} nav>
              {data.map((item, index) => {
                return (
                  <div key={index} className="testimonial-item text-center">
                    <img
                      className="bg-light rounded-circle p-2 mx-auto mb-3"
                      src={`/img/${item.pic}`}
                      style={{ width: "80px", height: "80px" }}
                      alt="pic"
                    />
                    <h5 className="mb-0">{item.name}</h5>
                    <p>{item.profile}</p>
                    <div className="testimonial-text bg-light text-center p-4">
                      <p className="mb-0 testimonial-message">{item.message}</p>
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </>
  );
}
