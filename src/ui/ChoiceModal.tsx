import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
} from "@mui/material";
import { FC, ReactElement } from "react";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const ChoiceModal: FC<Props> = ({ open, handleClose }): ReactElement => (
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Use Google's location service?"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Tooltip title="close" placement="top">
        <Button data-qa="left-button" onClick={handleClose}>
          Disagree
        </Button>
      </Tooltip>
      <Button data-qa="right-button" onClick={handleClose} autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Dialog>
);
export default ChoiceModal;
