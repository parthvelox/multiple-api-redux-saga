import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AddSearch from '../containers/AddSearch';
import SearchListContainer from '../containers/SearchListContainer';

class SecondApiPage extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>Search Image</h1>
            <AddSearch />
            <SearchListContainer />
          </Col>
        </Row>
      </Container>
    );
  }
} 

export default SecondApiPage;