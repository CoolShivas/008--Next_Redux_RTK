const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  toDoArr: [],
};

const ToDoSlice = createSlice({
  name: "toTheDoings",
  initialState,
  reducers: {
    addToDoS: (state, action) => {
      // console.log(action); // Getting data on Browser Console;
      const data = {
        id: nanoid(),
        task: action.payload,
      };
      state.toDoArr.push(data);
    },
    removeToDoS: (state, action) => {
      const data = state.toDoArr.filter((curr) => {
        return curr.id !== action.payload;
      });
      state.toDoArr = data;
    },
  },
});

export const { addToDoS, removeToDoS } = ToDoSlice.actions;
export default ToDoSlice.reducer;
