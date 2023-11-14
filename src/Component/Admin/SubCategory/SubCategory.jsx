import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSubcategory,
  getSubcategory,
} from "../../../store/ActionCreators/SubCategoryActionCreator";

export default function SubCategory() {
  let dispatch = useDispatch();
  let SubCategoryStateData = useSelector((state) => state.SubCategoryStateData);
  function deleteItem(id) {
    if (window.confirm(`Are you sure! Cofirm to delete that item! : `)) {
      dispatch(deleteSubcategory({ id: id }));
    }
    getApiData();
  }
  function getApiData() {
    dispatch(getSubcategory());
  }
  useEffect(() => {
    getApiData();
    // eslint-disable-next-line
  }, [SubCategoryStateData.length]);
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
              Sub Category
              <Link to={"/admin/subcategory/create"}>
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
                  {SubCategoryStateData.length &&
                    SubCategoryStateData.slice(1)
                      .reverse()
                      .map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                              <Link to={`/admin/subcategory/update/${item.id}`}>
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
