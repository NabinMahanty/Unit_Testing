import { render, screen } from "@testing-library/react";
import Card from "./card";

test("card renders with title text", () => {
  render(<Card title="Profile Card" />);
  expect(screen.getByText("Profile Card")).toBeInTheDocument();
});
