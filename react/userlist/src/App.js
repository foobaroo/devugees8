import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Users from './components/Users';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <Users />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
