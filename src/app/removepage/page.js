"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUsers } from "../redux/slice";

const RemoveUserPage = () => {
  const displayAddData = useSelector((data) => data.users);
  console.log(displayAddData); // Getting the data on Browser Console as :- {users: Array(1)}

  const dispatch = useDispatch();

  return (
    <>
      <center>
        <h1>Welcome to the Remove User Page.</h1>

        <section>
          {displayAddData.map((cur) => {
            return (
              <li key={cur.id}>
                {cur.name}
                <button onClick={() => dispatch(removeUsers(cur.id))}>
                  Remove
                </button>
              </li>
            );
          })}
        </section>
      </center>
    </>
  );
};

export default RemoveUserPage;
