import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div>
        <Slider asNavFor={this.state.nav2} ref={(slider) => (this.slider1 = slider)}>
          <div className="carousel__container mt-4">
            <h3>1</h3>
          </div>
          <div className="carousel__container mt-4">
            <h3>2</h3>
          </div>
          <div className="carousel__container mt-4">
            <h3>3</h3>
          </div>
          <div className="carousel__container mt-4">
            <h3>4</h3>
          </div>
          <div className="carousel__container mt-4">
            <h3>5</h3>
          </div>
          <div className="carousel__container mt-4">
            <h3>6</h3>
          </div>
        </Slider>
        <h4 className="mt-5">Second Slider</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
