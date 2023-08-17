import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { mockedTasks } from "../../mocks/mockedTasks";
import { setupStore } from "../../store";
import TasksList from "./TasksList";

describe("Given a TasksList component", () => {
  const store = setupStore({
    tasksState: {
      tasks: mockedTasks,
    },
  });

  describe("When is rendered with the tasks 'Comer' and 'Go more to bootcamp'", () => {
    test("Then it should show the tasks 'Comer' and 'Go more to bootcamp' listed inside headings", () => {
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

  describe("When the delete button from the 'Comer' task is clicked", () => {
    test("Then it shouldn't show 'Comer' inside a heading", async () => {
      render(
        <Provider store={store}>
          <TasksList />
        </Provider>,
      );

      const taskHeading = screen.getByRole("heading", { name: "Comer" });
      const deleteButton = within(taskHeading.closest(".task")!).getByRole(
        "button",
        {
          name: /delete/i,
        },
      );

      await userEvent.click(deleteButton);

      expect(taskHeading).not.toBeInTheDocument();
    });
  });
});
