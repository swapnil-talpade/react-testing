import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from ".";

describe("counter", () => {
  test("should render counter", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("should render count of )", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("should render count of 1 after clicking increment", async () => {
    user.setup();

    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    await user.click(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("should render count of 2 after clicking increment twice", async () => {
    user.setup();

    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    await user.click(incrementButton);
    await user.click(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });
});
