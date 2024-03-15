import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { type ReactElement } from 'react';
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
} from 'react-hook-form';
import { FormHelperText } from '@mui/material';

// ref: https://omkz.net/mu-checkbox-rhf/
const items = [
  {
    id: 0,
    name: 'Object 0',
  },
  {
    id: 1,
    name: 'Object 1',
  },
  {
    id: 2,
    name: 'Object 2',
  },
  {
    id: 3,
    name: 'Object 3',
  },
  {
    id: 4,
    name: 'Object 4',
  },
];

interface Props<T extends FieldValues = FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  errorMessage?: string;
  handleCheck: (checkedId: number) => number[];
}

const MuiCheckbox = <T extends FieldValues>({
  name,
  control,
  label,
  errorMessage,
  handleCheck,
}: Props<T>): ReactElement => {
  return (
    <Box>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => {
          return (
            <FormControl component="fieldset" error={Boolean(errorMessage)}>
              <FormLabel component="legend">{label}</FormLabel>
              <FormHelperText>{errorMessage}</FormHelperText>
              <FormGroup row>
                {items.map((item) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={() => {
                          onChange(handleCheck(item.id));
                        }}
                        // value={value}
                        // defaultChecked={value.includes(item.id)}
                      />
                    }
                    key={item.id}
                    label={item.name}
                  />
                ))}
              </FormGroup>
            </FormControl>
          );
        }}
      />
    </Box>
  );
};
export default MuiCheckbox;
