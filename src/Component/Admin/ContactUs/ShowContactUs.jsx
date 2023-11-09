import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContactUs,
  getContactUs,
} from "../../../store/ActionCreators/ContactUsActionCreator";
import { updateContactUs } from "../../../store/ActionCreators/ContactUsActionCreator";

export default function ShowContact() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let ContactUsStateData = useSelector((state) => state.ContactUsStateData);

  function updateItem() {
    dispatch(updateContactUs({ ...data, status: "Done" }));
    setData((old) => {
      return {
        ...old,
        status: "Done",
      };
    });
  }

  function deleteItem() {
    if (window.confirm(`Are you sure! Cofirm to delete that item! : `)) {
      dispatch(deleteContactUs({ id: id }));
      getApiData();
    }
    navigate("/admin/contactus");
  }
  function getApiData() {
    dispatch(getContactUs());
    if (ContactUsStateData.length) {
      setData(ContactUsStateData.slice(1).find((x) => x.id === Number(id)));
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
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <h5 className="bg-primary w-100 p-2 text-light text-center">
              Contact-Us Query
            </h5>
            <div className="table-responsive">
              <table className="table table-borderedv table-striped table-hover">
                <tbody>
                  <tr>
                    {" "}
                    <th>Id</th>
                    <td>{data.id}</td>
                  </tr>
                  <tr>
                    <th>Name</th>
                    <td>{data.name}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{data.email}</td>
                  </tr>{" "}
                  <tr>
                    <th>Phone</th>
                    <td>{data.phone}</td>
                  </tr>
                  <tr>
                    <th>Subject</th>
                    <td>{data.subject} </td>
                  </tr>
                  <tr>
                    <th>Message</th>
                    <td>{data.message} </td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td>{getDate(data.date)} </td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td>{data.status}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      {data.status === "Active" ? (
                        <button
                          className="btn btn-success w-100 text-light"
                          onClick={updateItem}
                        >
                          Update Status to Done
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary w-100 text-light"
                          onClick={deleteItem}
                        >
                          Delete
                        </button>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
