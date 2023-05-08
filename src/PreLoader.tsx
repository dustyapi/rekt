import { preLoaderAnim } from "./animations/index";
import "./preLoader.css";
import React, { useEffect } from "react";
const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <h1>GET REKT</h1>
      </div>
    </div>
  );
};

export default PreLoader;
