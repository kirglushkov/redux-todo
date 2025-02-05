import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Todo } from "../App";
import axios from "axios";

const API_URL = 'http://localhost:3001/todos';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (text: string) => {
  const response = await axios.post(API_URL, { text });
  return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async ({ id, completed }: { id: number, completed: boolean }) => {
  const response = await axios.patch(`${API_URL}/${id}`, { completed });
  return response.data;
});

const initialState = {
  todos: [] as Todo[],
  status: 'idle',
  error: null as string | null,
};

export const TaskSlice = createSlice({
  name: "Task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      });
  },
});

export default TaskSlice.reducer;