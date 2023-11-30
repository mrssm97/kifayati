import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTestimonial,
  getTestimonial,
} from "../../../store/ActionCreators/TestimonialActionCreator";

export default function Testimonial() {
  const [data, setData] = useState({});
  let dispatch = useDispatch();
  let TestimonialStateData = useSelector((state) => state.TestimonialStateData);
  function deleteItem(id) {
    if (window.confirm(`Are you sure! Cofirm to delete that item! : `)) {
      dispatch(deleteTestimonial({ id: id }));
    }
    getApiData();
  }
  function getApiData() {
    dispatch(getTestimonial());
    if (TestimonialStateData.length) {
      setData(TestimonialStateData.slice(1).reverse());
    }
  }
  useEffect(() => {
    getApiData();
    // eslint-disable-next-line
  }, [TestimonialStateData.length]);
  return (
    <>
      {" "}
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className="bg-primary w-100 p-2 text-light text-center">
              Testimonial
              <Link to={"/admin/testimonial/create"}>
                <li className="fa fa-plus text-light float-end"></li>
              </Link>
            </h5>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Profile</th>
                    <th>Pic</th>
                    <th>Message</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length &&
                    data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.profile}</td>
                          <td>
                            <img
                              src={`/img/${item.pic}`}
                              height={"100px"}
                              width={"100px"}
                              alt=""
                            />
                          </td>
                          <td>{item.message.slice(0, 150) + "..."}</td>
                          <td>
                            <Link to={`/admin/testimonial/update/${item.id}`}>
                              <i className="fa fa-edit text-success"></i>
                            </Link>
                          </td>
                          <td>
                            <button
                              className="btn"
                              onClick={() => deleteItem(item.id)}
                            >
                              <i className="fa fa-trash text-danger"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
