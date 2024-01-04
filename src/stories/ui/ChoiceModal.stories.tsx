import { Meta, StoryObj } from "@storybook/react";
// import { within, userEvent, screen } from "@storybook/testing-library";
// import { expect } from "@storybook/jest";
import ChoiceModal from "../../ui/ChoiceModal";
import { jest } from "@storybook/jest";

const meta: Meta<typeof ChoiceModal> = {
  title: "ui/ChoiceModal",
  component: ChoiceModal,
  parameters: {
    docs: {
      description: {
        component: "Choiceコンポーネントは...に使用されます", // ここにコンポーネントの説明を書く
      },
    },
  },
  argTypes: {
    open: {
      description: "Choiceコンポーネントの表示を制御します", // ここに引数の説明を書く
      control: "boolean", // ここに引数のコントロールタイプを書く
    },
    handleClose: {
      description: "モーダルを閉じるための関数", // ここに引数の説明を書く
      action: "closed", // ここに引数のコントロールタイプを書く
    },
  },
};

export default meta;

type Story = StoryObj<typeof ChoiceModal>;

export const Primary: Story = {
  args: {
    open: true,
    handleClose: jest.fn(),
  },
  render: (args) => <ChoiceModal {...args} />,
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);

  //   // Check if the 'Disagree' button is visible
  //   const disagreeButton = await canvas.findByText("Disagree");
  //   expect(disagreeButton).toBeInTheDocument();
  //   expect(disagreeButton).toBeVisible();

  //   // Wait for the 'Agree' button to be in the document and then click it
  //   const agreeButton = await canvas.findByText("Agree");
  //   await userEvent.click(agreeButton);
  // },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: "これはChoiceコンポーネントのプライマリバリエーションです", // ここにストーリーの説明を書く
      },
    },
  },
};
