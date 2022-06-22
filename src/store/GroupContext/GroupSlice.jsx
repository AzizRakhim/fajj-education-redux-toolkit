import { createSlice } from "@reduxjs/toolkit";
import { groupObj } from "../../obj";
import TeacherSlice from "../TeacherContext/TeacherSlice";

const initialState = groupObj;

const groupSlice = createSlice({
  name : "group",
  initialState,
  reducers : {
    cancelGroup : (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    addGroup : (state, action) => {
      return [action.payload.obj, ...state];
    },
    editGroup : (state, action) => {
      state.filter(item => {
        if(item.id === action.payload.id){
          item.subject = action.payload.subject
          item.educationType = action.payload.education
          item.status = action.payload.status
          item.payment = action.payload.payment
          item.teacher = action.payload.teacher
        }
      })
    }
  }
});

export const {cancelGroup, addGroup, editGroup} = groupSlice.actions;
export default groupSlice.reducer;

