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

export const TaskSlice = createSlice({
  name: "Task",
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
    deleteTask: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    },
    editTask: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
      };
    },
    completeTask: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    },

    changeColor: (state, action) => {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, color: action.payload.color }
            : todo
        ),
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, editTask, completeTask, changeColor } =
  TaskSlice.actions;

export default TaskSlice.reducer;
