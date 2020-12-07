import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
      <Container className = "fill">
        <Row className="justify-content-center row-center">
          <Col md={8} className="text-center title">
            Hey, I am <span className="name">Rui Xian</span>
            <br></br>
            I am a Software Engineer
          </Col>
        </Row>
      </Container>
  );
}

export default App;
