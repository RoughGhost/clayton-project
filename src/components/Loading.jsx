import React from "react";
import { ThreeCircles } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="flex justify-center items-center ">
      <ThreeCircles height={550} width={80} color="#00bfff" />
    </div>
  );
};

export default Loading;
