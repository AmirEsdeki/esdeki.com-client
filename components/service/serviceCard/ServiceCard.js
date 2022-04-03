import React from "react";
import { Animated } from "react-animated-css";

const ServiceCard = () => {
  return (
    <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
      <div className="col-lg-6">
        <div className="service-item">
          <div className="service-icon">
            <i className="fa fa-laptop"></i>
          </div>
          <div className="service-text">
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
