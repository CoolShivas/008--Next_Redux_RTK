"use client";
import React, { useState } from "react";

const AddUsers = () => {
  const [inputValue, setInputValue] = useState("");
  const handlerOnAddBtn = () => {
    console.log(inputValue); // Getting data on Browser Console;
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
    </>
  );
};

export default AddUsers;
