import React from "react";
import Image from "next/image";
import logo from "../../public/static/image/mainfav.png";

const LoadingScreen = ({ show }) => {
  return (
    <>
      {show && (
        <div className="box">
          <div className="welcome-container">
            <div className="welcome-logo puff-in-center">
              <Image src={logo} width={"100px"} height={"100px"}></Image>
            </div>
            <div className="flicker-4">
              <div className="welcome-text tracking-in-expand">Esdeki.com</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingScreen;
