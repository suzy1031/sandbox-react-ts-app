import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontSize: 13,
    fontFamily: `'Noto Sans JP', 'Yu Gothic', YuGothic, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif`,
    button: {
      fontSize: 14,
      textTransform: "none",
      fontWeight: 700,
    },
  },
});
export default theme;
