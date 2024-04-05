import { useReducer, type ReactElement } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { reducer } from '../../reducer/home';
import { complexInit } from '../../types/state';
import Headline from '../../ui/Headline';
import CheckboxDialog from './CheckboxDialog';
import ConfirmDialog from './ConfirmDialog';

const Complex = (): ReactElement => {
  const [state, dispatch] = useReducer(reducer, complexInit);
  console.log(state);

  return (
    <>
      <Box my={2}>
        <Headline title="Complex State" variant="xl" />
      </Box>
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
      <CheckboxDialog state={state} dispatch={dispatch} />
      <ConfirmDialog
        open={state.confirm}
        title="破棄しますか?"
        dispatch={dispatch}
        cancelType="retry"
        submitType="reset"
      />
      <ConfirmDialog
        open={state.reselect}
        title="選択中の内容を破棄しますか?"
        dispatch={dispatch}
        cancelType="removeCancel"
        submitType="removeSubmit"
      />
    </>
  );
};
export default Complex;
