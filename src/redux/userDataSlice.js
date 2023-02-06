import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    key: "1",
    firstName: "Riley",
    lastName: "Richardson",
    email: "riley.richardson@example.com",
    age: 32,
    phone: "5462573021",
  },
  {
    key: "2",
    firstName: "Madison",
    lastName: "Miles",
    email: "madison.miles@example.com",
    age: 26,
    phone: "9364430802",
  },
  {
    key: "3",
    firstName: "Joy",
    lastName: "Clark",
    email: "joy.clark@example.com",
    age: 24,
    phone: "8869999291",
  },
];

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      console.log("action", action.payload);
    },
    deleteUser: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addUser, editUser, deleteUser } = userDataSlice.actions;

export default userDataSlice.reducer;