const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
  users: JSON.parse(localStorage.getItem("mahakal"))
    ? JSON.parse(localStorage.getItem("mahakal"))
    : [], // Handling the error if there where no data then show nothing instead of error;
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
      // console.log(state.users); // Getting the data on Browser Console as:- Proxy(Array) {0: {…}}
      // console.log(current(state.users)); // Getting the data;
      let localStorageSaveData = JSON.stringify(current(state.users));
      localStorage.setItem("mahakal", localStorageSaveData);
    },
    removeUsers: (state, action) => {
      // console.log(action); // Getting the data on Browser Console as:-{type: 'addUserSlice/removeUsers', payload: 'FOjp5Pwr4c03uL5RYPDGD'}
      const data = state.users.filter((curr) => {
        return curr.id !== action.payload;
      });
      state.users = data;
      localStorage.removeItem("mahakal", JSON.stringify(state.users)); // Removed all the localStorage data instead of particular one only;
    },
  },
});

export const { addUsers, removeUsers } = Slices.actions;
export default Slices.reducer;
