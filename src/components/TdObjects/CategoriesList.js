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
            <Row>
              {category.name}
              <Container>
                {/* <Row className="modelsListRow"> */}
                {/* <Row className="flex-nowrap overflow-x-auto modelsListRow"> */}
                <TdModelsList models={category.models} />
                {/* </Row> */}
              </Container><br />
            </Row>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}

export default CategoriesList;
