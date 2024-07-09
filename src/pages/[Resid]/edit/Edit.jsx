import React, { useState } from "react";
import { ResumeInfoContext } from "./ResumeInfoContext";
import Resform from "./Resform";
import ResPreview from "./Respreview";
import Dummy from "./Dummy";
import "./Edit.css";

const Edit = () => {
  const [resinfo, setResInfo] = useState(Dummy);

  return (
    <ResumeInfoContext.Provider value={{ resinfo, setResInfo }}>
      <div className="edit">
        <div className="forms">
          <Resform />
        </div>
        <div className="prev">
          <ResPreview />
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default Edit;
