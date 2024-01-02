import { Meta, StoryObj } from "@storybook/react";
import HtmlButton from "../../ui/HtmlButton";

export default {
  title: "ui/HtmlButton",
  component: HtmlButton,
} as Meta;

type Story = StoryObj<typeof HtmlButton>;

export const PrimaryContained: Story = {
  args: {
    label: "Primary Contained",
    variant: "contained",
    color: "primary",
    handleClick: () => {},
    dataQa: "button-1",
    height: 48,
    isRounded: true,
    sx: { width: "300px", fontSize: "16px" },
  },
  render: (args) => <HtmlButton {...args} />,
  tags: ["autodocs"],
};

export const SecondaryOutlined: Story = {
  args: {
    label: "Secondary Outlined",
    variant: "outlined",
    color: "secondary",
    handleClick: () => {},
    height: 48,
    isRounded: false,
    sx: { width: "200px", fontSize: "14px" },
  },
  render: (args) => <HtmlButton {...args} />,
  tags: ["autodocs"],
};
