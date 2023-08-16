import { loadTaskActionCreator, tasksSliceReducer } from "./tasks";
import { TasksState } from "./types";

describe("Given a tasksReducer Reducer", () => {
  describe("When it receives a load tasks action with 2 tasks", () => {
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

    test("Then it should return a new state with the receiveds tasks", () => {
      const initialState: TasksState = {
        tasks: [],
      };

      const loadTask = loadTaskActionCreator(mockedTasks);

      const taskReducer = tasksSliceReducer(initialState, loadTask);

      expect(taskReducer.tasks).toEqual(mockedTasks);
    });
  });
});
