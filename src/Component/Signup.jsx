import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [data, setData] = React.useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  var navigate = useNavigate();
  const linkStyle = {
    fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
    fontWeight: "400",
    fontSize: "0.875rem",
    lineHeight: "1.43",
    letterSpacing: "0.01071em",
    // color: "#1976d2",
    textDecoration: "underline",
    // textDecorationColor: "rgba(25, 118, 210, 0.4)",
  };
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

  async function postData(e) {
    e.preventDefault();
    if (data.password === data.cpassword) {
      let response = await fetch("https://kifayatidb.onrender.com/user", {
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      });
      response = await response.json();
      let item = response.slice(1).find((x) => x.username === data.username);
      if (item) {
        setShow(true);
        setMessage("Username Already Taken!!!");
      } else {
        item = {
          name: data.name,
          username: data.username,
          email: data.email,
          phone: data.phone,
          password: data.password,
          role: "Buyer",
        };
        response = await fetch("https://kifayatidb.onrender.com/user", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(item),
        });
        response = await response.json();
        navigate("/login");
      }
    } else {
      setShow(true);
      setMessage("Password and Confirm Password Didn't Match!!!");
    }
  }

  // function setProfile() {
  //   props.setProfile({
  //     login: localStorage.getItem("login"),
  //     fName: localStorage.getItem("fName"),
  //     lName: localStorage.getItem("lName"),
  //     email: localStorage.getItem("email"),
  //     password: localStorage.getItem("password"),
  //     subscribe: localStorage.getItem("subscribe"),
  //   });
  // }
  // function setLocalStorage() {
  //   localStorage.setItem("login", "true");
  //   localStorage.setItem(
  //     "password",
  //     `${document.querySelector(".password div input").value}`
  //   );
  //   localStorage.setItem(
  //     "email",
  //     `${document.querySelector(".email div input").value}`
  //   );
  //   localStorage.setItem(
  //     "fName",
  //     `${document.querySelector(".fName div input").value}`
  //   );

  //   localStorage.setItem(
  //     "lName",
  //     `${document.querySelector(".lName div input").value}`
  //   );
  //   localStorage.setItem("subscribe", "true");
  // }

  return (
    <>
      {show ? <p className="text-danger text-center p-2">{message}</p> : ""}
      <Box
        component={"form"}
        sx={{
          mt: "3%",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          // height: "500px",
          // bgcolor: "pink",
        }}
        autoComplete="on"
        onSubmit={postData}
      >
        <Box
          sx={{
            // height: "550px",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            // bgcolor: "white",
          }}
          className="responsive"
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
              Sign up
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
                onChange={getInputData}
              />
              <TextField
                id="outlined-basic"
                label="User Name"
                required
                variant="outlined"
                sx={{ width: "49%" }}
                name="username"
                onChange={getInputData}
              />
            </Box>
            <TextField
              id="outlined-basic"
              type="email"
              label="Email Address"
              variant="outlined"
              sx={marTop}
              required
              name="email"
              onChange={getInputData}
            />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              type="text"
              variant="outlined"
              sx={marTop}
              required
              name="phone"
              onChange={getInputData}
            />
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <TextField
                id="outlined-basic"
                label="Password"
                type="password"
                variant="outlined"
                sx={{ ...marTop, width: "48%" }}
                required
                name="password"
                onChange={getInputData}
              />
              <TextField
                id="outlined-basic"
                label="Verify Password"
                type="password"
                variant="outlined"
                sx={{ ...marTop, width: "48%" }}
                required
                name="cpassword"
                onChange={getInputData}
              />
            </Box>
            <FormControlLabel
              sx={marTop}
              control={<Checkbox />}
              label="I want to receive inspiration, marketing promotions and updates via email."
              className="subscribe"
            />
            <Button
              type="submit"
              className="bg-primary"
              sx={{ ...marTop }}
              variant="contained"
              fullWidth
            >
              Sign Up
            </Button>
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"flex-end"}
              sx={marTop}
            >
              <Link to={"/login"} style={linkStyle} className="">
                Already have an account? Log In
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
