import React from "react";

function ExperiencePreview({ resinfo }) {
  return (
    <div className="my-6">
      <h2 className="text-center font-bold text-blue-600 text-sm mb-2">
        Professional Experience
      </h2>
      {resinfo?.experience?.map((experience, index) => (
        <div key={index} className="my-5">
          <h2 className="text-sm font-bold">{experience?.title}</h2>
          <h2 className="text-xs flex justify-between">
            {experience?.companyName}, {experience?.city}, {experience?.state}
            <span>
              {experience?.startDate} To{" "}
              {experience?.currentlyWorking ? "Present" : experience?.endDate}
            </span>
          </h2>
          <div
            className="text-xs my-2"
            dangerouslySetInnerHTML={{ __html: experience?.workSummery }}
          />
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
