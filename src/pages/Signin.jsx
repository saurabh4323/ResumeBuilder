import { SignIn } from "@clerk/clerk-react";
import React from "react";
import "./signin.css";
const Signin = () => {
  return (
    <div className="sign">
      <SignIn></SignIn>
    </div>
  );
};

export default Signin;
