import { render, screen } from "@testing-library/react";
import { mockedTask } from "../../mocks/mockedTasks";
import Task from "./TaskCard";

describe("Given a Task component", () => {
  describe("When is rendered with a task 'Comprar helados'", () => {
    test("Then it should show a heading whit the title 'Comprar helados'", () => {
      const headerText = "Comprar helados";

      render(<Task task={mockedTask} />);

      const heading = screen.getByRole("heading", { name: headerText });

      expect(heading).toBeInTheDocument();
    });
  });
});
