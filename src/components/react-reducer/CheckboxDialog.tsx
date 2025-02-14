import { type FC, type ReactElement } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
} from '@mui/material';
import { type ComplexState } from '../../types/state';
import { type Action } from '../../reducer/home';

interface Props {
  state: ComplexState;
  dispatch: React.Dispatch<Action>;
}

const CheckboxDialog: FC<Props> = ({ state, dispatch }): ReactElement => {
  return (
    <>
      <Dialog open={state.modalType.open}>
        <Box sx={{ minWidth: 400 }}>
          <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>
            これは{state.modalType.type}のダイアログ
          </DialogTitle>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">
              これは{state.modalType.type}のチェックボックス
            </FormLabel>
            <FormGroup>
              {state.modalType.data.map((data, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={state.checked.includes(data.id)}
                      onChange={() => {
                        dispatch({ type: 'setCheck', payload: data.id });
                      }}
                    />
                  }
                  label={data.name}
                />
              ))}
            </FormGroup>
          </FormControl>
          <Stack direction="row" spacing={2} sx={{ mx: 3, mb: 2 }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                dispatch({ type: 'cancel' });
              }}
              disabled={state.checked.length === 0}
              fullWidth
            >
              閉じる
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch({ type: 'submit' });
              }}
              fullWidth
            >
              決定
            </Button>
          </Stack>
        </Box>
      </Dialog>
    </>
  );
};
export default CheckboxDialog;
