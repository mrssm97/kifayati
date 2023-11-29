import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

export default function AdminHome() {
  const [user, setUser] = useState({});
  async function getApiData() {
    let response = await fetch(
      "/https://kifayatidb.onrender.com/user/" + localStorage.getItem("userid"),
      {
        method: "get",
        headers: {
          "content-type": "apllication/json",
        },
      }
    );
    response = await response.json();
    setUser(response);
  }
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className="bg-primary w-100 py-3 text-light text-center">
              Admin
            </h5>
            <div className="row">
              <div className="col-md-6">
                {user.pic ? (
                  <img
                    src={`/kifayati/img/${user.pic}`}
                    height={"400px"}
                    width="100%"
                    alt=""
                  />
                ) : (
                  <img
                    src={`/kifayati/products/nouser.png`}
                    height={"400px"}
                    width="100%"
                    alt=""
                  />
                )}
              </div>
              <div className="col-md-6">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <th>UserName</th>
                      <td>{user.username}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>{user.phone}</td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <Link
                          to={"/update-profile"}
                          className="btn btn-primary w-100"
                        >
                          Updat Profile
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
