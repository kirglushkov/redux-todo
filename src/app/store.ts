import { configureStore } from "@reduxjs/toolkit";
import addTaskSlice from "../features/addTaskSlice";

export default configureStore({
  reducer: {
    addTask: addTaskSlice,
  },
});
