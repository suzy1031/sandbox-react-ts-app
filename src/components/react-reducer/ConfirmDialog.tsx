import { type FC, type ReactElement } from 'react';
import { Box, Button, Dialog, DialogTitle, Stack } from '@mui/material';
import { type Action } from '../../reducer/home';

interface Props {
  open: boolean;
  title: string;
  dispatch: React.Dispatch<Action>;
  cancelType: Extract<
    Action,
    { type: 'retry' } | { type: 'removeCancel' }
  >['type'];
  submitType: Extract<
    Action,
    { type: 'reset' } | { type: 'removeSubmit' }
  >['type'];
}

const ConfirmDialog: FC<Props> = ({
  open,
  title,
  dispatch,
  cancelType,
  submitType,
}): ReactElement => {
  return (
    <Dialog open={open}>
      <Box sx={{ minWidth: 400 }}>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>
          {title}
        </DialogTitle>
        <Stack direction="row" spacing={2} sx={{ mx: 3, mb: 2 }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              dispatch({ type: cancelType });
            }}
            fullWidth
          >
            キャンセル
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch({ type: submitType });
            }}
            fullWidth
          >
            破棄する
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
};
export default ConfirmDialog;
