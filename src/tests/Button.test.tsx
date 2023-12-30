import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import CustomButton from "../ui/Button";

test("Buttonに文字が表示されること", async () => {
  render(<CustomButton>Button</CustomButton>);

  expect(screen.getByText("Button")).toBeTruthy();
});
