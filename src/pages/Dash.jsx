import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import Route from "../../routes/Route";
import Addres from "./Addres";
import "./dash.css";

const Dash = () => {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      Resumelist(user.primaryEmailAddress.emailAddress); // Pass user email to Resumelist function
    }
  }, [user]);

  const Resumelist = (userEmail) => {
    Route.getUserResume(userEmail)
      .then((res) => {
        console.log("Resume data:", res); // Log the response data for verification
      })
      .catch((error) => {
        console.error("Error fetching resume:", error); // Log any errors for debugging
      });
  };

  return (
    <div className="dash">
      <div className="center">
        <h1>My Resume</h1>
      </div>
      <div className="content">
        <Addres />
      </div>
    </div>
  );
};

export default Dash;
