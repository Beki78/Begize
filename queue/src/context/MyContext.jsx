import React, { createContext, useState } from "react";
import axios from "axios";

const MyProvider = createContext();

const MyContext = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [singleBranch, setSingleBranch] = useState("");
  const [id, setId] = useState("");

  const addQueueReq = () => {
    axios
      .post("http://localhost:3000/", {
        firstName: firstName,
        lastName: lastName,
        branch: singleBranch,
        phoneNo: phoneNo,
      })
      .then((res) => {
        console.log("Added");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const getQueue = () => {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        setFirst(res.data[0].firstName);
        setLast(res.data[0].lastName);
        setPhoneNo(res.data[0].phoneNo)
        setSingleBranch(res.data[0].branch)
        setId(res.data[0]._id);
        
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const deleteQueue = () => {
    axios
      .delete("http://localhost:3000/")
      .then((res) => {
        console.log("Delete success");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <MyProvider.Provider
        value={{
          firstName,
          setFirstName,
          lastName,
          setLastName,
          addQueueReq,
          getQueue,
          first,
          last,
          deleteQueue,
          setSingleBranch,
          singleBranch,
          phoneNo,
          setPhoneNo,
          id,
        }}
      >
        {children}
      </MyProvider.Provider>
    </>
  );
};

export { MyContext, MyProvider };
