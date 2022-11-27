import { render, screen } from "@testing-library/react";
import Greet from ".";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("renders with a name", () => {
    render(<Greet name="Swapnil" />);
    const textElement = screen.getByText("Hello Swapnil");
    expect(textElement).toBeInTheDocument();
  });
});
