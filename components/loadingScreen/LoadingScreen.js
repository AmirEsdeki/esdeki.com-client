import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../../public/static/image/mainfav.png";
import BarPreLoader from "./barPreLoader/BarPreLoader";

const LoadingScreen = ({ show }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (show) {
        document.body.classList.add("hidden-overflow");
      } else {
        document.body.classList.remove("hidden-overflow");
      }
    }
  }, [show]);

  return (
    <>
      {show && (
        <div className="box" style={{ display: show ? "flex" : "none" }}>
          <div className="welcome-container">
            <div className="welcome-logo puff-in-center">
              <Image src={logo} width={"100px"} height={"100px"}></Image>
            </div>
            <div className="flicker-4">
              <div className="welcome-text tracking-in-expand">esdeki.com</div>
            </div>
          </div>
          <BarPreLoader />
        </div>
      )}
    </>
  );
};

export default LoadingScreen;
