import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Category extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    this.categoryId = match.params.categoryId;
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Breadcrumb>
            <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem active>Category</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </React.Fragment>
    );
  }
}

export default Category;
