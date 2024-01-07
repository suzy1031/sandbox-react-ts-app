import { useCallback, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button } from '@mui/material';
import useHandleModal from './hooks/useHandleModal';
import ChoiceModal from './ui/ChoiceModal';
import HtmlButton from './ui/HtmlButton';
import Headline from './ui/Headline';
import TwButton from './components/tailwindcss/TwButton';
import DsButton from './components/daisyui/DsButton';
import DsModal from './components/daisyui/DsModal';

function App() {
  const [count, setCount] = useState(0);
  const { open, handleOpen, handleClose } = useHandleModal();

  const [dsOpen, setDsOpen] = useState(false);

  const handleDsOpen = useCallback((): void => {
    setDsOpen(true);
  }, []);

  const handleDsClose = useCallback((): void => {
    setDsOpen(false);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Headline title="Vite + React" variant="xl" />
      <div className="card">
        <button
          data-qa="count-up"
          onClick={() => setCount((count) => count + 1)}
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
        <HtmlButton
          color="mycolor2"
          label="jsdoc -> copilot生成"
          variant="outlined"
          handleClick={() => console.log('click')}
        />
        <br />
        <div style={{ margin: '16px 0' }} />
        <TwButton
          label="tailwind Button"
          color="primary"
          size="large"
          handleClick={() => window.alert('click tailwind Button')}
        />
        <br />
        <DsButton
          label="daisyui Button"
          handleClick={handleDsOpen}
          color="primary"
        />
        <DsModal open={dsOpen} modalClose={handleDsClose} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ChoiceModal open={open} handleClose={handleClose} />
    </>
  );
}

export default App;
