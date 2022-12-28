import { render, screen } from "@testing-library/react";
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
});
