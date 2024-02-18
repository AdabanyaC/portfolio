import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
  render() {
    return (
      <div className="carousel-slider">
        <Slider>
          <div className="carousel__container slide-1"></div>
          <div className="carousel__container slide-2"></div>
          <div className="carousel__container slide-3"></div>
          <div className="carousel__container slide-4"></div>
        </Slider>
      </div>
    );
  }
}
