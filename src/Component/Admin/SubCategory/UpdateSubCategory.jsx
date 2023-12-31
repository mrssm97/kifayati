import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Box, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import {
  getSubcategory,
  updateSubcategory,
} from "../../../store/ActionCreators/SubCategoryActionCreator";
import { useDispatch, useSelector } from "react-redux";
export default function UpdateSubCategory() {
  const [name, setName] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { id } = useParams();
  let SubCategoryStateData = useSelector((state) => state.SubCategoryStateData);
  function getInputData(e) {
    setName(e.target.value);
  }
  async function postData(e) {
    e.preventDefault();
    let item = SubCategoryStateData.slice(1).find((x) => x.name === name);
    if (item) alert("This Sub Category already exist!!");
    else {
      dispatch(updateSubcategory({ id: id, name: name }));
      navigate("/admin/subcategory");
    }
  }
  function getApiData() {
    dispatch(getSubcategory());
    let item = SubCategoryStateData.slice(1).find((x) => x.id === Number(id));
    if (item) setName(item.name);
  }
  useEffect(() => {
    getApiData();
    // eslint-disable-next-line
  }, [SubCategoryStateData.length]);
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
              Sub Category
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
                    label="Name"
                    variant="outlined"
                    sx={marTop}
                    required
                    inputProps={{ minLength: 3, maxLength: 50 }}
                    className="fName"
                    value={name}
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
                      Update
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
