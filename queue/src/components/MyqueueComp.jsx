import React, { useContext, useEffect } from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";
import { MyProvider } from "@/context/MyContext";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const MyqueueComp = () => {
  const {
    getQueue,
    firstName,
    lastName,
    first,
    last,
    deleteQueue,
    phoneNo,
    singleBranch,
    id,
  } = useContext(MyProvider);
  useEffect(() => {
    getQueue();
  }, []);
  return (
    <div className="mt-36">
      <div className="flex justify-around text-4xl font-semibold">
        <h1 className="bg-slate-200 px-4 py-3 rounded-md shadow-sm shadow-slate-500">
          42 People
        </h1>
        <h1 className="bg-slate-200 px-4 py-3 rounded-md shadow-sm shadow-slate-500">
          2:00 left
        </h1>
      </div>
      <div className="text-center mt-14">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="outline"
              className="bg-indigo-500 hover:bg-indigo-700 text-white hover:text-white"
            >
              Show Dialog
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                queue from the list.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-600 text-white hover:bg-red-700"
                onClick={deleteQueue}
              >
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="mx-20 my-10 p-2 rounded-md shadow-md shadow-slate-400 border-[1px] border-slate-200">
        <div className="px-4 sm:px-0">
          <h3 className="text-xl font-semibold leading-9 text-gray-900 text-center">
            Queue Information
          </h3>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Full name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {first} {last}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Queue branch office
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {singleBranch}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Number
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {phoneNo}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Id number
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {id}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="bg-slate-700 text-center text-white">
        <small className="">
          © 2024 Bereket Getachew. All rights reserved.
        </small>
      </div>
    </div>
  );
};

export default MyqueueComp;
