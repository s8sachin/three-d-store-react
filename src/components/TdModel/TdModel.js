import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class TdModel extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    this.category = match.params.category;
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Breadcrumb>
            <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem><Link to={`/category/${this.category}`}>Home</Link></BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem active>TdModel</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </React.Fragment>
    );
  }
}

export default TdModel;
