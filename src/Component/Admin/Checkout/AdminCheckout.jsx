import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCheckout } from "../../../store/ActionCreators/CheckoutActionCreator";

export default function AdminCheckout() {
  const [data, setData] = useState([]);
  let dispatch = useDispatch();
  let CheckoutStateData = useSelector((state) => state.CheckoutStateData);

  function getApiData() {
    dispatch(getCheckout());
    if (CheckoutStateData.length) {
      setData(CheckoutStateData.slice(1).reverse());
    }
  }
  function getDate(d) {
    let date = new Date(d);
    return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
  }

  useEffect(() => {
    getApiData();
    // eslint-disable-next-line
  }, [CheckoutStateData.length]);
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
              Checkout
            </h5>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>UserId</th>
                    <th>Order Status</th>
                    <th>Payment Mode</th>
                    <th>Payment Status</th>
                    <th>Subtotal</th>
                    <th>Shipping</th>
                    <th>Total</th>
                    <th>Date</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.userid}</td>
                        <td>{item.orderstatus}</td>
                        <td>{item.paymentmode}</td>
                        <td>{item.paymentstatus}</td>
                        <td>&#8377;{item.subtotal}</td>
                        <td>&#8377;{item.shipping}</td>
                        <td>&#8377;{item.total}</td>
                        <td>{getDate(item.date)}</td>
                        <td>
                          <Link to={`/admin/checkout/show/${item.id}`}>
                            <i className="fa fa-eye text-success"></i>
                          </Link>
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
