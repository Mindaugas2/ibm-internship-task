import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchField from './components/SearchField';
import CompanyResults from './components/CompanyResults';

function App() {
  const [symbol, setSymbol] = useState();
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();

  return (
    <Container>
      <Row>
        <Col>
          <h1>Check companies' stock prices</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <SearchField
            setSymbol={setSymbol}
            setDateFrom={setDateFrom}
            setDateTo={setDateTo}
          />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <CompanyResults
            symbol={symbol}
            dateFrom={dateFrom}
            dateTo={dateTo}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
