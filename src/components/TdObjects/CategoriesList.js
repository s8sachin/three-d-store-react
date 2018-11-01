import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import WayPoint from 'react-waypoint';
import { connect } from 'react-redux';
import TdModelsList from './TdModelsList';
import { getTdObjectsAction } from '../../actions';

class CategoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = { skip: 0, limit: 2 };
  }

  componentDidMount() {
    const { skip, limit } = this.state;
    this.getTdObjects(skip, limit);
  }

  getTdObjects(skip, limit) {
    this.props.getTdObjectsAction(skip, limit);
  }

  loadMoreItems() {
    let { skip, limit } = this.state;
    skip += limit;
    this.getTdObjects(skip, limit);
    this.setState({ skip, limit });
  }

  renderWaypoint() {
    return (
      <WayPoint
        onEnter={() => this.loadMoreItems()}
        threshold={3.0}
        topOffset="30%"
        // bottomOffset="-200px"
      >
        {/* <center><span>Loading ...</span></center> */}
      </WayPoint>
    );
  }

  render() {
    const { tdObjects } = this.props;
    return (
      <React.Fragment>
        {tdObjects.categories && tdObjects.categories.map(category => (
          <React.Fragment key={category._id}>
            <div className="category-row">
              <span className="category-name">{category.name}</span>
              <TdModelsList models={category.models} /><br />
            </div>
          </React.Fragment>
        ))}
        {this.renderWaypoint()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ tdObjReducer }) => {
  const { tdObjects } = tdObjReducer;
  return { tdObjects };
};

export default connect(mapStateToProps, { getTdObjectsAction })(CategoriesList);
