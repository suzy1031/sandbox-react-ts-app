import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "../../ui/Button";

const meta: Meta<typeof CustomButton> = {
  title: "Button",
  component: CustomButton,
};

// eslint-disable-next-line import/no-default-export
export default meta;

type Story = StoryObj<typeof CustomButton>;

export const DefaultButton: Story = {
  render: () => <CustomButton>Button Label</CustomButton>,
};
