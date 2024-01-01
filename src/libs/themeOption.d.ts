import PaletteColorOptions from "@mui/material/styles/createPalette";

// PaletteOptions を拡張して、カラーキーワードを追加
declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    mycolor1?: PaletteColorOptions;
    mycolor2?: PaletteColorOptions;
  }
}

// Button の color prop に追加
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    mycolor1: true;
    mycolor2: true;
  }
}
