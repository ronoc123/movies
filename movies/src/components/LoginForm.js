import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { useAppContext } from "../Context/appContext";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "./Loading";

export default function LoginForm() {
  const navigate = useNavigate();
  const { userLogin, user: currentUser } = useAppContext();
  const [user, setUser] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let endPoint = user === true ? "register" : "authenticate";
    if (!user) {
      userLogin(endPoint, { email: email, password: password });
    } else {
      userLogin(endPoint, {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      });
    }
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (currentUser) {
      setTimeout(() => {
        navigate("/");
      }, 200);
    }
  }, [currentUser, navigate]);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "35ch" },
      }}
      noValidate
      autoComplete="off"
      className="form"
      onSubmit={handleSubmit}
    >
      <div className="center">{user === true ? "Registration" : " Login"}</div>
      {user && (
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="First Name"
            multiline
            maxRows={4}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      )}
      {user && (
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Last Name"
            multiline
            maxRows={4}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      )}
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login-button">
        {user === true ? "Register" : "Login"}
      </button>
      <div className="text" onClick={() => setUser(!user)}>
        Already a member?{" "}
        <span className="login-btn">
          {user === true ? "Login" : "Register"}
        </span>
      </div>
    </Box>
  );
}
