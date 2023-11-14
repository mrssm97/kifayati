import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCart,
  getCart,
  updateCart,
} from "../store/ActionCreators/CartActionCreators";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);
  let updatingDependency = useSelector(
    (state) =>
      state.CartStateData[1] &&
      state.CartStateData.slice(1)
        .map((x) => x.qty)
        .join("")
  );
  let dispatch = useDispatch();
  let CartStateData = useSelector((state) => state.CartStateData);

  function updateData(id, option) {
    var item = cart.find((x) => x.id === id);
    if (option === "dec" && item.qty === 1) {
      return;
    } else if (option === "dec") {
      item.qty = item.qty - 1;
      item.total = item.total - item.price;
    } else {
      item.qty = item.qty + 1;
      item.total = item.total + item.price;
    }
    dispatch(updateCart(item));
    getApiData();
  }

  function deleteData(id) {
    dispatch(deleteCart({ id: id }));
  }
  function getApiData() {
    console.log("Api called");
    dispatch(getCart());
    if (CartStateData.length) {
      let item = CartStateData.slice(1).filter(
        (x) => x.userid === localStorage.getItem("userid")
      );
      setCart(item);
      let total = 0;
      for (let c of item) {
        total = total + c.total;
      }
      setSubtotal(total);
      if (total > 0 && total < 500) {
        setShipping(50);
        setTotal(total + 50);
      } else {
        setTotal(total);
        setShipping(0);
      }
    }
  }
  useEffect(() => {
    getApiData();
    // eslint-disable-next-line
  }, [CartStateData.length, updatingDependency]);
  console.log("cart rendered");
  return (
    <>
      <div className="container-fluid my-3">
        {cart.length ? (
          <>
            <div className="table-responsive">
              <table className="table table-bordered table-striped table-hover">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Color/Size</th>
                    <th>Price</th>
                    <th></th>
                    <th>QTY</th>
                    <th></th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <Link
                            to={`/products/${item.pic}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src={`/kifayati/products/${item.pic}`}
                              className="rounded-1"
                              height="80px"
                              width="80px"
                              alt=""
                            />
                          </Link>
                        </td>
                        <th>{item.name}</th>
                        <th>{item.brand}</th>
                        <th>
                          {item.color}/{item.size}
                        </th>
                        <th>{item.price}</th>
                        <th>
                          <button
                            className="btn"
                            onClick={() => updateData(item.id, "dec")}
                          >
                            <i className="fa fa-minus text-primary"></i>
                          </button>
                        </th>
                        <th>{item.qty}</th>
                        <th>
                          {" "}
                          <button
                            className="btn"
                            onClick={() => updateData(item.id, "inc")}
                          >
                            <i className="fa fa-plus text-primary"></i>
                          </button>
                        </th>
                        <th>{item.total}</th>
                        <th>
                          {" "}
                          <button
                            className="btn"
                            onClick={() => deleteData(item.id)}
                          >
                            <i className="fa fa-trash text-primary"></i>
                          </button>
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <table className="table table-bordered table-striped table-hover">
                  <tbody>
                    <tr>
                      <th>Subtotal</th>
                      <td>&#8377;{subtotal} </td>
                    </tr>
                    <tr>
                      <th>Shipping</th>
                      <td>&#8377;{shipping} </td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td>&#8377;{total} </td>
                    </tr>
                    <tr>
                      <th colSpan={2}>
                        <Link to="/checkout" className="btn btn-primary w-100">
                          Checkout
                        </Link>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center my-5">
            <p>No Items in Cart</p>
            <Link to="/shop" className="btn btn-primary">
              Shop
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
