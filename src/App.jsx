import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>REKT</h1>
        <div class="image-container">
          <img src="./fire.png"></img>
        </div>
        <div>
          <button>BUY REKT</button>
          <button>ADD LIQUIDITY</button>
          <button>TOKENOMICS</button>
        </div>
      </div>
    </>
  );
}

export default App;
