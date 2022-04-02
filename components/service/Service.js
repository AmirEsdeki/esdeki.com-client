import React from "react";
import { Animated } from "react-animated-css";
import ServiceCard from "./serviceCard/serviceCard";

const Service = () => {
  return (
    <div class="service" id="service">
      <div class="container">
        <Animated animationIn="zoomIn" isVisible={true}>
          <div class="section-header text-center wow">
            <p>What I do</p>
            <h2>Awesome Quality Services</h2>
          </div>
        </Animated>
        <div class="row">
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};

export default Service;
