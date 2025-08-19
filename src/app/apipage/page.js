"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUser } from "../redux/todoSlice";

const ApiPage = () => {
  //   const getApiData = useSelector((data) => data);
  //   console.log(getApiData); //// Getting data on Browser Console as:-
  // // //    {usersData: {…}, toDosData: {…}}
  // // //    toDosData: {toDoArr: Array(0), userAPIData: Array(0)}
  // // //    usersData: {users: Array(2)}
  // // //    [[Prototype]]: Object

  //   const getApiData = useSelector((data) => data.toDosData);
  //   console.log(getApiData); //// Getting data on Browser Console as:-
  // // //    {toDoArr: Array(0), userAPIData: Array(0)}
  // // //    toDoArr: []
  // // //    userAPIData: []
  // // //    [[Prototype]]: Object

  const getApiData = useSelector((data) => data.toDosData.userAPIData);
  console.log(getApiData); //// Getting data on Browser Console as:-

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiUser());
  }, []);

  return (
    <>
      <center>
        <h1>Welcome to Api Page</h1>
        {getApiData.length &&
          getApiData.map((currElement) => {
            return (
              <div key={currElement.id}>
                <span>{currElement.title}</span>
                <img
                  src={currElement.image}
                  alt="image not found"
                  className="w-full h-32 object-contain"
                />
              </div>
            );
          })}
      </center>
    </>
  );
};

export default ApiPage;
