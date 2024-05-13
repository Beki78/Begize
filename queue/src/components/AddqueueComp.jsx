import React, { useState } from "react";
import branchpic from "../assets/branchpic.jpg";
import Footer from "./Footer";
import Modal from "../components/Modal";
import Toast from "../components/Toast";

const data = [
  {
    image: "branchpic",
    branch: "Gurd-Sholla",
    map: "View",
    queueNo: "23",
  },
  {
    image: "branchpic",
    branch: "Gerji-Roba",
    map: "View",
    queueNo: "32",
  },
  {
    image: "branchpic",
    branch: "Semmit",
    map: "View",
    queueNo: "51",
  },
  {
    image: "branchpic",
    branch: "22-Mazoria",
    map: "View",
    queueNo: "12",
  },
  {
    image: "branchpic",
    branch: "Kasanchis",
    map: "View",
    queueNo: "51",
  },
];

const AddqueueComp = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
        
      <h1 className="mt-36 text-center text-3xl">Select a branch</h1>

      <div className=" my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mx-5">
        {data.map((data, index) => (
          <div className="rounded-mdborder-[1px] bg-[#f4f4f4] border-black shadow-md shadow-slate-600 w-full mx-auto p-2 hover:scale-[1.02] duration-300 ease-in-out hover:shadow-2xl hover:bg-[#dcdcdc]">
            <img src={branchpic} alt="" className="w-full object-cover" />
            <h1 className="text-xl font-semibold">{data.branch}</h1>

            <div className="flex justify-between my-3">
              <h1>
                map: <span className="font-semibold">{data.map}</span>
              </h1>
              <h1>
                Queue no:
                <span className="font-semibold">{data.queueNo} people</span>
              </h1>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="rounded-md my-3 bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 duration-300 ease-in-out w-full"
            >
              Add-Queue
            </button>
          </div>
        ))}
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} />}

      <Footer />
      
    </>
  );
};

export default AddqueueComp;
