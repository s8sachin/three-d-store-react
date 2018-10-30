import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { getTdObjectsAction } from '../../actions';
import CategoriesList from './CategoriesList';
import './TdObjects.scss';
import TCanvas from '../TCanvas/TCanvas';

class TdObjects extends Component {
  componentDidMount() {
    this.props.getTdObjectsAction();
  }

  render() {
    const { tdObjects } = this.props;
    return (
      <React.Fragment>
        {/* <div>
          <Breadcrumb>
            <BreadcrumbItem active>Home</BreadcrumbItem>
          </Breadcrumb>
        </div> */}
        {/* <TCanvas /> */}
        <Container>
          {tdObjects && <CategoriesList categories={tdObjects.categories} />}
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ tdObjReducer }) => {
  const { tdObjects } = tdObjReducer;
  return { tdObjects };
};

export default connect(mapStateToProps, { getTdObjectsAction })(TdObjects);
