/* eslint-disable import/no-unresolved */
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    lastName: "",
    firstName: "",
    isLogged: false,
    modifyInfos: false,
  },
  reducers: {
    // Profil
    setFirstName: (state, action) => {
      // {type: "profil/firstname", payload: "billy"}
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      // {type: "profil/lastname", payload: "paul"}
      state.lastName = action.payload;
    },
    setSubmitInfos: (state, action) => {
      state.modifyInfos = action.payload;
    },
    setLogged: (state, action) => {
      state.isLogged = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setSubmitInfos, setLogged } =
  authSlice.actions;
export default authSlice;
