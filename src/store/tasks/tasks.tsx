import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types";
import { TasksState } from "./types";

export const initialTasksState: TasksState = {
  tasks: [
    {
      id: 0,
      name: "",
      isDone: true,
    },
  ],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasksState,

  reducers: {
    loadTasks: (_currentState, action: PayloadAction<Task[]>): TasksState => ({
      tasks: action.payload,
    }),

    deleteTask: (currentState, action: PayloadAction<number>): TasksState => ({
      tasks: currentState.tasks.filter((task) => task.id !== action.payload),
    }),
  },
});

export const {
  loadTasks: loadTaskActionCreator,
  deleteTask: deleteTaskActionCreator,
} = tasksSlice.actions;
export const tasksSliceReducer = tasksSlice.reducer;
