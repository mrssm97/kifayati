import React, { useEffect, useRef } from "react";
import Sidebar from "../Sidebar";
import { Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  addBrand,
  getBrand,
} from "../../../store/ActionCreators/BrandActionCreator";
import { useDispatch, useSelector } from "react-redux";
export default function CreateBrand() {
  let name = useRef("");
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let BrandStateData = useSelector((state) => state.BrandStateData);
  function getInputData(e) {
    name.current = e.target.value;
  }
  async function postData(e) {
    e.preventDefault();
    let item = BrandStateData.slice(1).find((x) => x.name === name.current);
    if (item) alert("This Brand Category already exist!!");
    else {
      dispatch(addBrand({ name: name.current }));
      navigate("/admin/brand");
    }
  }
  function getApiData() {
    dispatch(getBrand());
  }
  useEffect(() => {
    getApiData();
    //eslint-disable-next-line
  }, [BrandStateData.length]);
  const marTop = { marginTop: "16px" };
  return (
    <>
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <h5 className="bg-primary text-light text-center w-100 p-2">
              Brand
            </h5>
            <Box
              component={"form"}
              onSubmit={postData}
              sx={{
                mt: "40px",
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box display={"flex"} flexDirection={"column"} mt={"8px"}>
                  <TextField
                    label="Full name"
                    variant="outlined"
                    sx={marTop}
                    required
                    inputProps={{ minLength: 3, maxLength: 50 }}
                    className="fName"
                    onChange={getInputData}
                  />
                  <Box>
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
                      Create
                    </button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}
