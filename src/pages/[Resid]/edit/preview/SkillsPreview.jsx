import React from "react";

function SkillsPreview({ resinfo }) {
  return (
    <div className="my-6">
      <h2 className="text-center font-bold text-blue-600 text-sm mb-2">
        Skills
      </h2>
      <div className="grid grid-cols-2 gap-3 my-4">
        {resinfo?.skills.map((skill, index) => {
          console.log(skill.level); // Check the value in the console
          return (
            <div key={index} className="flex items-center justify-between">
              <h2 className="text-xs">{skill.name}</h2>
              <div className="h-2 bg-gray-200 w-[120px]">
                <div
                  className="h-2"
                  style={{
                    width: `${skill.rating}%`,
                    backgroundColor: "red",
                  }}
                ></div>
              </div>
              <p>{skill.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsPreview;
