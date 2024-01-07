import { expect, jest } from '@storybook/jest';
import { type Meta, type StoryObj } from '@storybook/react';
import HtmlButton from '../../ui/HtmlButton';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'ui/HtmlButton',
  component: HtmlButton,
  parameters: {
    docs: {
      description: {
        component:
          'HtmlButton is a customizable button component for user interactions. You can set its variant, color, click behavior, size, and shape. Customize it further with the `sx` prop for specific style overrides.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    label: { description: 'The text that appears on the button.' },
    variant: {
      description:
        'The variant to use. It determines the button\'s style. Examples include "contained" for a filled background or "outlined" for a bordered style.',
    },
    color: {
      description:
        'The color of the button. Typically includes "primary", "secondary", or other theme-based colors.',
    },
    handleClick: {
      description: 'Function to call when the button is clicked.',
    },
    dataQa: { description: 'A data-attribute for QA testing purposes.' },
    height: { description: 'The height of the button.' },
    isRounded: {
      description: 'If true, the button will have rounded corners.',
    },
    sx: {
      description:
        'Custom styles to apply to the button. Accepts theme-based style object.',
    },
  },
} as Meta;

type Story = StoryObj<typeof HtmlButton>;

export const PrimaryContained: Story = {
  args: {
    label: 'Primary Contained',
    variant: 'contained',
    color: 'primary',
    handleClick: jest.fn(), // Mock the function
    dataQa: 'button-1',
    height: 48,
    isRounded: true,
    sx: { width: '300px', fontSize: '16px' },
  },
  render: (args) => <HtmlButton {...args} />,
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByText('Primary Contained');

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
        story:
          'PrimaryContained is a button with a "contained" variant and a "primary" color theme. It is styled to stand out as a primary action button, with increased width and font size for emphasis.',
      },
    },
  },
};

export const SecondaryOutlined: Story = {
  args: {
    label: 'Secondary Outlined',
    variant: 'outlined',
    color: 'secondary',
    handleClick: jest.fn(), // Mock the function,
    height: 48,
    isRounded: false,
    sx: { width: '200px', fontSize: '14px' },
  },
  render: (args) => <HtmlButton {...args} />,
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByText('Secondary Outlined');

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
        story:
          'SecondaryOutlined is a button with an "outlined" variant and a "secondary" color theme. It is typically used for less prioritized actions. Its style is more subdued, with a smaller width and font size compared to the primary button.',
      },
    },
  },
};
