import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockedTasks } from "../../mocks/mockedTasks";
import { setupStore } from "../../store";
import TasksList from "./TasksList";

describe("Given a TasksList component", () => {
  describe("When is rendered with the tasks 'Go to bootcamp and 'Go more to bootcamp'", () => {
    test("Then it should show the tasks 'Go to bootcamp and 'Go more to bootcamp' listed inside headings", () => {
      const store = setupStore({
        tasksState: {
          tasks: mockedTasks,
        },
      });

      render(
        <Provider store={store}>
          <TasksList />
        </Provider>,
      );

      mockedTasks.forEach((task) => {
        const tasksHeadings = screen.getByRole("heading", { name: task.name });
        expect(tasksHeadings).toBeInTheDocument();
      });
    });
  });
});
