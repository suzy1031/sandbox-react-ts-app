import { Button, Stack } from "@mui/material";

const CustomButton = ({
  children,
  onClick,
  disabled,
}: {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary" variant="outlined" onClick={onClick}>
        secondary
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
