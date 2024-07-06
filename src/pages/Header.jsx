import React from "react";
import "./Header.css";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="header">
      <div className="left">
        <div className="logo">
          <img src="/logo.svg" alt="logo" />{" "}
          {/* Correct path to public directory */}
        </div>
      </div>

      <div className="right">
        {isSignedIn ? (
          <div className="user">
            <Link to={"/dash"}>
              <Button>Build now</Button>
            </Link>
            <UserButton user={user} />
          </div>
        ) : (
          <div className="login">
            <Link to={"/sign"}>
              <Button>Login</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
