import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Button from "../ui/Button";

test("Buttonに文字が表示されること", async () => {
  render(<Button>Button</Button>);

  expect(screen.getByText("Button")).toBeTruthy();
});
