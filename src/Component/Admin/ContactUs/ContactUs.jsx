import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContactUs,
  getContactUs,
} from "../../../store/ActionCreators/ContactUsActionCreator";

export default function ContactUs() {
  const [data, setData] = useState([]);
  let dispatch = useDispatch();
  let ContactUsStateData = useSelector((state) => state.ContactUsStateData);
  function deleteItem(id) {
    if (window.confirm(`Are you sure! Cofirm to delete that item! : `)) {
      dispatch(deleteContactUs({ id: id }));
    }
    getApiData();
  }
  function getApiData() {
    dispatch(getContactUs());
    if (ContactUsStateData.length) {
      setData(ContactUsStateData.slice(1).reverse());
    }
  }
  function getDate(d) {
    let date = new Date(d);
    return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
  }

  useEffect(() => {
    getApiData();
    // eslint-disable-next-line
  }, [ContactUsStateData.length]);
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
              Contact Us
            </h5>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Subject</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>View</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.subject.slice(0, 100) + "..."}</td>
                        <td>{getDate(item.date)}</td>
                        <td>{item.status}</td>
                        <td>
                          <Link to={`/admin/contactus/show/${item.id}`}>
                            <i className="fa fa-eye text-success"></i>
                          </Link>
                        </td>
                        <td>
                          {item.status !== "Active" ? (
                            <button
                              className="btn"
                              onClick={() => deleteItem(item.id)}
                            >
                              <i className="fa fa-trash text-danger"></i>
                            </button>
                          ) : (
                            <div className="ps-2 ms-1">
                              <i className="fa fa-trash text-brown"></i>
                            </div>
                          )}
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
