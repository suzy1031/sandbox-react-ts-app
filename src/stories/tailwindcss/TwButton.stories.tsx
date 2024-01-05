import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import TwButton from '../../components/tailwindcss/TwButton';

export default {
  title: 'tailwind/TwButton',
  component: TwButton,
  parameters: {
    docs: {
      description: {
        component:
          'Tailwind variant button with primary, secondary, and disabled states along with size variations.',
      },
    },
  },
  argsTypes: {
    color: {
      description: '色のバリエーションを設定します。',
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      description: 'ボタンのサイズを設定します。',
      control: 'select',
      options: ['small', 'base', 'large'],
    },
    disable: {
      description: 'ボタンを無効化するかどうか。',
      control: 'boolean',
    },
    label: {
      description: 'ボタンのラベル。',
      control: 'text',
    },
    handleClick: {
      description: 'クリック時のイベントハンドラ。',
      action: 'handleClick',
    },
  },
} as Meta;

type Story = StoryObj<typeof TwButton>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    color: 'primary',
  },
  render: (args) => <TwButton {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');
    await userEvent.click(button);
    await expect(button).toHaveClass('bg-blue-500');
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story: 'プライマリボタンのバリエーションを表示します。',
      },
    },
  },
};

// Add additional stories for secondary, large, small, etc., following the same pattern.
