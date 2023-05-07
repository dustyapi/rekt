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
        <h1>REKT</h1>
        <h2>
          Got rugged on a memecoin or NFT trade recently? This is web3...we've
          all been there. Turn your misfortune in comedy. Join the fun, viral
          memecoin community by sharing your story, receive $REKT reward tokens.
        </h2>
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
              <h1>TOKENOMICS</h1>
          <section className="tokenomics-container">
            <div id="tokenomics" className="tokenomics">
              <p>
                
                  <p>50% liquidity</p>
                  <p>30% Airdrops </p>
                  <p>5% Marketing</p>
                  <p>15% Utility Development</p>
              </p>
              {/* <img src="./chart.png"></img> */}
            </div>
          </section>
              <h1>How get REKT</h1>
          <section className="howtocontainer">
            <div className="container_start_guide">
              {/* <img className="arr-star" src="../images/arrr.svg" /> */}

              <div className="steps_n">
                {/* <img className="qdeu" src="../images/stepone.svg" /> */}
                <hr className="MuiDivider-root step_divider" />
                <div>
                  <h3 className="start_guide_h">
                    Purchase SOL on a reputable exchange
                  </h3>
                  <p>
                    To start, buy SOL on well-known exchanges such as Binance,
                    Kraken or Coinbase.
                  </p>
                </div>
              </div>

              <div className="steps_n">
                {/* <img className="qdeu" src="../images/steptwo.svg" /> */}
                <hr className="MuiDivider-root step_divider" />
                <div>
                  <h3 className="start_guide_h">
                    Set up a Solana wallet and copy address
                  </h3>
                  <p>
                    Download the Phantom wallet extension for Google Chrome,
                    Microsoft Edge, Firefox, or the Brave Browser. Link:{" "}
                    <a href="https://phantom.app">https://phantom.app</a>. Once
                    you have created your wallet, click on the top where it says
                    Wallet # as this will copy your wallet address to your
                    clipboard.
                  </p>
                </div>
              </div>

              <div className="steps_n">
                {/* <img className="qdeu" src="../images/steptree.svg" /> */}
                <hr className="MuiDivider-root step_divider" />
                <div>
                  <h3 className="start_guide_h">
                    Send SOL from your Exchange wallet to your Phantom wallet
                  </h3>
                  <p>
                    To begin, identify your SOL within your exchange wallet and
                    select withdraw. At this point, it should ask you how much
                    you would like to withdraw along with the receiving address.
                    This is where you paste your address from the previous step
                    to complete the withdrawal of funds.
                  </p>
                </div>
              </div>

              <div className="steps_n">
                {/* <img className="qdeu" src="../images/stepforth.svg" /> */}
                <hr className="MuiDivider-root step_divider" />
                <div>
                  <h3 className="start_guide_h">
                    Converting USDC TO REKT on Raydium
                  </h3>
                  <p>
                  Now you can easily swap your $USDC for $REKT. Please
                    remember to leave a small amount of SOL for transaction
                    fees.
                  </p>
                </div>
              </div>

              {/* <img className="pizza" src="../images/pizza.png" /> */}
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
