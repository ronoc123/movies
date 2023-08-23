import React from "react";
import Wrapper from "../assests/Wrappers/LoginPage";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Wrapper>
      <Link to={"/"} className="home-btn">
        Back home
      </Link>
      <LoginForm />
    </Wrapper>
  );
};

export default LoginPage;
