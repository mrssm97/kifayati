import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMaincategory,
  getMaincategory,
} from "../../../store/ActionCreators/MainCategoryActionCreator";
export default function MainCategory() {
  let dispatch = useDispatch();
  let MainCategoryStateData = useSelector(
    (state) => state.MainCategoryStateData
  );
  function deleteItem(id) {
    if (window.confirm(`Are you sure! Cofirm to delete that item! : `)) {
      dispatch(deleteMaincategory({ id: id }));
    }
    // getApiData(); //Don't know why it's needed, if I have called dispatch(deleteMainCategory()) 😒
    // Problem is solved , just use [...state] instead of directly assigning the state to newState in Maincategory reducers in case: "DELETE_MAINCATEGORY_RED{}"
  }
  useEffect(() => {
    // getApiData();
    dispatch(getMaincategory()); // NO need to define getAPIData sprately just write it inside the useEffect as we need it only once.... when componentDidMount, that exactly useEffect does with empty dependency array
    // eslint-disable-next-line
  }, [MainCategoryStateData.length]);
  // console.log("called");
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className="bg-primary w-100 p-2 text-light text-center">
              Main Category
              <Link to={"/admin/maincategory/create"}>
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
                  {MainCategoryStateData.length ? (
                    MainCategoryStateData.slice(1)
                      .reverse()
                      .map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                              <Link
                                to={`/admin/maincategory/update/${item.id}`}
                              >
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
                      })
                  ) : (
                    <tr></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
