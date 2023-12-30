import { Button } from "@mui/material";

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
    <Button
      color="primary"
      variant="contained"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
export default CustomButton;
