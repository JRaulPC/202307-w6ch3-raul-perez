import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types";
import { TasksState } from "./types";

export const initialTasksState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasksState,

  reducers: {
    loadTasks: (
      _currentTasksState,
      action: PayloadAction<Task[]>,
    ): TasksState => ({
      tasks: action.payload,
    }),
    deleteTask: (
      currentTasksState,
      action: PayloadAction<number>,
    ): TasksState => ({
      tasks: currentTasksState.tasks.filter(
        (task) => task.id !== action.payload,
      ),
    }),
    addTask: (currentTasksState, action: PayloadAction<Task[]>): TasksState => {
      const newTasks = [...currentTasksState.tasks];
      newTasks.push(...action.payload);
      return { tasks: newTasks };
    },
    toogleTask: (
      currentTasksState,
      action: PayloadAction<number>,
    ): TasksState => ({
      tasks: currentTasksState.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, isDone: !task.isDone }
          : { ...task },
      ),
    }),
  },
});

export const {
  loadTasks: loadTaskActionCreator,
  deleteTask: deleteTaskActionCreator,
  addTask: addTaskActionCreator,
  toogleTask: toogleTaskActionCreator,
} = tasksSlice.actions;
export const tasksSliceReducer = tasksSlice.reducer;
