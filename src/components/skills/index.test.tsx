import { render, screen, logRoles } from "@testing-library/react";
import Skills from "./index";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "javascript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders list of skills", () => {
    render(<Skills skills={skills} />);

    const listItemsElement = screen.getAllByRole("listitem");
    expect(listItemsElement).toHaveLength(skills.length);
  });

  test("render a login button", () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole("button", {
      name: "Login",
    });

    expect(loginButton).toBeInTheDocument();
  });

  test("not render start learning button", () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });

    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("start learning button present is eventually displayed", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    // screen.debug();

    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      }
    );

    expect(startLearningButton).toBeInTheDocument();
  });
});
