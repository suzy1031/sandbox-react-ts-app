import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import ChoiceModal from "../../ui/ChoiceModal";

const meta: Meta<typeof ChoiceModal> = {
  title: "ui/ChoiceModal",
  component: ChoiceModal,
};

export default meta;

type Story = StoryObj<typeof ChoiceModal>;

export const Primary: Story = {
  args: {
    open: true,
    handleClose: () => {},
  },
  // refs: https://storybook.js.org/docs/writing-stories/args
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs();

    function handleClose() {
      updateArgs({ open: false });
    }
    return <ChoiceModal {...args} open={open} handleClose={handleClose} />;
  },
};
