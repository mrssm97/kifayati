import {
  Avatar,
  Box,
  Button,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pin: "",
    city: "",
    state: "",
    pic: "",
    username: "",
  });
  let navigate = useNavigate();
  // const linkStyle = {
  //   fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
  //   fontWeight: "400",
  //   fontSize: "0.875rem",
  //   lineHeight: "1.43",
  //   letterSpacing: "0.01071em",
  //   // color: "#1976d2",
  //   textDecoration: "underline",
  //   // textDecorationColor: "rgba(25, 118, 210, 0.4)",
  // };
  const marTop = { marginTop: "16px" };

  function getInputData(e) {
    var { name, value } = e.target;
    setData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  }
  function getInputFile(e) {
    console.log(e.target);
    var { name, files } = e.target;
    setData((old) => {
      return {
        ...old,
        [name]: files[0].name,
      };
    });
  }

  async function postData(e) {
    e.preventDefault();
    await fetch("/user/" + localStorage.getItem("userid"), {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    });
    if (data.role === "Admin") navigate("/admin");
    else navigate("/profile");
  }

  async function getApiData() {
    let response = await fetch("/user/" + localStorage.getItem("userid"), {
      method: "get",
      headers: {
        "content-type": "apllication/json",
      },
    });

    response = await response.json();

    if (response) {
      setData((old) => {
        return {
          ...old,
          ...response,
        };
      });
    }
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <Box
        component={"form"}
        sx={{
          mt: "40px",
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          // height: "500px",
          // bgcolor: "pink",
        }}
        onSubmit={postData}
      >
        <Box
          sx={{
            // height: "550px",
            width: "800px",
            display: "flex",
            flexDirection: "column",
            // bgcolor: "white",
          }}
        >
          <Box
            width={"100%"}
            // bgcolor={"ButtonFace"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Avatar sx={{ m: 1 }} className="bg-primary">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Update Profile
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"} mt={"8px"}>
            <Box display={"flex"} justifyContent={"space-between"} sx={marTop}>
              <TextField
                id="outlined-basic"
                label="Full name"
                variant="outlined"
                sx={{ width: "49%" }}
                required
                name="name"
                value={data.name}
                onChange={getInputData}
              />
              <TextField
                id="outlined-basic"
                label="User Name"
                required
                variant="outlined"
                sx={{ width: "49%" }}
                name="username"
                value={data.username}
                onChange={getInputData}
              />
            </Box>

            <Box display={"flex"} justifyContent={"space-between"} sx={marTop}>
              {" "}
              <TextField
                id="outlined-basic"
                type="email"
                label="Email Address"
                variant="outlined"
                sx={{ width: "49%" }}
                required
                name="email"
                value={data.email}
                onChange={getInputData}
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                type="text"
                variant="outlined"
                sx={{ width: "49%" }}
                name="phone"
                value={data.phone}
                onChange={getInputData}
              />
            </Box>
            <TextField
              id="outlined-basic"
              label="Address"
              placeholder="Address..."
              type="text"
              multiline
              rows={4}
              variant="outlined"
              sx={marTop}
              name="address"
              value={data.address}
              onChange={getInputData}
            />

            <Box display={"flex"} justifyContent={"space-between"} sx={marTop}>
              <TextField
                id="outlined-basic"
                label="PIN Code"
                placeholder="Pin code..."
                type="text"
                variant="outlined"
                sx={{ width: "49.7%" }}
                name="pin"
                value={data.pin}
                onChange={getInputData}
              />
              <TextField
                id="outlined-basic"
                label="City"
                placeholder="City Name"
                type="text"
                variant="outlined"
                sx={{ width: "49.7%" }}
                name="city"
                value={data.city}
                onChange={getInputData}
              />
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} sx={marTop}>
              <TextField
                id="outlined-basic"
                label="State Name"
                placeholder="State "
                type="text"
                variant="outlined"
                sx={{ width: "49.7%" }}
                name="state"
                value={data.state}
                onChange={getInputData}
              />
              {/* <MuiFileInput
                value={data.pic}
                sx={{ width: "49.7%" }}
                name="pic"
                label="Select Profile Picture"
                onChange={getInputFile}
              /> */}
              <Input
                type="file"
                sx={{ width: "49.7%" }}
                name="pic"
                className="form-control"
                onChange={getInputFile}
              >
                hello
              </Input>
            </Box>
            <Button
              type="submit"
              className="bg-primary"
              sx={{ ...marTop }}
              variant="contained"
              fullWidth
            >
              Update Profile
            </Button>
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"flex-end"}
              sx={marTop}
            ></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
