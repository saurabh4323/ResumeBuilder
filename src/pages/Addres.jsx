import React, { useState } from "react";
import "./addres.css";
import { SquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Route from "../../routes/Route";
import { useUser } from "@clerk/clerk-react";

const Addres = () => {
  const [restit, setRestit] = useState(null);
  const { user } = useUser();

  const click = async () => {
    const id = uuidv4();
    const data = {
      data: {
        title: restit,
        username: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        resumeid: id,
      },
    };

    console.log("Payload data:", data);

    try {
      const response = await Route.Createresume(data);
      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="res">
      <div className="box">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <div className="con">
                <SquarePlus
                  className="plus"
                  size={20}
                  color="#000"
                  strokeWidth={0.75}
                />
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Give name</DialogTitle>
              <DialogDescription>
                This will be the name of your new resume
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue=""
                  className="col-span-3"
                  onChange={(e) => setRestit(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button disabled={!restit} onClick={click} type="submit">
                Create
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Addres;
