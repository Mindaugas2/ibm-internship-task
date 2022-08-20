import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchField from './components/SearchField';
import CompanyResult from './components/CompanyResult';

function App() {
  const [symbol, setSymbol] = useState();

  return (
    <Container>
      <Row>
        <Col>
          <h1>Check companies' stock prices</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <SearchField setSymbol={setSymbol} />
        </Col>
      </Row>

      <Row>
        <Col>
          <CompanyResult symbol={symbol} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
