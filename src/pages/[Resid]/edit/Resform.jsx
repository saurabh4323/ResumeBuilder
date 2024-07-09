import React, { useState } from "react";
import Pdetail from "./Forms/Pdetail";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

const Resform = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(true);
  const { resumeId } = useParams();
  return (
    <div>
      <div className="flex gap-2">
        {activeFormIndex > 1 && (
          <Button
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex - 1)}
          >
            {" "}
            <ArrowLeft />{" "}
          </Button>
        )}
        {/* <Button
          disabled={!enableNext}
          className="flex gap-2"
          size="sm"
          onClick={() => setActiveFormIndex(activeFormIndex + 1)}
        >
          {" "}
          Next
          <ArrowRight />{" "}
        </Button> */}
      </div>
      {activeFormIndex == 1 ? (
        <Pdetail enabledNext={(v) => setEnableNext(v)} />
      ) : null}
    </div>
  );
};

export default Resform;
