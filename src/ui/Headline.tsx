import { SxProps, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { Color, colors } from "../constants/colors";
import { Headline, headline } from "../constants/customFonts/headline";

// TODO: rest

/**
 * @description material uiのTypographyをラップした見出しコンポーネント
 * @example
 * ```ts
 * <Headline title="Hello World" variant="xxl" />
 * -> <h1>Hello World</h1>
 * ```
 */
type Props = {
  title: string;
  variant: Headline;
  color?: Color;
  sx?: SxProps;
};
const Headline: FC<Props> = ({
  title,
  variant,
  color = colors.secondary,
  sx = {},
}): ReactElement => {
  const baseStyle = headline[variant];
  return (
    <Typography
      component={baseStyle.component}
      fontSize={baseStyle.fontSize}
      color={color}
      sx={{ fontWeight: 700, lineHeight: "130%", ...sx }}
    >
      {title}
    </Typography>
  );
};
export default Headline;
