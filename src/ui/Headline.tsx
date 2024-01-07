import { type SxProps, Typography } from '@mui/material';
import { type FC, type ReactElement } from 'react';
import { type Color, colors } from '../constants/colors';
import { type Headline, headline } from '../constants/customFonts/headline';

// TODO: rest

/**
 * @description material uiのTypographyをラップした見出しコンポーネント
 * @example
 * ```ts
 * <Headline title="Hello World" variant="xxl" />
 * -> <h1>Hello World</h1>
 * ```
 */
interface Props {
  title: string;
  variant: Headline;
  color?: Color;
  sx?: SxProps;
}
const AbiliHeadline: FC<Props> = ({
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
      sx={{ fontWeight: 700, lineHeight: '130%', ...sx }}
    >
      {title}
    </Typography>
  );
};
export default AbiliHeadline;
