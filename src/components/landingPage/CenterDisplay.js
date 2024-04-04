import React from "react";
import pngwing2 from "./images/pngwing2.png";

const CenterDisplay = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="p-4 bg-[#ffffff96] rounded-3xl w-[800px] h-[500px] mt-10 shadow-2xl flex items-center">
          <div className=" space-y-5">
            <h1 className="text-[70px] leading-[1] tracking-wider w-7 ">
              Amazing Pizza
            </h1>
            <h2 className="text-3xl font-semibold">Your slice of Happiness</h2>
            <h3 className="text-xl">Deliciously Irresistible Pizza’s</h3>
            <button className="text-xl p-2 bg-green-600 rounded-lg text-white">
              View Menu
            </button>
          </div>
          <img
            src={pngwing2}
            alt=""
            className="w-[700px] h-[560px] mr-[-20px] mb-[60px]"
          />
        </div>
      </div>
    </>
  );
};

export default CenterDisplay;
