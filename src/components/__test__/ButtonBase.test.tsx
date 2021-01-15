import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import styled from "styled-components";
import ButtonBase from "../ButtonBase";

describe("ButtonBase component", () => {
  test("snapshot", () => {
    render(<ButtonBase>button</ButtonBase>);
    expect(screen.getByTestId("button-base")).toMatchSnapshot();
  });

  test("Should Ripple invisible by default", () => {
    render(<ButtonBase>button</ButtonBase>);
    expect(screen.getByTestId("ripple")).toHaveStyle("display: none");
  });

  test("Should Ripple visible when the button is clicked", () => {
    render(<ButtonBase>button</ButtonBase>);
    fireEvent.click(screen.getByTestId("button-base"));
    expect(screen.getByTestId("ripple")).toHaveStyle("display: block");
  });

  test("Can set Disabled", () => {
    render(<ButtonBase disabled>button</ButtonBase>);
    expect(screen.getByTestId("button-base")).toBeDisabled();
  });

  test("Can use onClick event callback", () => {
    const onClick = jest.fn();
    render(<ButtonBase onClick={onClick}>button</ButtonBase>);
    fireEvent.click(screen.getByTestId("button-base"));
    expect(onClick).toBeCalledTimes(1);
  });

  test("Can change the Ripple styles", () => {
    render(
      <ButtonBase
        rippleColors={["red", "blue"]}
        rippleRadius="50%"
        rippleDuration="1s"
      >
        button
      </ButtonBase>
    );
    const Ripple = screen.getByTestId("ripple");
    expect(Ripple).toHaveStyle({
      borderColor: "red blue",
      borderRadius: "50%",
      animation: "ripple 1s linear",
    });
  });

  test("Can override styles by styled-component", () => {
    const StyledButtonBase = styled(ButtonBase)`
      background-color: yellow;
    `;
    render(<StyledButtonBase className="extra-class">button</StyledButtonBase>);
    expect(screen.getByTestId("button-base")).toHaveStyle(
      "background-color: yellow"
    );
  });

  test("Can append className", () => {
    render(<ButtonBase className="extra-class">button</ButtonBase>);
    expect(screen.getByTestId("button-base")).toHaveClass("extra-class");
  });

  test("Can use ref", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<ButtonBase ref={ref}>button</ButtonBase>);

    expect(ref.current?.dataset?.testid).toBe("button-base");
  });
});
