import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteWishlist,
  getWishlist,
} from "../store/ActionCreators/WishlistActionCreators";
import { getCheckout } from "../store/ActionCreators/CheckoutActionCreator";

export default function Profile() {
  const [user, setUser] = useState({});
  const [wishlist, setWishlist] = useState([]);
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();

  let WishlistStateData = useSelector((state) => state.WishlistStateData);
  let CheckoutStateData = useSelector((state) => state.CheckoutStateData);

  function deleteItem(id) {
    dispatch(deleteWishlist({ id: id }));
  }

  async function getApiData() {
    let response = await fetch("/user/" + localStorage.getItem("userid"), {
      method: "get",
      headers: {
        "content-type": "apllication/json",
      },
    });
    response = await response.json();
    setUser(response);

    dispatch(getWishlist());
    dispatch(getCheckout());
    if (WishlistStateData.length) {
      setWishlist(
        WishlistStateData.slice(1).filter(
          (x) => x.userid === localStorage.getItem("userid")
        )
      );
    }

    if (CheckoutStateData.length) {
      setOrders(
        CheckoutStateData.slice(1).filter(
          (x) => x.userid === localStorage.getItem("userid")
        )
      );
    }
  }
  useEffect(() => {
    getApiData();
    // eslint-disable-next-line
  }, [WishlistStateData.length, CheckoutStateData.length]);
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-6">
            {user.pic ? (
              <img
                src={`/img/${user.pic}`}
                height={"400px"}
                width="100%"
                alt=""
              />
            ) : (
              <img
                src={`/products/nouser.png`}
                height={"400px"}
                width="100%"
                alt=""
              />
            )}
          </div>
          <div className="col-md-6">
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
        </div>
        <h5 className="text-center bg-primary text-light p-2 my-3">
          Wishlist Section
        </h5>
        {wishlist.length ? (
          <div className="table-responsive">
            <table className="table table-bordered tab le-striped table-hover">
              <tbody>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Color/Size</th>
                  <th>Price</th>
                  <th></th>
                  <th></th>
                </tr>
                {wishlist.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <a
                          href={`/products/${item.pic}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={`/products/${item.pic}`}
                            height="80px"
                            width="80px"
                            className="rounded-1"
                            alt=""
                          />
                        </a>
                      </td>
                      <td>
                        <Link to={`/product/${item.id}`} className="text-dark">
                          {item.name}{" "}
                        </Link>
                      </td>
                      <td>{item.brand} </td>
                      <td>
                        {item.color}/{item.size}{" "}
                      </td>
                      <td>&#8377;{item.price} </td>
                      <td>
                        <Link to={`/product/${item.productid}`}>
                          <i className="fa fa-shopping-cart text-success"></i>
                        </Link>
                      </td>
                      <td>
                        {" "}
                        <button
                          className="btn"
                          onClick={() => deleteItem(item.id)}
                        >
                          <i className="fa fa-trash text-primary"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center p-5">
            <p>No Items in Wishlist</p>
            <Link to="/shop" className="btn btn-primary">
              Shop Now
            </Link>
          </div>
        )}
        <h5 className="text-center bg-primary text-light p-2 my-3">
          Orders Section
        </h5>
        {orders.length ? (
          <>
            {orders.map((item, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-md-4">
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped table-hover">
                        <tbody>
                          <tr>
                            <th>Ordered Id</th>
                            <td>{item.id} </td>
                          </tr>
                          <tr>
                            <th>Order Status</th>
                            <td>{item.orderstatus}</td>
                          </tr>
                          <tr>
                            <th>Payment Mode</th>
                            <td>{item.paymentmode} </td>
                          </tr>
                          <tr>
                            <th>Payment Status</th>
                            <td>{item.paymentstatus} </td>
                          </tr>
                          <tr>
                            <th>Subtotal</th>
                            <td>&#8377;{item.subtotal} </td>
                          </tr>
                          <tr>
                            <th>Shipping</th>
                            <td>&#8377;{item.shipping} </td>
                          </tr>
                          <tr>
                            <th>Total </th>
                            <td>&#8377;{item.total} </td>
                          </tr>
                          <tr>
                            <th>Date</th>
                            <td>{item.date} </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th></th>
                          <th>Name</th>
                          <th>Brand</th>
                          <th>Color/Size</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>Total</th>
                        </tr>
                        {item.products.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                <a
                                  href={`/products/${item.pic}`}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <img
                                    src={`/products/${item.pic}`}
                                    height="80px"
                                    width="80px"
                                    className="rounded-1"
                                    alt=""
                                  />
                                </a>
                              </td>
                              <td>
                                {" "}
                                <Link
                                  to={`/product/${item.id}`}
                                  className="text-dark text-center"
                                >
                                  {item.name}{" "}
                                </Link>
                              </td>
                              <td>{item.brand} </td>
                              <td>
                                {item.color}/{item.size}
                              </td>
                              <td>&#8377;{item.price} </td>
                              <td>{item.qty} </td>
                              <td>&#8377;{item.total} </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <hr style={{ border: "5px solid navy" }} />
                </div>
              );
            })}
          </>
        ) : (
          <div className="text-center p-5">
            <p>No Order History</p>
            <Link to="/shop" className="btn btn-primary">
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
