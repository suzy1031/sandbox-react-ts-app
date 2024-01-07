import { Button, Stack } from '@mui/material';
import { type ReactElement } from 'react';

const CustomButton = ({
  children,
  onClick,
  disabled,
}: {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}): ReactElement => {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary" variant="outlined" onClick={onClick}>
        left button
      </Button>
      <Button
        color="primary"
        variant="contained"
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </Button>
    </Stack>
  );
};
export default CustomButton;
