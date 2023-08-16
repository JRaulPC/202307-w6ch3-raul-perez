import {
  addTaskActionCreator,
  deleteTaskActionCreator,
  loadTaskActionCreator,
  tasksSliceReducer,
} from "./tasks";
import { TasksState } from "./types";

describe("Given a tasksReducer Reducer", () => {
  const mockedTasks = [
    {
      id: 0,
      name: "Go to bootcamp",
      isDone: true,
    },
    {
      id: 1,
      name: "Go more to bootcamp",
      isDone: true,
    },
  ];
  describe("When it receives a load tasks action with 2 tasks", () => {
    test("Then it should return a new state with the receiveds tasks", () => {
      const initialState: TasksState = {
        tasks: [],
      };
      const loadTaskAction = loadTaskActionCreator(mockedTasks);

      const newTaskState = tasksSliceReducer(initialState, loadTaskAction);

      expect(newTaskState.tasks).toEqual(mockedTasks);
    });

    const currentState: TasksState = {
      tasks: mockedTasks,
    };

    describe("When it receives a delete task action with 1 task", () => {
      test("Then it should return a new state without the deletes task", () => {
        const deleteTaskAction = deleteTaskActionCreator(mockedTasks[0].id);

        const newTasksState = tasksSliceReducer(currentState, deleteTaskAction);

        expect(newTasksState.tasks).not.toContain(mockedTasks[0]);
      });
    });

    describe("When it receives an add task action with 1 task", () => {
      test("Then it should return a new state with the added task", () => {
        const mockedAddedTask = [
          {
            id: 2,
            name: "No joder las ramas de github",
            isDone: false,
          },
        ];
        const addTaskAction = addTaskActionCreator(mockedAddedTask);

        const newTasksState = tasksSliceReducer(currentState, addTaskAction);

        expect(newTasksState.tasks).toContain(mockedAddedTask[0]);
      });
    });
  });
});
