import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { type ReactElement } from 'react';
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from 'react-hook-form';
import { splitAndJoin } from '../utils/stringUtil';

interface Props<T extends FieldValues = FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  errorMessage?: string;
}

const MuiSelect = <T extends FieldValues>({
  name,
  control,
  label,
  errorMessage,
}: Props<T>): ReactElement => {
  const id = splitAndJoin(name);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <FormControl sx={{ width: '120px' }} size="small">
            <InputLabel id={`${id}-select-label`} error={Boolean(errorMessage)}>
              {label}
            </InputLabel>
            <Select
              labelId={`${id}-select-label`}
              id={`${id}-select`}
              value={value}
              label={label}
              onChange={onChange}
              error={Boolean(errorMessage)}
            >
              {[...Array(24)].map((_, index) => (
                <MenuItem key={index} value={index + 1}>
                  {`00${index + 1}`.slice(2)}:00
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      }}
    />
  );
};
export default MuiSelect;
