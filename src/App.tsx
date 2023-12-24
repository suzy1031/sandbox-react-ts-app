import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@mui/material";
import useHandleModal from "./hooks/useHandleModal";
import ChoiceModal from "./ui/ChoiceModal";

function App() {
  const [count, setCount] = useState(0);
  const { open, handleOpen, handleClose } = useHandleModal();

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
      <h1>Vite + React</h1>
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
