import { render, screen } from "@testing-library/react";
import MUiMode from ".";
import Providers from "../../providers";

describe("Mui Mode", () => {
  test("should render text correctly", () => {
    render(<MUiMode />, {
      wrapper: Providers,
    });

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
