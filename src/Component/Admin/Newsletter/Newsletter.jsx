import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNewsletter,
  getNewsletter,
} from "../../../store/ActionCreators/NewsletterActionCreator";

export default function Newsletter() {
  const [data, setData] = useState([]);
  let dispatch = useDispatch();
  let NewsletterStateData = useSelector((state) => state.NewsletterStateData);
  function deleteItem(id) {
    if (window.confirm(`Are you sure! Cofirm to delete that item! : `)) {
      dispatch(deleteNewsletter({ id: id }));
    }
    getApiData();
  }
  function getApiData() {
    dispatch(getNewsletter());
    if (NewsletterStateData.length)
      setData(NewsletterStateData.slice(1).reverse());
  }
  useEffect(() => {
    getApiData();
    // eslint-disable-next-line
  }, [NewsletterStateData.length]);
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
              Newsletter
            </h5>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Email</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
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
