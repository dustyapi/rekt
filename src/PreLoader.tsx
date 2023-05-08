import { preLoaderAnim } from "./animations/index";
import "./preLoader.css";
import React, { useEffect } from "react";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader" >
      <div className="texts-container">
        <h1>GET REKT</h1>
        {/* <img src="./fire.gif"></img> */}
      </div>
    </div>
  );
};

export default PreLoader;
