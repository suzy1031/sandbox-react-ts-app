/**
 * @name HtmlButton
 * @description material ui(@mui/material)のButtonコンポーネントをラップしたコンポーネント
 * @param {string} label - ボタンラベル
 * @param {'contained' | 'outlined' | 'text'} variant - optional default: 'contained' ボタンの種類
 * @param {'primary' | 'secondary' | 'error' | 'mycolor1' | 'mycolor2'} color - optional default: 'primary' ボタンの色
 * @param {function} handleClick - ボタンクリック時のコールバック
 * @param {string} dataQa - optional default: '' テスト用のカスタムデータ属性
 * @param {number} height - optional default: 48 ボタンの高さ
 * @param {boolean} isRounded - optional default: true borderRadius: '24px' にするかどうか
 * @param {sxProps} sx - optional default: {} スタイリング sx={{ ...sx }}で使う
 * @returns {React.Element}
 * @example
 * ```ts
 * <HtmlButton
 *  label="label"
 *  handleClick={handleClick}
 *  dataQa="sample-button"
 *  sx={ width: '300px', fontSize: '16px' }
 * />
 * ```
 */

// ref: https://qiita.com/wakin/items/830bba81eb21efcda108
import { Button, type SxProps } from '@mui/material';

const HtmlButton: React.FC<{
  label: string;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'mycolor1' | 'mycolor2';
  handleClick: () => void;
  dataQa?: string;
  height?: number;
  isRounded?: boolean;
  sx?: SxProps;
}> = ({
  label,
  variant = 'contained',
  color = 'primary',
  handleClick,
  dataQa = '',
  height = 48,
  isRounded = true,
  sx = {},
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={handleClick}
      data-qa={dataQa}
      sx={{
        height,
        borderRadius: isRounded ? '24px' : '4px',
        ...sx,
      }}
    >
      {label}
    </Button>
  );
};

export default HtmlButton;
