import { createTheme } from '@mui/material';
import { colors } from '../constants/colors';

const theme = createTheme({
  palette: {
    // primary: {
    //   main: colors.primary,
    //   contrastText: colors.white,
    // },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.error,
    },
    mycolor1: {
      main: colors.yellow,
    },
    mycolor2: {
      main: colors.purple,
    },
  },
  typography: {
    fontSize: 13,
    fontFamily: [
      'Noto Sans JP',
      'Yu Gothic',
      'YuGothic',
      'ヒラギノ角ゴ Pro W3',
      'Hiragino Kaku Gothic Pro',
      'メイリオ',
      'Meiryo',
      'Osaka',
      'ＭＳ Ｐゴシック',
      'MS PGothic',
      'sans-serif',
    ].join(','),
    button: {
      fontSize: 14,
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  components: {
    // Name of the component
    MuiTooltip: {
      styleOverrides: {
        // Name of the slot
        tooltip: {
          // Some CSS
          fontSize: '13px',
          background: '#FFFFFF',
          color: '#444444',
          boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.11)',
        },
      },
    },
  },
});
export default theme;
