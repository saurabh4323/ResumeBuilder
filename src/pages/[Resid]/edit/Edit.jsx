import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Route from "../../../../routes/Route";

import { useUser } from "@clerk/clerk-react";

const Edit = () => {
  const params = useParams();
  useEffect(() => {
    console.log(params.Resid);
  });

  return (
    <div>
      <h1>vvvvvyu</h1>
    </div>
  );
};

export default Edit;
