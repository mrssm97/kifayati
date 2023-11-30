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
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [show, setShow] = useState(false);
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
    let response = await fetch("https://kifayatidb.onrender.com/user", {
      method: "get",
      headers: {
        "content-type": "application/json",
      },
    });
    response = await response.json();
    let item = response
      .slice(1)
      .find(
        (x) => x.username === data.username && x.password === data.password
      );
    if (item) {
      localStorage.setItem("login", true);
      localStorage.setItem("userid", item.id);
      localStorage.setItem("name", item.name);
      localStorage.setItem("username", item.username);
      localStorage.setItem("role", item.role);
      if (item.role === "Buyer") navigate("/profile");
      else navigate("/admin");
    } else setShow(true);
  }
  useEffect(() => {}, [history.location.pathname]);
  return (
    <>
      <Box
        component="form"
        onSubmit={(e) => postData(e)}
        sx={{
          mt: "3%",
          // padding: "0 5px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          // height: "500px",
          // bgcolor: "pink",
        }}
      >
        <Box
          sx={{
            // height: "550px",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            // bgcolor: "white",
          }}
          className={"responsive"}
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
              Sign in
            </Typography>
          </Box>
          <Box>
            {show ? (
              <div
                style={{
                  textAlign: "center",
                  color: "red",
                  marginTop: "20px",
                }}
              >
                <i>* Enter correct username and password !!!</i>
              </div>
            ) : null}
          </Box>
          <Box display={"flex"} flexDirection={"column"} mt={"8px"}>
            <TextField
              label="User Name"
              type="text"
              variant="outlined"
              name="username"
              sx={marTop}
              required
              onChange={getInputData}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              sx={marTop}
              required
              onChange={getInputData}
            />
            <FormControlLabel
              sx={marTop}
              control={<Checkbox />}
              label="Remember me"
              className="remember"
            />
            <Button
              type="submit"
              sx={marTop}
              className="bg-primary"
              variant="contained"
              fullWidth
            >
              Sign In
            </Button>
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
              sx={marTop}
            >
              <Link to={"/res-pass"} style={linkStyle}>
                Forgot Password?
              </Link>
              <Link to={"/signup"} style={linkStyle}>
                Don&#39;t have an account? Sign Up
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
