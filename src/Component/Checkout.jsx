import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteCart,
  getCart,
} from "../store/ActionCreators/CartActionCreators";
import { addCheckout } from "../store/ActionCreators/CheckoutActionCreator";

export default function Checkout() {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);
  const [mode, setMode] = useState("COD");

  let dispatch = useDispatch();
  let navigate = useNavigate();
  let CartStateData = useSelector((state) => state.CartStateData);
  function placeOrder() {
    var item = {
      userid: localStorage.getItem("userid"),
      paymentmode: mode,
      paymentstatus: "Pending",
      orderstatus: "Order is Placed",
      shipping: shipping,
      subtotal: subtotal,
      total: total,
      date: new Date(),
      products: cart,
    };
    dispatch(addCheckout(item));
    for (let item of cart) {
      dispatch(deleteCart({ id: item.id }));
    }
    navigate("/confirmation");
  }

  async function getApiData() {
    let response = await fetch(
      "/https://kifayatidb.onrender.com/user/" + localStorage.getItem("userid"),
      {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    response = await response.json();
    setUser(response);
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
  }, [CartStateData.length]);
  return (
    <>
      <div className="container-fluid my-3">
        {cart.length ? (
          <div className="row">
            <div className="col-md-6">
              <h5 className="text-center p-2 bg-primary text-light">
                Shipping Details
              </h5>
              <table className="table table-bordered table-hover table-striped">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <th>User Name</th>
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
                    <th>Address</th>
                    <td>{user.address}</td>
                  </tr>
                  <tr>
                    <th>PIN</th>
                    <td>{user.pin}</td>
                  </tr>
                  <tr>
                    <th>City</th>
                    <td>{user.city}</td>
                  </tr>
                  <tr>
                    <th>State</th>
                    <td>{user.state}</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <Link
                        className="btn btn-primary w-100"
                        to="/update-profile"
                      >
                        Update Profile
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              {" "}
              <h5 className="text-center p-2 bg-primary text-light">
                Products in dCart
              </h5>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>&#8377;{item.price}</td>
                        <td>{item.qty}</td>
                        <td>&#8377;{item.total} </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <table className="table table-responsive">
                <tbody>
                  <tr>
                    <th>Subtotal</th>
                    <th>&#8377;{subtotal}</th>
                  </tr>
                  <tr>
                    <th>Shipping</th>
                    <th>&#8377;{shipping}</th>
                  </tr>
                  <tr>
                    <th>Subtotal</th>
                    <th>&#8377;{total}</th>
                  </tr>
                  <tr>
                    <th>Payment Mode</th>
                    <td>
                      <select
                        name="mode"
                        className="form-select"
                        onChange={(e) => setMode(e.target.value)}
                      >
                        <option value="COD">COD</option>
                        <option value="NetBanking/Card/UPI">
                          NetBanking/Card/UPI
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>
                      <button
                        className="btn btn-primary w-100"
                        onClick={placeOrder}
                      >
                        Place Order
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center my-5">
            <p> No Items in Cart</p>
            <Link to="/shop" className="btn btn-primary">
              Shop
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
