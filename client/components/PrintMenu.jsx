/**
 * Created by jwent on 3/25/2017.
 */
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Gallery from './Gallery.jsx';
import Carousel from './Carousel.jsx';

class PrintMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      currentIndex: 0,
      view: 'gallery',
    };
    this.select = this.select.bind(this);
    this.changeIndex = this.changeIndex.bind(this);
    this.print = this.print.bind(this);
  }

  componentWillMount() {
    axios.get('/photos')
      .then((res) => {
        this.setState({ images: res.data });
      });
  }

  select(i) {
    this.setState({
      currentIndex: i,
      view: 'carousel',
    });
  }

  changeIndex(i) {
    const { currentIndex, images } = this.state;
    let newIndex = (currentIndex + i) % images.length;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    this.setState({ currentIndex: newIndex });
  }

  print(i) {
    const { images } = this.state;
    const print = window.open(`photos/${images[i]}`, '_blank');
    print.print();
    print.close();
  }

  render() {
    const { view, images, currentIndex } = this.state;
    return (
      <div className="print-container">
        <h1 className="header">Gallery</h1>
        <div className="view-select">
          <img
            src="assets/ic_view_module.svg"
            alt=""
            onClick={() => {
              this.setState({ view: 'gallery' });
            }}
          />
          <img
            src="assets/ic_view_carousel.svg"
            alt=""
            onClick={() => {
              this.setState({ view: 'carousel' });
            }}
          />
        </div>
        {(() => {
          if (view === 'gallery') {
            return (
              <Gallery
                images={images}
                select={this.select}
              />
            );
          }
          return (
            <Carousel
              images={images}
              currentIndex={currentIndex}
              changeIndex={this.changeIndex}
              print={this.print}
            />
          );
        })()}
        <Link
          to="/"
        >
          <div className="link-to">
            <p>Take a Photo</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default PrintMenu;
