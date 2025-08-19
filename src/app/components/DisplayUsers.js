"use client";

import React from "react";
import { useSelector } from "react-redux";

const DisplayUsers = () => {
  const getData = useSelector((data) => data.users);
  console.log(getData);
  return (
    <>
      <center>
        <h1>Display Users</h1>
        <ul>
          {/* <li>Shiva</li> */}
          {getData.map((currElem) => {
            return <li>{currElem.name}</li>;
          })}
        </ul>
      </center>
    </>
  );
};

export default DisplayUsers;
