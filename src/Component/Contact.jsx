import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContactUs } from "../store/ActionCreators/ContactUsActionCreator";
import { Link } from "react-router-dom";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [show, setShow] = useState(false);
  let dispatch = useDispatch();
  function getInputData(e) {
    var { name, value } = e.target;
    setData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }
  function postData(e) {
    e.preventDefault();
    dispatch(addContactUs({ ...data, date: new Date(), status: "Active" }));
    setShow(true);
    setData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  }
  return (
    <>
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid page-header mb-5 p-0"
        style={{ backgroundImage: "url(kifayati/img/carousel-bg-1.jpg)" }}
      >
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Contact
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
                  Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Contact Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-primary text-uppercase"> Contact Us </h6>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                <div className="col-md-4">
                  <div className="bg-light d-flex flex-column justify-content-center p-4">
                    <h5 className="text-uppercase">Address</h5>
                    <p className="m-0 text-primary">
                      <i className="fa fa-hoem text-primary me-2"></i>
                      D-7, Sector 55, Noida, India
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light d-flex flex-column justify-content-center p-4">
                    <h5 className="text-uppercase">Email</h5>
                    <p className="m-0">
                      <i className="fa fa-envelope-open text-primary me-2"></i>
                      <a href="mailto:ssm.mrsanjay97@gmail.com">
                        ssm.mrsanjay97@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="bg-light d-flex flex-column justify-content-center p-4">
                    <h5 className="text-uppercase">Phone</h5>
                    <p className="m-0">
                      <i className="fa fa-phone text-primary me-2"></i>
                      <a href="mailto:+91 7542006442">+91-7542006442</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="100%"
                    height="500"
                    id="gmap_canvas"
                    title="home"
                    src="https://maps.google.com/maps?q=D-7,%20Sector%2055,%20Noida,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                {show ? (
                  <p>Thanks to Contact Us. Our Team Will Contact You Soon</p>
                ) : (
                  ""
                )}
                <form onSubmit={postData}>
                  <div className="row g-3">
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={data.name}
                          onChange={getInputData}
                          id="name"
                          placeholder="Name"
                          required
                        />
                        <label htmlFor="name">Name</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={data.email}
                          onChange={getInputData}
                          placeholder="Email"
                          required
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="phone"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={data.phone}
                          onChange={getInputData}
                          placeholder="Phone"
                        />
                        <label htmlFor="subject">Phone</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          value={data.subject}
                          onChange={getInputData}
                          placeholder="Subject"
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          name="message"
                          value={data.message}
                          onChange={getInputData}
                          style={{ height: "100px" }}
                          required
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
    </>
  );
}
