import { createSlice } from "@reduxjs/toolkit";
import { teacherObj } from "../../obj";

const initialState = teacherObj;

const teacherSlice = createSlice({
  name : "teacher",
  initialState,
  reducers : {
    cancelTeacher : (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    addTeacher : (state, action) => {
      return [action.payload.obj, ...state];
    },
    editTeacher: (state, action) => {
      state.filter(item => {
        if(item.id === action.payload.elId){
          item.name = action.payload.elName
          item.number = action.payload.elNumber
          item.status = action.payload.elStatus
          item.payment = action.payload.elPayment
        }
      });
    }
  }
});

export const {cancelTeacher, addTeacher, editTeacher} = teacherSlice.actions;
export default teacherSlice.reducer;