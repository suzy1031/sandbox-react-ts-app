import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { type ReactElement } from 'react';
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from 'react-hook-form';
import 'dayjs/locale/ja';

interface Props<T extends FieldValues = FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  errorMessage?: string;
}
const MuiDatePicker = <T extends FieldValues>({
  name,
  control,
  label,
  errorMessage,
}: Props<T>): ReactElement => {
  return (
    // ref https://github.com/orgs/react-hook-form/discussions/10135
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
            <DatePicker
              label={label}
              onChange={onChange}
              onAccept={onChange}
              value={value}
              inputRef={ref}
              format="YYYY/MM/DD"
              slotProps={{
                textField: {
                  size: 'small',
                  error: Boolean(errorMessage),
                  helperText: errorMessage,
                },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};
export default MuiDatePicker;
