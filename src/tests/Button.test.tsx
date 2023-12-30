import { render } from "@testing-library/react";
import Button from "../ui/Button";

test("renders correctly", () => {
  const { asFragment } = render(<Button>Test Button</Button>);
  expect(asFragment()).toMatchSnapshot();
});
