import React, { Component } from 'react';
import {
  Row, Col, Card, CardImg,
} from 'reactstrap';
import Slider from 'react-slick';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Arrow = (props) => {
  const { className, onClick, direction } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      role="presentation"
    >
      <i className={`fas fa-angle-${direction} arrows`} />
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: <Arrow direction="right" />,
  prevArrow: <Arrow direction="left" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};
class TdModelsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { models } = this.props;
    const { sliderSettings } = this.state;
    return (
      <React.Fragment>
        {models && (
          <Slider {...settings}>
            {models.map(model => (
              <div key={model._id}>
                <img alt={model.name} src={model.thumb} className="img-responsive modelImg" title={model.name} />
              </div>
            ))}
          </Slider>
        )}
      </React.Fragment>
    );
  }
}

export default TdModelsList;
