import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Button from "../Button";

describe("Button Component", () => {
  test("snapshot", () => {
    render(<Button>button</Button>);
    expect(screen.getByTestId("button")).toMatchSnapshot();
  });

  test("Can use onClick event callback", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>button</Button>);

    fireEvent.click(screen.getByTestId("button"));
    expect(onClick).toBeCalledTimes(1);
  });

  test("Can set Disabled", () => {
    render(<Button disabled>button</Button>);
    expect(screen.getByTestId("button")).toBeDisabled();
  });

  test("Can use ref", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>button</Button>);

    expect(ref.current?.dataset?.testid).toBe("button");
  });
});
