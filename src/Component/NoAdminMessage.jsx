import React from "react";
import { Link } from "react-router-dom";

export default function NoAdminMessage() {
  function logOut() {
    localStorage.clear();
  }
  return (
    <>
      <div className="container-fluid text-center">
        {" "}
        <h5 className="text-danger fs-4">
          Sorry!! You have User Login Please Admin Login to Proceed.
        </h5>
        <Link className="btn btn-success p-2 my-3" to="/login" onClick={logOut}>
          User Logout/Admin Login
        </Link>
      </div>
    </>
  );
}
