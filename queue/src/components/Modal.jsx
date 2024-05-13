import React, { useRef } from 'react'
import { Button } from "@/components/ui/button";
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

const Modal = ({onClose}) => {
    const myRef = useRef()

    const closeModel = (e) =>{
        if(myRef.current === e.target){
            onClose()
        }
    }

  return (
    <div ref={myRef} onClick={closeModel} className="fixed inset-0 bg-slate-600 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">First Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Last Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={onClose} variant="outline">Cancel</Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700">Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Modal
