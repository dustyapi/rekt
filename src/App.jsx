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
          <button><a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=CDCzrKUHpumbbdQyoKZA9d67F7Y1sWfvZnhZSDbVQ97B&fixed=in">BUY REKT</a></button>
          <button><a href="https://raydium.io/liquidity/add/?coin0=sol&coin1=CDCzrKUHpumbbdQyoKZA9d67F7Y1sWfvZnhZSDbVQ97B&fixed=coin0&ammId=BYVrUSfDxiNVzK4zLGoea9TzcZb4c1Z9d4VsBhEyQa9Z">ADD LIQUIDITY</a></button>
          <button>TOKENOMICS</button>
        </div>
      </div>
    </>
  );
}

export default App;
