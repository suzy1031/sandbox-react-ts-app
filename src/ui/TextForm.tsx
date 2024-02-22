import { TextField } from '@mui/material';
import { type ReactElement } from 'react';
import {
  // type UseControllerProps,
  type FieldValues,
  type FieldErrors,
  Controller,
  type Path,
  type Control,
} from 'react-hook-form';

/**
 * refs:
 * https://zenn.dev/yamakenji24/articles/rhf-with-zod-jest
 * https://zenn.dev/monicle/articles/4868424f22d6f5
 * https://qiita.com/kage1020/items/e6a6336132c83a0c3cef
 */
interface RHFProps<T extends FieldValues = FieldValues> {
  name: Path<T>;
  control: Control<T>;
  errors: FieldErrors<{
    name: string;
  }>;
}

/**
 * UseControllerPropsから､'name'と'control'を抽出する場合の書き方
 * name: Path<T>
 * control: Control<T>
 * と同義
 */
// type RHFProps<T extends FieldValues = FieldValues> = Pick<
//   UseControllerProps<T>,
//   'name' | 'control'
// > & {
//   errors: FieldErrors<{
//     name: string;
//   }>;
// }

const TextForm = <T extends FieldValues>({
  name,
  control,
  errors,
}: RHFProps<T>): ReactElement => {
  return (
    // ref: https://react-hook-form.com/docs/usecontroller/controller
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          placeholder="ここに入力する"
          size="small"
          inputProps={{
            'data-testid': 'text-form',
          }}
          error={Boolean(errors.name)}
          helperText={errors.name?.message}
          onChange={onChange}
          value={value}
          // {...field}
        />
      )}
    />
  );
};
export default TextForm;
