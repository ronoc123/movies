import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function LoginForm() {
  const [user, setUser] = useState(false);
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "35ch" },
      }}
      noValidate
      autoComplete="off"
      className="form"
    >
      <div className="center">{user === true ? "Login" : " Registration"}</div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="First Name"
          multiline
          maxRows={4}
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Last Name"
          multiline
          maxRows={4}
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Password"
          multiline
          maxRows={4}
        />
      </div>

      <button className="login-button">
        {user === true ? "Login" : "Register"}
      </button>

      <div>
        Already a member? <span className="login-btn">Login</span>
      </div>
    </Box>
  );
}
