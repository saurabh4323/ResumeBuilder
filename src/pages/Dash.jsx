import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import Route from "../../routes/Route";
import Addres from "./Addres";
import Rescon from "./Rescon";
import "./dash.css";

const Dash = () => {
  const { user } = useUser();
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    if (user) {
      Resumelist(user.primaryEmailAddress.emailAddress);
    }
  }, [user]);

  const Resumelist = (userEmail) => {
    if (userEmail) {
      Route.getUserResume()
        .then((response) => {
          const res = response.data.data; // Access the actual data array
          console.log("Fetched resumes:", res); // Log fetched resumes

          // Check if res is an array
          if (Array.isArray(res)) {
            // Filter resumes based on the email property in attributes
            const filteredResumes = res.filter(
              (resume) => resume.attributes.email === userEmail
            );
            console.log("Filtered resumes:", filteredResumes); // Log filtered resumes
            setResumes(filteredResumes);
          } else {
            console.error("Expected an array of resumes, got:", res);
          }
        })
        .catch((error) => {
          console.error("Error fetching resumes:", error);
        });
    }
  };

  return (
    <div className="dash">
      <div className="center">
        <h1>My Collection</h1>
      </div>
      <div className="addres-container">
        <Addres />
      </div>
      <div className="resumes-list">
        {resumes.map((resume) => (
          <div key={resume.id} className="rescon-box">
            <Rescon resume={resume} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dash;
