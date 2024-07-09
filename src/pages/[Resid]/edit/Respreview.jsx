import React, { useContext } from "react";
import { ResumeInfoContext } from "./ResumeInfoContext";
import PersonalDetailPreview from "./preview/PersonalDetailPreview";
import SummeryPreview from "./preview/SummeryPreview";
import ExperiencePreview from "./preview/ExperiencePreview";
import EducationalPreview from "./preview/EducationalPreview";
import SkillsPreview from "./preview/SkillsPreview";

function ResPreview() {
  const { resinfo } = useContext(ResumeInfoContext);

  return (
    <div className="shadow-lg  p-14 border border-red-500 my-10 ml-5">
      <PersonalDetailPreview resinfo={resinfo} />
      <SummeryPreview resinfo={resinfo} />
      {resinfo?.experience?.length > 0 && (
        <ExperiencePreview resinfo={resinfo} />
      )}
      {resinfo?.education?.length > 0 && (
        <EducationalPreview resinfo={resinfo} />
      )}
      {resinfo?.skills?.length > 0 && <SkillsPreview resinfo={resinfo} />}
    </div>
  );
}

export default ResPreview;
