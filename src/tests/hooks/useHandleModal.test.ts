import { describe, expect, test } from "vitest";
import useHandleModal from "../../hooks/useHandleModal";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useHandleModal hook", () => {
  test("should start with modal closed", () => {
    const { result } = renderHook(() => useHandleModal());
    expect(result.current.open).toBe(false);
  });

  test("should open modal when handleOpen is called", () => {
    const { result } = renderHook(() => useHandleModal());

    act(() => {
      result.current.handleOpen();
    });

    expect(result.current.open).toBe(true);
  });

  test("should close modal when handleClose is called", () => {
    const { result } = renderHook(() => useHandleModal());

    act(() => {
      result.current.handleOpen();
    });

    act(() => {
      result.current.handleClose();
    });

    expect(result.current.open).toBe(false);
  });
});
