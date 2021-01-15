import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TextField from "../TextField";
import styled from "styled-components";

describe("TextField component", () => {
  test("snapshot", () => {
    render(<TextField />);
    expect(screen.getByTestId("text-field")).toMatchSnapshot();
  });

  test("Can input text", () => {
    render(<TextField />);
    const input = screen.getByTestId("text-field");
    fireEvent.change(input, {
      target: { value: "input text" },
    });
    expect(input).toHaveValue("input text");
  });

  test("Can set placeholder", () => {
    render(<TextField placeholder="placeholder test" />);
    expect(screen.getByPlaceholderText("placeholder test")).toBeInTheDocument();
  });

  test("Can set initial value", () => {
    render(<TextField value="initial value" />);
    expect(screen.getByTestId("text-field")).toHaveValue("initial value");
  });

  it("Can override styles by styled-component", () => {
    const StyledTextField = styled(TextField)`
      background-color: #000;
    `;
    render(<StyledTextField />);
    expect(screen.getByTestId("text-field")).toHaveStyle(
      "background-color: #000"
    );
  });

  test("Can set Disabled", () => {
    render(<TextField disabled />);
    expect(screen.getByTestId("text-field")).toBeDisabled();
  });

  test("Can use ref", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<TextField ref={ref} />);
    expect(ref.current?.dataset?.testid).toBe("text-field");
  });
});
