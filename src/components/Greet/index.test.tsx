import { render, screen } from "@testing-library/react";
import Greet from ".";

test("renders greet", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("renders greet with a name", () => {
  render(<Greet name="Swapnil" />);
  const textElement = screen.getByText("Hello Swapnil");
  expect(textElement).toBeInTheDocument();
});
