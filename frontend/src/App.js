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
      <header>
        <Row>
          <Col sm={4}>
            <h1>Check companies' stock prices</h1>
          </Col>
        </Row>

        <Row>
          <Col sm={4}>
            <SearchField
              setSymbol={setSymbol}
              setDateFrom={setDateFrom}
              setDateTo={setDateTo}
            />
          </Col>
        </Row>
      </header>

      <main>
        <Row className="mt-4">
          <Col>
            <CompanyResults
              symbol={symbol}
              dateFrom={dateFrom}
              dateTo={dateTo}
            />
          </Col>
        </Row>
      </main>
    </Container>
  );
}

export default App;
