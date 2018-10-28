import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { getTdObjectsAction } from '../../actions';
import CategoriesList from './CategoriesList';
import './TdObjects.scss';

class TdObjects extends Component {
  componentDidMount() {
    this.props.getTdObjectsAction();
  }

  render() {
    const { tdObjects } = this.props;
    return (
      <Container>
        {tdObjects && <CategoriesList categories={tdObjects.categories} />}
      </Container>
    );
  }
}

const mapStateToProps = ({ tdObjReducer }) => {
  const { tdObjects } = tdObjReducer;
  return { tdObjects };
};

export default connect(mapStateToProps, { getTdObjectsAction })(TdObjects);
