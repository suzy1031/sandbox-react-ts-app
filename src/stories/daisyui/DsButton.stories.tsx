import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { jest } from '@storybook/jest';
import DsButton from '../../components/daisyui/DsButton';

export default {
  title: 'components/daisyui/DsButton',
  component: DsButton,
  parameters: {
    docs: {
      description: {
        components:
          'DsButtonコンポーネントは、色、サイズ、無効状態を変更できるボタンです。',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    color: {
      description: 'ボタンの色を設定します。',
      control: 'select',
    },
    size: {
      description: 'ボタンのサイズを設定します。',
      control: 'select',
    },
    disable: {
      description: 'ボタンを無効にするかどうかを設定します。',
      control: 'boolean',
    },
    label: {
      description: 'ボタンのラベルを設定します。',
      control: 'text',
    },
    handleClick: {
      description: 'ボタンがクリックされたときのハンドラーを設定します。',
      action: 'clicked',
    },
  },
} as Meta;

type Story = StoryObj<typeof DsButton>;

export const Primary: Story = {
  args: {
    color: 'primary',
    size: 'md',
    disable: false,
    label: 'Button',
    handleClick: jest.fn(),
  },
  render: (args) => <DsButton {...args} />,
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByText('Button');

    // Simulate user clicking the button
    await userEvent.click(button);

    // Assertions or other interactions can be placed here
    // For demonstration, we'll assert the button is in the document
    await expect(button).toBeInTheDocument();

    // Assert that handleClick has been called
    await expect(args.handleClick).toHaveBeenCalled();
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story: 'Primaryという名前のDsButtonコンポーネントのStoryです。',
      },
    },
  },
};
