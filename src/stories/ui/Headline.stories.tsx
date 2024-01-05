import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Headline from '../../ui//Headline';

const primaryColorRgb = 'rgb(68, 68, 68)';

export default {
  title: 'ui/Headline',
  component: Headline,
  parameters: {
    docs: {
      description: {
        component:
          "Headline is a wrapper around MUI's Typography for consistent heading styles across your application. Customize the size with `variant`, color with `color`, and additional styles with `sx` prop.",
      },
    },
    layout: 'centered',
  },
  argTypes: {
    title: {
      description: 'The text content of the headline.',
      control: 'text',
    },
    variant: {
      description:
        'Defines the style of the headline according to the theme (e.g., xxl, xl, l, m...)',
      control: 'select',
    },
    color: {
      description:
        'Sets the color of the headline. Accepts any valid color from the theme.',
      control: 'color',
    },
    sx: {
      description:
        'Custom styles to apply to the headline. Accepts theme-based style object.',
      control: 'object',
    },
  },
} as Meta;

type Story = StoryObj<typeof Headline>;

export const Default: Story = {
  args: {
    title: 'Your Title Here',
    variant: 'xxl',
    color: 'primary',
    sx: {},
  },
  render: (args) => <Headline {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Your Title Here')).toBeInTheDocument();
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story: 'The default Headline with secondary color and xxl variant.',
      },
    },
  },
};

export const CustomColor: Story = {
  args: {
    ...Default.args,
    title: 'Secondary Colored Headline',
    color: 'secondary',
  },
  render: (args) => <Headline {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const headlineElement = await canvas.getByText(
      'Secondary Colored Headline',
    );
    await expect(headlineElement).toHaveStyle(`color: ${primaryColorRgb}`);
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story: 'Headline with a secondary color.',
      },
    },
  },
};

export const CustomStyle: Story = {
  args: {
    ...Default.args,
    title: 'Underlined Headline',
    sx: { textDecoration: 'underline' },
  },
  render: (args) => <Headline {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const headlineElement = await canvas.getByText('Underlined Headline');
    await expect(headlineElement).toHaveStyle(
      'text-decoration: underline solid rgb(38, 178, 151)',
    );
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story: 'Headline with custom styles passed via the `sx` prop.',
      },
    },
  },
};
