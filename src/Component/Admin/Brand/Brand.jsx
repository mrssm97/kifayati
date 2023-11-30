import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBrand,
  getBrand,
} from "../../../store/ActionCreators/BrandActionCreator";

export default function Brand() {
  let dispatch = useDispatch();
  let BrandStateData = useSelector((state) => state.BrandStateData);
  function deleteItem(id) {
    if (window.confirm(`Are you sure! Cofirm to delete that item! : `)) {
      dispatch(deleteBrand({ id: id }));
    }
    getApiData();
  }
  function getApiData() {
    dispatch(getBrand());
  }
  useEffect(() => {
    getApiData();
    // eslint-disable-next-line
  }, [BrandStateData.length]);
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
              Brand
              <Link to={"/admin/brand/create"}>
                <li className="fa fa-plus text-light float-end"></li>
              </Link>
            </h5>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {BrandStateData.slice(1)
                    .reverse()
                    .map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>
                            <Link to={`/admin/brand/update/${item.id}`}>
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
