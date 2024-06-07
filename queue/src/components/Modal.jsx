import React, { useRef, useContext } from "react";
import { Button } from "@/components/ui/button";
import { MyProvider } from "../context/MyContext";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Modal = ({ onClose }) => {
  const { firstName, setFirstName, lastName, setLastName,phoneNo, setPhoneNo, addQueueReq } =
    useContext(MyProvider);

  const myRef = useRef();

  const closeModel = (e) => {
    if (myRef.current === e.target) {
      onClose();
    }
  };
  const onclickHandler = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(phoneNo);
    setFirstName("");
    setLastName("");
    setPhoneNo("")
    onClose();
    addQueueReq();
  };

  return (
    <div
      ref={myRef}
      onClick={closeModel}
      className="fixed inset-0 bg-slate-600 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onclickHandler}>
            <div className="grid w-full items-center gap-4 ">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">First Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Last Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Phone Number</Label>
                <Input
                  id="name"
                  type="number"
                  placeholder="Enter your phone number"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={onClose} variant="outline">
            Cancel
          </Button>
          <Button
            onClick={onclickHandler}
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            Add
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Modal;
