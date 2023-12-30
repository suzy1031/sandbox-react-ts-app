import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../ui/Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

// eslint-disable-next-line import/no-default-export
export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  render: () => <Button>Button Label</Button>,
};
