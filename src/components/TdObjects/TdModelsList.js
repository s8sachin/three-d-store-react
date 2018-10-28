import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Slider from 'react-slick';

const LeftNavButton = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
      role="presentation"
    >
      <i className="fas fa-angle-left" />
    </div>
  );
};

const RightNavButton = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      role="presentation"
    >
      <i className="fas fa-angle-right" />
    </div>
  );
};

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  nextArrow: <RightNavButton />,
  prevArrow: <LeftNavButton />,
};

class TdModelsList extends Component {
  render() {
    const { models } = this.props;
    return (
      <React.Fragment>
        <Slider {...sliderSettings}>
          {models && models.map(model => (
            <React.Fragment key={model._id}>
              <div>
                <img alt={model.name} src={model.thumb} style={{ maxWidth: 300, maxHeight: 300 }} className="img-responsive" title={model.name} />
              </div>
            </React.Fragment>
          ))}
        </Slider>
      </React.Fragment>
    );
  }
}

export default TdModelsList;
