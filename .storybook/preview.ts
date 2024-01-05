import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../src/libs/theme';
import 'tailwindcss/tailwind.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
      themes: { light: theme },
    }),
  ],
};

export default preview;
