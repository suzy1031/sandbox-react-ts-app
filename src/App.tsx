import { type ReactElement, useCallback, useState } from 'react';
import { Button } from '@mui/material';
import useHandleModal from './hooks/useHandleModal';
import ChoiceModal from './ui/ChoiceModal';
import HtmlButton from './ui/HtmlButton';
import Headline from './ui/Headline';
import TwButton from './components/tailwindcss/TwButton';
import DsButton from './components/daisyui/DsButton';
import DsModal from './components/daisyui/DsModal';

const App = (): ReactElement => {
  const [count, setCount] = useState(0);
  const { open, handleOpen, handleClose } = useHandleModal();

  // TODO: hookに切り出す
  const [dsOpen, setDsOpen] = useState(false);

  const handleDsOpen = useCallback((): void => {
    setDsOpen(true);
  }, []);

  const handleDsClose = useCallback((): void => {
    setDsOpen(false);
  }, []);

  return (
    <>
      <Headline title="Vite + React" variant="xl" />
      <button
        data-qa="count-up"
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        count is {count}
      </button>
      <Button
        data-qa="open-modal-button"
        variant="contained"
        sx={{ mx: 2 }}
        onClick={handleOpen}
      >
        Mui Button Test
      </Button>
      <br />
      <HtmlButton
        color="mycolor2"
        label="jsdoc -> copilot生成"
        variant="outlined"
        handleClick={() => {
          console.log('click');
        }}
      />
      <br />
      <div style={{ margin: '16px 0' }} />
      <TwButton
        label="tailwind Button"
        color="primary"
        size="large"
        handleClick={() => {
          window.alert('click tailwind Button');
        }}
      />
      <br />
      <DsButton
        label="daisyui Button"
        handleClick={handleDsOpen}
        color="primary"
      />
      <DsModal open={dsOpen} modalClose={handleDsClose} />
      <ChoiceModal open={open} handleClose={handleClose} />
    </>
  );
};

export default App;
