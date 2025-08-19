const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
};

const Slices = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      console.log(action); // Getting the data on Browser Console as:-{type: 'addUserSlice/addUsers', payload: 'shiva'}
      const data = {
        id: nanoid(),
        // name: action.userName,
        name: action.payload, // Getting the payload only;
      };
      state.users.push(data);
    },
  },
});

export const { addUsers } = Slices.actions;
export default Slices.reducer;
