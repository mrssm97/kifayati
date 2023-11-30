import React, { useEffect, useRef } from "react";
import Sidebar from "../Sidebar";
import { Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  addMaincategory,
  getMaincategory,
} from "../../../store/ActionCreators/MainCategoryActionCreator";
import { useDispatch, useSelector } from "react-redux";
export default function CreateMainCategory() {
  let name = useRef("");
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let MainCategoryStateData = useSelector(
    (state) => state.MainCategoryStateData
  );
  function getInputData(e) {
    name.current = e.target.value;
  }
  async function postData(e) {
    e.preventDefault();
    let item = MainCategoryStateData.slice(1).find(
      (x) => x.name === name.current
    );
    if (item) alert("This Main Category already exist!!");
    else {
      dispatch(addMaincategory({ name: name.current }));
      navigate("/admin/maincategory");
    }
  }
  // function getApiData() {
  //   dispatch(getMaincategory());
  // }
  useEffect(() => {
    // getApiData();
    dispatch(getMaincategory());
    // eslint-disable-next-line
  }, []);
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
              Main Category
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
                display={"flex"}
                flexDirection={"column"}
                mt={"8px"}
                width={"50%"}
              >
                <TextField
                  label="Full name"
                  variant="outlined"
                  sx={{ ...marTop, mb: "20px" }}
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
          </div>
        </div>
      </div>
    </>
  );
}
