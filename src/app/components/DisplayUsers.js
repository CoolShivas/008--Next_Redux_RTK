"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUsers } from "../redux/slice";

const DisplayUsers = () => {
  const getData = useSelector((data) => data.users);
  // console.log(getData);
  const dispatch = useDispatch();

  return (
    <>
      <center>
        <h1>Display Users</h1>

        <ul>
          {/* <li>Shiva</li> */}
          {getData.map((currElem) => {
            return (
              <li key={currElem.id}>
                {currElem.name}
                <button onClick={() => dispatch(removeUsers(currElem.id))}>
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </center>
    </>
  );
};

export default DisplayUsers;
