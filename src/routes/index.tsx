import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { useReducer } from 'react';
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import { complexInit } from '../types/state';
import { reducer } from '../reducer/home';

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    const [state, dispatch] = useReducer(reducer, complexInit);
    console.log(state);

    return (
      <>
        <div className="p-2">
          <h3>Welcome Home!</h3>
        </div>
        <FormControl sx={{ width: '200px' }} size="small">
          <InputLabel id={`select-label`}>選択する</InputLabel>
          <Select
            labelId={`select-label`}
            value={state.select}
            label={`選択する`}
            onChange={(e) => {
              dispatch({ type: 'setSelect', payload: e.target.value });
            }}
          >
            <MenuItem value="0">これは0です</MenuItem>
            <MenuItem value="1">これは1です</MenuItem>
            <MenuItem value="2">これは2です</MenuItem>
          </Select>
        </FormControl>
        {state.modalType.type !== '' && (
          <Button
            variant="text"
            color="primary"
            onClick={() => {
              dispatch({ type: 'reChoose' });
            }}
          >
            再選択
          </Button>
        )}
        <Dialog open={state.modalType.open}>
          <DialogTitle>これは{state.modalType.type}のダイアログ</DialogTitle>
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
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                  dispatch({ type: 'cancel' });
                }}
                disabled={state.checked.length === 0}
              >
                閉じる
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  dispatch({ type: 'submit' });
                }}
              >
                決定
              </Button>
            </Stack>
          </FormControl>
        </Dialog>
        <Dialog open={state.confirm}>
          <DialogTitle>破棄しますか?</DialogTitle>
          <DialogActions>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                dispatch({ type: 'retry' });
              }}
            >
              キャンセル
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch({ type: 'reset' });
              }}
            >
              破棄する
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={state.reselect}>
          <DialogTitle>選択中の内容を破棄しますか?</DialogTitle>
          <DialogActions>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                dispatch({ type: 'removeCancel' });
              }}
            >
              キャンセル
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch({ type: 'removeSubmit' });
              }}
            >
              破棄する
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  },
});
