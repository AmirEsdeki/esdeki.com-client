import React from "react";
import { Animated } from "react-animated-css";
import ServiceCard from "./serviceCard/ServiceCard";

const Service = () => {
  return (
    <div className="service" id="service">
      <div className="container">
        <Animated animationIn="zoomIn" isVisible={true}>
          <div className="section-header text-center wow">
            <p>What I do</p>
            <h2>Awesome Quality Services</h2>
          </div>
        </Animated>
        <div className="row">
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};

export default Service;
