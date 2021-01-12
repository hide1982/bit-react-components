import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import IconButton from "../components/IconButton";

describe("IconButton component", () => {
  test("snapshot", () => {
    render(<IconButton name="close" />);
    expect(screen.getByTestId("icon-button")).toMatchSnapshot();
  });

  test("Can change styles by props", () => {
    render(<IconButton name="close" color="#000" />);
    expect(screen.getByTestId("icon-button").querySelector("svg")).toHaveStyle({
      fill: "#000",
    });
  });

  test("Can use onClick event callback", () => {
    const onClick = jest.fn();
    render(
      <IconButton name="close" onClick={onClick}>
        icon button
      </IconButton>
    );

    fireEvent.click(screen.getByTestId("icon-button"));
    expect(onClick).toBeCalledTimes(1);
  });

  test("Cannot use onClick event callback if the button is disabled", () => {
    const onClick = jest.fn();
    render(
      <IconButton name="close" onClick={onClick} disabled>
        icon button
      </IconButton>
    );

    fireEvent.click(screen.getByTestId("icon-button"));
    expect(onClick).toBeCalledTimes(0);
  });

  test("Can use ref", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(
      <IconButton name="close" ref={ref}>
        icon button
      </IconButton>
    );

    expect(ref.current?.dataset?.testid).toBe("icon-button");
  });
});
