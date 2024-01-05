import { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, screen } from "@storybook/testing-library";
// import { expect } from "@storybook/jest";
import ChoiceModal from '../../ui/ChoiceModal';
import { jest } from '@storybook/jest';
import { useArgs } from '@storybook/preview-api';
import HtmlButton from '../../ui/HtmlButton';

const meta: Meta<typeof ChoiceModal> = {
  title: 'ui/ChoiceModal',
  component: ChoiceModal,
  parameters: {
    docs: {
      description: {
        component: 'Choiceコンポーネントは...に使用されます',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    open: {
      description: 'Choiceコンポーネントの表示を制御します',
    },
    handleClose: {
      description: 'モーダルを閉じるための関数',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ChoiceModal>;

export const Primary: Story = {
  args: {
    open: false,
    handleClose: jest.fn(),
  },
  // ref: https://storybook.js.org/docs/writing-stories/args#setting-args-from-within-a-story
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs(); // Get the function to update args

    const handleOpen = () => {
      updateArgs({ open: true }); // Set open to true
    };

    const handleClose = () => {
      updateArgs({ open: !open }); // Set open to false
    };

    return (
      <>
        <HtmlButton label="Open Modal" handleClick={handleOpen} />
        <ChoiceModal {...args} handleClose={handleClose} />
      </>
    );
  },
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
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story: 'これはChoiceコンポーネントのプライマリバリエーションです', // ここにストーリーの説明を書く
      },
    },
  },
};
