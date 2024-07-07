import React from "react";
import { SignIn, UserButton, useUser } from "@clerk/clerk-react";
import Header from "./Header";
import { Button } from "@/components/ui/button";
import "./home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Home = () => {
  const { user, isSignedIn } = useUser();

  const send = () => {};

  return (
    <div>
      <div className="he">
        <Header></Header>
      </div>
      <div className="content">
        <div className="rig">
          <h1>
            Create stunning resumes effortlessly with our modern resume builder
          </h1>
          <p>
            your one-stop solution for creating professional and eye-catching
            resumes with ease. Whether you're a seasoned professional or just
            starting your career journey, our intuitive platform offers a
            seamless experience to design resumes that stand out.
          </p>
          {isSignedIn ? (
            <Link to={"/dash"}>
              <Button>Create Resume</Button>
            </Link>
          ) : (
            <Link to={"/sign"}>
              <Button>START NOW</Button>
            </Link>
          )}
        </div>
        <div className="lef">
          <img className="img" src="full.png"></img>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
