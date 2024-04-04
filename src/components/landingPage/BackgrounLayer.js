import React from "react";
import pngwing1 from "./images/pngwing1.png";

const BackgrounLayer = () => {
  return (
    <div>
      <img src={pngwing1} className="h-[100vh] w-[50%] z-[-1] fixed" alt="" />
    </div>
  );
};

export default BackgrounLayer;
