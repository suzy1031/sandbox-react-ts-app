import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "../../ui/Button";

const meta: Meta<typeof CustomButton> = {
  title: "ui/CustomButton",
  component: CustomButton,
};

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = {
  render: () => <CustomButton>Button Label</CustomButton>,
};

export const Disabled: Story = {
  render: () => <CustomButton disabled>Disabled Button Label</CustomButton>,
};
