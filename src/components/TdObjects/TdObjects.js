import React, { Component } from 'react';
import { Container, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import CategoriesList from './CategoriesList';
import './TdObjects.scss';

class TdObjects extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <CategoriesList />
        </Container>
      </React.Fragment>
    );
  }
}

export default (TdObjects);
