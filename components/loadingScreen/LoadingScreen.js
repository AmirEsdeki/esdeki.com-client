import React from "react";

const LoadingScreen = ({ show }) => {
  return (
    <>
      {show && (
        <>
          <div className="ball one">seyed</div>
          <div className="ball two"></div>
          <div className="ball three"></div>
        </>
      )}
    </>
  );
};

export default LoadingScreen;
