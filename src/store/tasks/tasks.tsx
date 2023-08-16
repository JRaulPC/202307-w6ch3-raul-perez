import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types";
import { TasksState } from "./types";

const initialTasksState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasksState,
  reducers: {
    loadTasks: (
      _initialTasksState,
      action: PayloadAction<Task[]>,
    ): TasksState => ({ tasks: action.payload }),
  },
});

export default tasksSlice.reducer;
