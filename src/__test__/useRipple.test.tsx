import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import useRipple from "../hooks/useRipple";

describe("useRipple hook", () => {
  test("Should set correct values when called pulsate", () => {
    const { result } = renderHook(() => useRipple());
    act(() => {
      result.current.setRippleParentInfo({
        offsetTop: 10,
        offsetLeft: 10,
        clientHeight: 30,
        clientWidth: 60,
      });
    });
    act(() => {
      result.current.pulsate(10, 10);
    });
    expect(result.current.rippleProps).toMatchObject({
      isDisplay: true,
      top: -30,
      left: -30,
      size: 60,
    });
  });
});
