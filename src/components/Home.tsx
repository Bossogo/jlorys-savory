import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export function Home() {
  return (
  <Container fluid className="bg-image p-0" id="home">
    <Container className="h-100">
      <Row className="h-100">
        <Col md={6}>
          <div className='position-relative h-100'>
            <div className="desc w-100 p-3 pt-4 px-sm-4">
              <h5 className='ms-1'>Jlory Savory</h5>
              <h1 className='mb-3'>Your Plans, Our Passion</h1>
              <p>Top tier event management as well as cuisine for any almost type of event</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </Container>);
}
