"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDoS, removeToDoS } from "../redux/todoSlice";

const ToDoPage = () => {
  const [inputField, setInputField] = useState("");

  const dispatch = useDispatch();
  // const getToDoData = useSelector((data) => data);
  // console.log(getToDoData); //// Getting data on Browser Console as:- {usersData: {…}, toDosData: {…}}

  // const getToDoData = useSelector((data) => data.toDosData);
  // console.log(getToDoData); // Getting data on Browser Console as :-  {toDoArr: Array(0)}toDoArr: [][[Prototype]]: Object

  // const getToDoData = useSelector((data) => data.toDosData.toDoArr);
  // console.log(getToDoData);// Getting data on Browser Console as :-  (2) [{…}, {…}]0: {id: 'Z4F3ydiz7hFqjrEIsv8Tb', task: 'tea'}1: {id: 'j773j1LAPE0xtBASfwB4i', task: 'coffee'}length: 2[[Prototype]]: Array(0)

  const getToDoData = useSelector((data) => data.toDosData.toDoArr);
  console.log(getToDoData); // Getting data on Browser Console as :-

  const handlerOnAddToDos = () => {
    dispatch(addToDoS(inputField));
  };
  return (
    <>
      <center>
        <h1>Add ToDos</h1>
        <input
          type="text"
          placeholder="add todos"
          required
          onChange={(e) => setInputField(e.target.value)}
        />
        <button onClick={handlerOnAddToDos}>Add ToDos</button>
      </center>
      <section>
        <center>
          <h1>Display ToDos</h1>

          <ul>
            {getToDoData.map((curr) => {
              return (
                <li key={curr.id}>
                  {curr.task}
                  <button onClick={() => dispatch(removeToDoS(curr.id))}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </center>
      </section>
    </>
  );
};

export default ToDoPage;
