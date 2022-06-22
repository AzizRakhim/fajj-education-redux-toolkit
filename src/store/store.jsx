import { configureStore } from "@reduxjs/toolkit";
import GroupSlice from "./GroupContext/GroupSlice";
import StudentSlice from "./StudentContext/StudentSlice";
import TeacherSlice from "./TeacherContext/TeacherSlice";

export default configureStore({
  reducer : {
    students : StudentSlice,
    teachers : TeacherSlice,
    groups : GroupSlice
  }
})