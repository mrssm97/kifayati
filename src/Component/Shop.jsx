import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/ActionCreators/ProductActionCreator";
import { getBrand } from "../store/ActionCreators/BrandActionCreator";
import { getMaincategory } from "../store/ActionCreators/MainCategoryActionCreator";

import { getSubcategory } from "../store/ActionCreators/SubCategoryActionCreator";
import { Link } from "react-router-dom";

export default function Shop() {
  let [mainCategory, setMainCategory] = useState([]);
  let [subCategory, setSubCategory] = useState([]);
  let [brand, setBrand] = useState([]);
  let [product, setProduct] = useState([]);
  let [br, setBr] = useState("All");
  let [mc, setMc] = useState("All");
  let [sc, setSc] = useState("All");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [flag, setFlag] = useState(true);
  const [search, setSearch] = useState("");

  let dispatch = useDispatch();
  let BrandStateData = useSelector((state) => state.BrandStateData);
  let SubCategoryStateData = useSelector((state) => state.SubCategoryStateData);
  let MainCategoryStateData = useSelector(
    (state) => state.MainCategoryStateData
  );
  let ProductStateData = useSelector((state) => state.ProductStateData);
  function categoryFilter(mc, sc, br, min = -1, max = -1) {
    console.log(mc);
    console.log("called");
    setMc(mc);
    console.log(mc);
    setSc(sc);
    setBr(br);
    let data = [];
    if (mc === "All" && sc === "All" && br === "All")
      data = ProductStateData.slice(1).reverse();
    else if (mc !== "All" && sc === "All" && br === "All")
      data = ProductStateData.slice(1)
        .reverse()
        .filter((x) => x.maincategory === mc);
    else if (mc === "All" && sc !== "All" && br === "All")
      data = ProductStateData.slice(1)
        .reverse()
        .filter((x) => x.subcategory === sc);
    else if (mc === "All" && sc === "All" && br !== "All")
      data = ProductStateData.slice(1)
        .reverse()
        .filter((x) => x.brand === br);
    else if (mc !== "All" && sc !== "All" && br === "All")
      data = ProductStateData.slice(1)
        .reverse()
        .filter((x) => x.maincategory === mc && x.subcategory === sc);
    else if (mc !== "All" && sc === "All" && br !== "All")
      data = ProductStateData.slice(1)
        .reverse()
        .filter((x) => x.maincategory === mc && x.brand === br);
    else if (mc === "All" && sc !== "All" && br !== "All")
      data = ProductStateData.slice(1)
        .reverse()
        .filter((x) => x.subcategory === sc && x.brand === br);
    else
      data = ProductStateData.slice(1)
        .reverse()
        .filter(
          (x) => x.maincategory === mc && x.subcategory === sc && x.brand === br
        );
    if (min === -1 && max === -1) setProduct(data);
    else
      setProduct(
        data.filter((x) => x.finalprice >= min && x.finalprice <= max)
      );
    console.log(product);
  }

  function getPriceFilter(e) {
    var { name, value } = e.target;
    if (name === "min") setMin(value);
    else setMax(value);
  }

  function applyPriceFilter() {
    categoryFilter(mc, sc, br, min, max);
  }

  function getSortFilter(e) {
    let { value } = e.target;
    if (value === "1") setProduct(product.sort((x, y) => y.id - x.id));
    else if (value === "2")
      setProduct(product.sort((x, y) => y.finalprice - x.finalprice));
    else setProduct(product.sort((x, y) => x.finalprice - y.finalprice));
    flag ? setFlag(false) : setFlag(true);
  }

  function postSearch(e) {
    e.preventDefault();
    setProduct(
      ProductStateData.slice(1)
        .reverse()
        .filter(
          (x) =>
            x.name.toLowerCase().includes(search) ||
            x.maincategory.toLowerCase() === search ||
            x.subcategory.toLowerCase() === search ||
            x.brand.toLowerCase() === search ||
            x.color.toLowerCase() === search ||
            x.size.toLowerCase() === search ||
            x.maincategory.toLowerCase().includes(search)
        )
    );
  }

  function getApiData() {
    dispatch(getProduct());
    if (ProductStateData.length) {
      setProduct(ProductStateData.slice(1).reverse());
    }
    dispatch(getBrand());
    if (BrandStateData.length) {
      setBrand(BrandStateData.slice(1).reverse());
    }
    dispatch(getMaincategory());
    if (MainCategoryStateData.length) {
      setMainCategory(MainCategoryStateData.slice(1).reverse());
    }
    dispatch(getSubcategory());
    if (SubCategoryStateData.length) {
      setSubCategory(SubCategoryStateData.slice(1).reverse());
    }
  }
  console.log(MainCategoryStateData);
  useEffect(() => {
    console.log("useEffect called");
    getApiData();
    // eslint-disable-next-line
  }, [
    ProductStateData.length,
    BrandStateData.length,
    MainCategoryStateData.length,
    SubCategoryStateData.length,
  ]);
  console.log(mc);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group mt-3">
              <p
                className="list-group-item list-group-item-action active"
                aria-current="true"
              >
                Main Category
              </p>

              <button
                className="list-group-item list-group-item-action"
                onClick={() => categoryFilter("All", sc, br)}
              >
                All
              </button>
              {mainCategory.map((item, index) => {
                return (
                  <button
                    key={index}
                    className="list-group-item list-group-item-action"
                    onClick={() => categoryFilter(item.name, sc, br)}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
            <div className="list-group mt-3">
              <p
                className="list-group-item list-group-item-action active"
                aria-current="true"
              >
                Sub Category
              </p>

              <button
                className="list-group-item list-group-item-action"
                onClick={() => categoryFilter(mc, "All", br)}
              >
                All
              </button>
              {subCategory.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => categoryFilter(mc, item.name, br)}
                    className="list-group-item list-group-item-action"
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
            <div className="list-group mt-3">
              <p
                className="list-group-item list-group-item-action active"
                aria-current="true"
              >
                Brand
              </p>

              <button
                className="list-group-item list-group-item-action"
                onClick={() => categoryFilter(mc, sc, "All")}
              >
                All
              </button>
              {brand.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => categoryFilter(mc, sc, item.name)}
                    className="list-group-item list-group-item-action"
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
            <h5 className="bg-primary my-3 text-light p-2">Price Filter</h5>
            <div className="row">
              <div className="col-md-6">
                <label>Min</label>
                <input
                  type="number"
                  name="min"
                  onChange={getPriceFilter}
                  placeholder="Min Amount"
                  className="form-control"
                  value={min}
                />
              </div>
              <div className="col-md-6">
                <label>Max</label>
                <input
                  type="number"
                  name="max"
                  onChange={getPriceFilter}
                  placeholder="Max Amount"
                  className="form-control"
                  value={max}
                />
              </div>
            </div>
            <div className="my-3">
              <button
                className="btn btn-primary w-100"
                onClick={applyPriceFilter}
              >
                Apply
              </button>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-9">
                <form onSubmit={postSearch}>
                  <div className="mb-3 my-3 btn-group w-100">
                    <input
                      type="search"
                      name="search"
                      onChange={(e) => setSearch(e.target.value.toLowerCase())}
                      placeholder="Enter Product Naame,Brand,Category,Size,Color to Search"
                      className="form-control"
                    />
                    <button type="submit" className="btn btn-primary">
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-3 my-3 mb-3">
                <select
                  name="sortFilter"
                  onChange={getSortFilter}
                  className="form-control"
                >
                  <option value="1">Latest</option>
                  <option value="2">Price: H to L</option>
                  <option value="3">Price: L to H</option>
                </select>
              </div>
            </div>
            <div className="row">
              {product.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-lg-3 col-md-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="team-item">
                      <div className="position-relative overflow-hidden">
                        <img
                          className="img-fluid"
                          src={`/kifayati/products/${item.pic1}`}
                          style={{ height: "230px", width: "100%" }}
                          alt=""
                        />
                        <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                          <img
                            src={`/kifayati/products/${item.pic2}`}
                            className="position-absolute start-0 top-0 w-100 h-100 z-1"
                            style={{ height: "230px", width: "100%" }}
                            alt=""
                          />
                          <Link
                            className="btn btn-square bg-primary text-light w-100 position-absolute start-0 bottom-0 w-100 h-25 z-3"
                            to={`/product/${item.id}`}
                          >
                            <i className="fa fa-shopping-cart me-2"></i>
                            <span>Add to Cart</span>
                          </Link>
                        </div>
                      </div>
                      <div className="bg-light text-center p-4">
                        <h5 className="fw-bold mb-0" height="50px">
                          {item.name}
                        </h5>
                        <small>
                          <del className="text-danger">
                            &#8377;{item.baseprice}
                            {"  "}
                          </del>
                          &#8377;{item.finalprice}{" "}
                          <sup className="text-success">
                            {item.discount}% off
                          </sup>
                        </small>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
