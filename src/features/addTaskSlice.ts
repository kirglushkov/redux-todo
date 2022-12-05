import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../App";
const initialState = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 1, text: "Learn Redux", completed: false, color: "purple" },
    { id: 2, text: "Build something fun!", completed: false, color: "blue" },
  ],
};

function nextTodoId(todos: Todo[]) {
  const maxId = todos.reduce(
    (maxId: number, todo: Todo) => Math.max(todo.id, maxId),
    -1
  );
  return maxId + 1;
}

export const addTaskSlice = createSlice({
  name: "addTask",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask } = addTaskSlice.actions;

export default addTaskSlice.reducer;
