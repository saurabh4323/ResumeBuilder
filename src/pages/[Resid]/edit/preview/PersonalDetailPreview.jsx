import React from "react";

function PersonalDetailPreview({ resinfo }) {
  return (
    <div>
      <h2 className="font-bold text-3xl mb-3 text-red-600 text-center">
        {resinfo?.firstName} {resinfo?.lastName}
      </h2>
      <h2 className="text-center text-sm font-medium">{resinfo?.jobTitle}</h2>
      <h2 className="text-center font-normal text-xs">{resinfo?.address}</h2>

      <div className="flex justify-between">
        <h2 className="font-normal text-xs">{resinfo?.phone}</h2>
        <h2 className="font-normal text-xs">{resinfo?.email}</h2>
      </div>
      <hr className="border-[1.5px] my-2" />
    </div>
  );
}

export default PersonalDetailPreview;
