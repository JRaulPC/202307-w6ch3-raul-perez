import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockedTask, mockedTasks } from "../../mocks/mockedTasks";
import { setupStore } from "../../store";
import Task from "./TaskCard";

describe("Given a Task component", () => {
  describe("When is rendered with a task 'Comprar helados'", () => {
    test("Then it should show a heading whit the title 'Comprar helados'", () => {
      const headerText = "Comprar helados";
      const store = setupStore({
        tasksState: {
          tasks: mockedTasks,
        },
      });

      render(
        <Provider store={store}>
          <Task task={mockedTask} />
        </Provider>,
      );

      const heading = screen.getByRole("heading", { name: headerText });

      expect(heading).toBeInTheDocument();
    });
  });
});
