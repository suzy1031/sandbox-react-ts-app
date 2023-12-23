import { useCallback, useState } from "react";

type ReturnType = {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

const useHandleModal = (): ReturnType => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback((): void => {
    setOpen(true);
  }, []);

  const handleClose = useCallback((): void => {
    setOpen(false);
  }, []);
  return { open, handleOpen, handleClose };
};
export default useHandleModal;
