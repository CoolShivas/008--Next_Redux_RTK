"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUsers } from "../redux/slice";

const DisplayUsers = () => {
  // const getData = useSelector((data) => data);
  // console.log(getData); // Getting on Browser Console as :- {usersData: {…}}usersData: users: [{…}][[Prototype]]: Object[[Prototype]]: Object

  // const getData = useSelector((data) => data.usersData);
  // console.log(getData); // Getting on Browser Console as :- {users: Array(1)}users: [{…}][[Prototype]]: Object

  const getData = useSelector((data) => data.usersData.users);
  console.log(getData);
  // // //  Getting on Browser Console as :-
  // // //  [{…}]
  // // //  0: {id: 'rYzXe5BOfBWD6DFRAzR0l', name: 'umar'}
  // // //  length: 1
  // // //  [[Prototype]]: Array(0)

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
