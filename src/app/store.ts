import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "../features/TaskSlice";

export default configureStore({
  reducer: {
    addTask: TaskSlice,
    deleteTask: TaskSlice,
    editTask: TaskSlice,
    completeTask: TaskSlice,
    changeColor: TaskSlice,
  },
});
