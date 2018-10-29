import React, { Component } from 'react';
import {
  Row, Col, Card, CardImg, Popover, PopoverHeader, PopoverBody,
} from 'reactstrap';
import Slider from 'react-slick';

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

  mouseOver(id) {
    this.setState({ selectedImg: id });
  }

  mouseOut() {
    this.setState({ selectedImg: false });
  }

  render() {
    const { models } = this.props;
    const { sliderSettings, selectedImg } = this.state;
    return (
      <React.Fragment>
        {models && (
          <Slider {...settings}>
            {models.map(model => (
              <div key={model._id} className="model-holder cursor-pointer" onMouseOver={() => this.mouseOver(model._id)} onMouseOut={() => this.mouseOut(model._id)}>
                <div className="model-h">
                  <img id={`img-${model._id}`} alt={model.name} src={model.thumb} className="img-responsive modelImg ml-auto mr-auto" title={model.name} />
                  <span className="name">{model.name}</span>
                </div>
              </div>
            ))}
            {/* {selectedImg && (
              <Popover placement="bottom" isOpen target={selectedImg}>
                {console.log(selectedImg)}
                <PopoverHeader>Popover Title</PopoverHeader>
                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
              </Popover>
            )} */}
          </Slider>
        )}
      </React.Fragment>
    );
  }
}

export default TdModelsList;
