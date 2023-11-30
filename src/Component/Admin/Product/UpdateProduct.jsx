import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { useNavigate, useParams } from "react-router-dom";

import {
  getProduct,
  updateProduct,
} from "../../../store/ActionCreators/ProductActionCreator";
import { useDispatch, useSelector } from "react-redux";
import { getMaincategory } from "../../../store/ActionCreators/MainCategoryActionCreator";
import { getBrand } from "../../../store/ActionCreators/BrandActionCreator";
import { getSubcategory } from "../../../store/ActionCreators/SubCategoryActionCreator";

export default function CreateProduct() {
  const [data, setData] = useState({});
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { id } = useParams();
  const [maincategory, setMainCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [brand, setBrand] = useState([]);

  let MainCategoryStateData = useSelector(
    (state) => state.MainCategoryStateData
  );
  let SubCategoryStateData = useSelector((state) => state.SubCategoryStateData);
  let BrandStateData = useSelector((state) => state.BrandStateData);
  let ProductStateData = useSelector((state) => state.ProductStateData);
  function getInputData(e) {
    let { value, name } = e.target;
    setData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }
  function getInputFile(e) {
    let { name, files } = e.target;
    setData((old) => {
      return {
        ...old,
        [name]: files[0].name,
      };
    });
  }
  async function postData(e) {
    e.preventDefault();
    let fp = Math.round(
      data.baseprice - (data.baseprice * data.discount) / 100
    );
    var item = {
      id: id,
      name: data.name,
      maincategory: data.maincategory || maincategory[0].name,
      subcategory: data.subcategory || subcategory[0].name,
      brand: data.brand || brand[0].name,
      color: data.color,
      size: data.size,
      baseprice: parseInt(data.baseprice),
      finalprice: fp,
      discount: parseInt(data.discount),
      stock: data.stock,
      description: data.description,
      pic1: data.pic1,
      pic2: data.pic2,
      pic3: data.pic3,
      pic4: data.pic4,
    };
    dispatch(updateProduct(item));
    navigate("/admin/product");
  }
  function getApiData() {
    dispatch(getMaincategory());
    dispatch(getBrand());
    dispatch(getSubcategory());

    if (MainCategoryStateData.length) {
      setMainCategory(MainCategoryStateData.slice(1).reverse());
    }
    if (SubCategoryStateData.length) {
      setSubCategory(SubCategoryStateData.slice(1).reverse());
    }
    if (BrandStateData.length) {
      setBrand(BrandStateData.slice(1).reverse());
    }
    dispatch(getProduct());
    if (ProductStateData.length) {
      let item = ProductStateData.slice(1).find((x) => x.id === Number(id));
      if (item) setData({ ...item });
    }
  }
  useEffect(() => {
    getApiData();
    //eslint-disable-next-line
  }, [
    ProductStateData.length,
    MainCategoryStateData.length,
    SubCategoryStateData.length,
    BrandStateData.length,
  ]);
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className="bg-primary text-light text-center w-100 p-2">
              Product
            </h5>
            <form onSubmit={postData}>
              <label htmlFor="name">Name</label>
              <input
                placeholder="Name"
                id="name"
                name="name"
                value={data.name}
                className="fName w-100 mb-3 py-2"
                onChange={getInputData}
              />
              <div className="row">
                <div className="col-md-3">
                  <label>Main Category</label>
                  <select
                    name="maincategory"
                    onChange={getInputData}
                    value={data.maincategory}
                    className="form-control mb-2"
                  >
                    {maincategory.map((item, index) => {
                      return (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-md-3">
                  <label>Sub Category</label>
                  <select
                    name="subcategory"
                    onChange={getInputData}
                    value={data.subcategory}
                    className="form-control mb-2"
                  >
                    {subcategory.map((item, index) => {
                      return (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-md-3">
                  <label>Brand</label>
                  <select
                    name="brand"
                    value={data.brand}
                    onChange={getInputData}
                    className="form-control mb-2"
                  >
                    {brand.map((item, index) => {
                      return (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-md-3">
                  <label>Stock</label>
                  <select
                    name="stock"
                    value={data.stock}
                    onChange={getInputData}
                    className="form-control mb-2"
                  >
                    <option value="In stock">In stock</option>
                    <option value="Out of stock">Out of stock</option>
                  </select>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Color</label>
                    <input
                      type="text"
                      placeholder="color"
                      name="color"
                      value={data.color}
                      required
                      onChange={getInputData}
                      className="form-control mb-3"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Size</label>
                    <input
                      type="text"
                      placeholder="size"
                      name="size"
                      value={data.size}
                      required
                      onChange={getInputData}
                      className="form-control mb-3"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Base Price</label>
                    <input
                      type="number"
                      placeholder="basepricce"
                      name="baseprice"
                      value={data.baseprice}
                      required
                      onChange={getInputData}
                      className="form-control mb-3"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Discount</label>
                    <input
                      type="number"
                      placeholder="discount"
                      name="discount"
                      value={data.discount}
                      required
                      min={0}
                      onChange={getInputData}
                      className="form-control mb-3"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label>Description</label>
                  <textarea
                    name="description"
                    className="form-control"
                    rows={4}
                    placeholder="Description..."
                    value={data.description}
                    onChange={getInputData}
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label>Pic1</label>
                    <input
                      type="file"
                      name="pic1"
                      onChange={getInputFile}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label>Pic2</label>
                    <input
                      type="file"
                      name="pic2"
                      onChange={getInputFile}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label>Pic3</label>
                    <input
                      type="file"
                      name="pic3"
                      onChange={getInputFile}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label>Pic4</label>
                    <input
                      type="file"
                      name="pic4"
                      onChange={getInputFile}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-success rounded-1 p-2 w-50"
                  onClick={() => window.history.back()}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn btn-primary rounded-1 p-2 w-50"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
