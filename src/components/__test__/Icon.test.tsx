import React from "react";
import { render, screen } from "@testing-library/react";

import Icon from "../Icon";
import styled from "styled-components";

describe("Icon component", () => {
  it("snapshot", () => {
    render(<Icon name="chevronLeft" />);
    expect(screen.getByTestId("icon")).toMatchSnapshot();
  });

  it("Can change styles by props", () => {
    render(<Icon name="close" width={20} height={20} color="blue" />);
    expect(screen.getByTestId("icon")).toHaveStyle({
      width: "20px",
      height: "20px",
    });
    expect(screen.getByTestId("icon").querySelector("svg")).toHaveStyle(
      "fill: blue"
    );
  });

  it("Can override styles by styled-component", () => {
    const StyledIcon = styled(Icon)`
      background-color: #000;
    `;
    render(<StyledIcon name="close" />);
    expect(screen.getByTestId("icon")).toHaveStyle("background-color: #000");
  });
});
