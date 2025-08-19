const { createSlice, nanoid, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  toDoArr: [],
  userAPIData: [],
};

export const fetchApiUser = createAsyncThunk("fetchApiUser", async () => {
  const response = await fetch(
    "https://backend-kwvs.onrender.com/api/uniforms/"
  );
  return response.json();
});

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
  extraReducers: (builder) => {
    builder.addCase(fetchApiUser.fulfilled, (state, action) => {
      (state.isloading = false), (state.userAPIData = action.payload);
    });
  },
});

export const { addToDoS, removeToDoS } = ToDoSlice.actions;
export default ToDoSlice.reducer;
