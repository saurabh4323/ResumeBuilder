import React from "react";
import { SignIn } from "@clerk/clerk-react";
import "./dash.css";
import Addres from "./Addres";
const Dash = () => {
  return (
    <div className="dash">
      <div className="center">
        <h1>My Resume</h1>
      </div>
      <div className="content">
        <Addres></Addres>
      </div>
    </div>
  );
};

export default Dash;
