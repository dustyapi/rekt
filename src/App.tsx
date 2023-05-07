import { useState } from "react";
import "./App.css";
import React from "react";
import { BsDiscord } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 >REKT</h1>

        <div className="rekt-fire">
          <img src="./fire.png"></img>
        </div>
        <div>
          <button>
            <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=CDCzrKUHpumbbdQyoKZA9d67F7Y1sWfvZnhZSDbVQ97B&fixed=in">
              BUY REKT
            </a>
          </button>
          <button>
            <a href="https://raydium.io/liquidity/add/?coin0=sol&coin1=CDCzrKUHpumbbdQyoKZA9d67F7Y1sWfvZnhZSDbVQ97B&fixed=coin0&ammId=BYVrUSfDxiNVzK4zLGoea9TzcZb4c1Z9d4VsBhEyQa9Z">
              ADD LIQUIDITY
            </a>
          </button>
          <button>
            <a href="https://birdeye.so/token/CDCzrKUHpumbbdQyoKZA9d67F7Y1sWfvZnhZSDbVQ97B?chain=solana">
              BIRDEYE
            </a>
          </button>
          <button>
            <a href="https://forms.gle/svv9sxh2gMjMqVZx5">AIRDROP</a>
          </button>
          {/* <button>TOKENOMICS</button> */}
          <section>
            <h2>ABOUT US</h2>
            <div className="container">
              <p>

              Got rugged on a memecoin or NFT trade recently? This is
              web3...we've all been there. Turn your misfortune in comedy. Join
              the fun, viral memecoin community by sharing your story, receive
              $REKT reward tokens.
              </p>
            </div>
          </section>
          <h2>TOKENOMICS</h2>
          <section className="container">
            <div className="tokenomics">
              <p>
                <p>50% liquidity</p>
                <p>30% Airdrops </p>
                <p>5% Marketing</p>
                <p>15% Utility Development</p>
              </p>
              {/* <img src="./chart.png"></img> */}
            </div>
          </section>

          {/* <section>
            <div id="howtobuy" className="howtobuy">
              <h1>How get REKT</h1>

              <p>
                <ul>
                  <li>
                    Create a Solana wallet (we recommend Phantom) and send the
                    SOL to your Phantom wallet address.
                  </li>
                  <li>
                    Convert funds to (USDC) on a centralized exchange (Coinbase,
                    Binance,Kraken, etc) or decentralized exchange (Raydium,
                    Orca).
                  </li>
                  <li>Send your USDC to your wallet address.</li>
                  <li>
                    Now you can easily swap your $USDC for $REKT. Please
                    remember to leave a small amount of SOL for transaction
                    fees.
                  </li>
                  <li>Congratulations, you got rekt</li>
                </ul>
                <p>
                  Token Address: SAMUmmSvrE8yqtcG94oyP1Zu2P9t8PSRSV3vewsGtPM
                  Market ID: 7PX2k66ecaUJHJweNbdCocR4kvPotvDn2FPu69svCsnu
                </p>
              </p>
            </div>
          </section> */}
        </div>
        <div className="footer">
          <div className="socials">
            <a href="https://twitter.com/rekttokens">
              <div className="twitter">
                <BsTwitter style={{ color: "white" }} />
              </div>
            </a>
            <a href="">
              {" "}
              <div className="discord">
                <BsDiscord style={{ color: "white" }} />
              </div>
            </a>
          </div>
          <hr></hr>
          <p>Copyright © 2023 REKT PROJECT. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}

export default App;
