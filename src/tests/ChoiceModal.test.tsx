import { render } from "@testing-library/react";
import ChoiceModal from "../ui/ChoiceModal";
import { vi } from "vitest";

test("renders correctly", () => {
  const handleClose = vi.fn();
  const { asFragment } = render(
    <ChoiceModal open={true} handleClose={handleClose} />
  );
  expect(asFragment()).toMatchSnapshot();
});
