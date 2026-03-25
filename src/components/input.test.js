import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./input";

test("input renders with placeholder text", () => {
  render(<Input placeholder="Type your name" />);
  expect(screen.getByPlaceholderText("Type your name")).toBeInTheDocument();
});

test("input value updates when user types", async () => {
  render(<Input placeholder="Type your name" />);
  const input = screen.getByPlaceholderText("Type your name");

  await userEvent.type(input, "Alice");

  expect(input).toHaveValue("Alice");
});
