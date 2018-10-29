import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import TdModelsList from './TdModelsList';

class CategoriesList extends Component {
  render() {
    const { categories } = this.props;
    return (
      <React.Fragment>
        {categories && categories.map(category => (
          <React.Fragment key={category._id}>
            {category.name}
            <TdModelsList models={category.models} /><br />
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}

export default CategoriesList;
