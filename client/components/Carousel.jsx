/**
 * Created by jwent on 3/25/2017.
 */
import React from 'react';

const Carousel = ({ changeIndex, images, currentIndex, print }) => (
  <div className="carousel-container">
    <div className="main-photo-container">
      <img
        className="main-photo"
        src={`photos/${images[currentIndex]}`}
        alt=""
      />
    </div>
    <div className="carousel-nav">
      <img
        className="btn arrow-left"
        src="assets/ic_arrow_left.svg"
        alt=""
        onClick={() => {
          changeIndex(-1);
        }}
      />
      <img
        className="btn print"
        src="assets/ic_print.svg"
        alt=""
        onClick={() => {
          print(currentIndex);
        }}
      />
      <img
        className="btn arrow-right"
        src="assets/ic_arrow_right.svg"
        alt=""
        onClick={() => {
          changeIndex(1);
        }}
      />
    </div>
  </div>
);

export default Carousel;
