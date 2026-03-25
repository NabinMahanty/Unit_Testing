import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./userEvent";

test("button click se count badhta hai", async () => {
  render(<Counter />);

  const btn = screen.getByText("Increment");
  await userEvent.click(btn);

  expect(screen.getByText("1")).toBeInTheDocument();
});
