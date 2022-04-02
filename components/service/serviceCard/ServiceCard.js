import React from "react";
import { Animated } from "react-animated-css";

const ServiceCard = () => {
  return (
    <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
      <div class="col-lg-6">
        <div class="service-item">
          <div class="service-icon">
            <i class="fa fa-laptop"></i>
          </div>
          <div class="service-text">
            <h3>Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi
              facilis ornare velit non
            </p>
          </div>
        </div>
      </div>
    </Animated>
  );
};

export default ServiceCard;
