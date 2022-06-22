import { createSlice } from "@reduxjs/toolkit";
import { studentObj } from "../../obj";

const initialState = studentObj;

const studentSlice = createSlice({
  name : "student",
  initialState,
  reducers : {
    cancelStudent : (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    addStudent : (state, action) => {
      return [action.payload.obj, ...state];
    },
    editStudent : (state, action) => {
      state.filter(item => {
        if(item.id === action.payload.elId){
          item.name = action.payload.elName
          item.number = action.payload.elNumber
        }
      })
    }
  }
});

export const {cancelStudent, addStudent, editStudent} = studentSlice.actions;
export default studentSlice.reducer;