import MUiMode from ".";
import { render, screen } from "../../test-utils";

describe("Mui Mode", () => {
  test("should render text correctly", () => {
    render(<MUiMode />);

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
