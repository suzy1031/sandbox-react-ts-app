import { Chip } from '@mui/material';
import { type FC, type ReactElement } from 'react';

const CustomChip: FC = (): ReactElement => {
  return (
    <Chip
      label="Chip Filled update"
      color="primary"
      variant="outlined"
      size="small"
    />
  );
};
export default CustomChip;
