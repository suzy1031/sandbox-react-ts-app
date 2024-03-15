import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { type ChangeEvent, type ReactElement } from 'react';
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
} from 'react-hook-form';
import { splitAndJoin } from '../utils/stringUtil';

interface Props<T extends FieldValues = FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  handleCheckboxFiledOpen: (event: ChangeEvent<HTMLInputElement>) => void;
}

const MuiRadio = <T extends FieldValues>({
  name,
  control,
  label,
  handleCheckboxFiledOpen,
}: Props<T>): ReactElement => {
  const id = splitAndJoin(name);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <FormControl>
            <FormLabel id={`${id}-radio-buttons-group">}`}>{label}</FormLabel>
            <RadioGroup
              row
              aria-labelledby={`${id}-radio-buttons-group`}
              name={`${id}-radio-buttons-group`}
              value={value}
              onChange={(event) => {
                onChange(event);
                handleCheckboxFiledOpen(event);
              }}
            >
              <FormControlLabel value={0} control={<Radio />} label="全部" />
              <FormControlLabel value={1} control={<Radio />} label="大" />
              <FormControlLabel value={2} control={<Radio />} label="中" />
              <FormControlLabel value={3} control={<Radio />} label="小" />
            </RadioGroup>
          </FormControl>
        );
      }}
    />
  );
};
export default MuiRadio;
