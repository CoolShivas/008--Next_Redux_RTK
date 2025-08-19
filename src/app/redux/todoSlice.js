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
  },
});

export const { addToDoS } = ToDoSlice.actions;
export default ToDoSlice.reducer;
