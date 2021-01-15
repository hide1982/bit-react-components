import React from "react";
import { render, screen } from "@testing-library/react";
import Ripple from "../components/Ripple";

describe("Ripple component", () => {
  test("snapshot", () => {
    render(<Ripple top={10} left={10} size={10} isDisplay={false} />);
    expect(screen.getByTestId("ripple")).toMatchSnapshot();
  });

  test("Can apply props", () => {
    render(<Ripple top={10} left={10} size={10} isDisplay={false} />);
    expect(screen.getByTestId("ripple")).toHaveStyle({
      top: "10px",
      left: "10px",
      borderWidth: `${10 / 2}px`,
    });
  });
});
