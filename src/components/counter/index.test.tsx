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

  test("should render a count of 10 after clicking the set button", async () => {
    user.setup();

    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", {
      name: "Set",
    });

    await user.click(setButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("should focus elements in right order", async () => {
    user.setup();

    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    await user.tab();
    expect(incrementButton).toHaveFocus();

    await user.tab();
    expect(amountInput).toHaveFocus();

    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
