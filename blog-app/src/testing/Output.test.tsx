import { act, render, screen } from "@testing-library/react";
import Output from "./Output";
import userEvent from "@testing-library/user-event";

describe("Output Component", () => {
  test("renders heading element", () => {
    render(<Output />);

    const headingElement = screen.queryByText(/some demo output/i);

    expect(headingElement).toBeInTheDocument();
  });

  test("renders 'toggle is false' if button is not clicked", () => {
    render(<Output />);

    const pElement = screen.getByText("toggle is false", { exact: false });

    expect(pElement).toBeInTheDocument();
  });

  test("renders not 'toggle is true' when the button is not clicked", () => {
    render(<Output />);

    const pElement = screen.queryByText(/toggle is true/i);

    expect(pElement).toBeNull();
  });

  test("renders 'toggle is true' when the button is clicked", async () => {
    render(<Output />);

    const btnElement = screen.getByRole("button");

    act(() => {
      userEvent.click(btnElement);
    });
    const pElement = await screen.findByText(/toggle is true/i);

    expect(pElement).not.toBeNull();
  });

  test("renders not 'toggle is false' if the button is clicked", async () => {
    render(<Output />);

    const btnElement = screen.getByRole("button");

    act(() => {
      userEvent.click(btnElement);
    });

    const pElement = await screen.queryByText(/toggle is false/i);

    expect(pElement).not.toBeInTheDocument();
  });
});

// npm run test
