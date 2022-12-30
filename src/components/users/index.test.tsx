import { render, screen } from "@testing-library/react";

import Users from ".";

describe("User", () => {
  test("should render component", () => {
    render(<Users />);

    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  test("should render list of users", async () => {
    render(<Users />);

    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });
});
