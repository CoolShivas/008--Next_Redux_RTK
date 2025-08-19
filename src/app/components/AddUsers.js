"use client";
import React, { useState } from "react";
import { addUsers } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";

const AddUsers = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handlerOnAddBtn = () => {
    // console.log(inputValue); // Getting data on Browser Console;
    dispatch(addUsers(inputValue)); // Import of addUsers action from Slice. As well as dispatching action to Slice;
  };
  return (
    <>
      <center>
        <h1>Add Users</h1>
        <input
          type="text"
          placeholder="add new users"
          required
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handlerOnAddBtn}>Add</button>
      </center>
      <Link href={"/removepage"}>Remove User Page</Link>
    </>
  );
};

export default AddUsers;
