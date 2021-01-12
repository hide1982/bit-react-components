import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Button from "../components/Button";

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

  test("Cannot use onClick event callback if the button is disabled", () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick} disabled>
        button
      </Button>
    );

    fireEvent.click(screen.getByTestId("button"));
    expect(onClick).toBeCalledTimes(0);
  });

  test("Can use ref", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>button</Button>);

    expect(ref.current?.dataset?.testid).toBe("button");
  });
});
