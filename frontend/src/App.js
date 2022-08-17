// import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from './components/Search';

function App() {
  return (
    <Container>
      <Row>
        <Col><h1>Check companies' stock prices</h1></Col>
      </Row>

      <Row>
        <Col><Search /></Col>
      </Row>
    </Container>
  );
}

export default App;
