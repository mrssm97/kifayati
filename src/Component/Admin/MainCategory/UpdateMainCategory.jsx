import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Box, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import {
  getMaincategory,
  updateMaincategory,
} from "../../../store/ActionCreators/MainCategoryActionCreator";
import { useDispatch, useSelector } from "react-redux";
let count = 1;
export default function UpdateMainCategory() {
  let [name, setName] = useState("");
  // var name = useRef("");
  let navigate = useNavigate();
  // let dispatch = async () => useDispatch();
  let dispatch = useDispatch();
  let { id } = useParams();
  let MainCategoryStateData = useSelector(
    (state) => state.MainCategoryStateData
  );
  async function postData(e) {
    e.preventDefault();
    let item = MainCategoryStateData.slice(1).find((x) => x.name === name);
    if (item) alert("This Main Category already exist!!");
    else {
      dispatch(updateMaincategory({ id: id, name: name }));
      navigate("/admin/maincategory");
    }
  }
  function getApiData() {
    dispatch(getMaincategory());
    let item = MainCategoryStateData.slice(1).find((x) => x.id === Number(id));
    if (item) setName(item.name);
  }

  useEffect(() => {
    getApiData();
    //eslint-disable-next-line
  }, [MainCategoryStateData.length]);
  const marTop = { marginTop: "16px" };
  return (
    <>
      {count++}
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
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
                    // value={name}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
