import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Contact() {
  return (
    <Container fluid className='bg-black' id="contact">
      <Row>
        <Col md={4} className='d-flex justify-content-center align-items-center'>
          <div className='text-white'>
            <h2 className='text-center'>Contact Us</h2>
            <p className='text-center'>We are always ready to help you</p>
            <p className='text-center'>+234 8099 456 333</p>
            <p className='text-center'></p>
          </div>
        </Col>
        <Col md={4}>

        </Col>
        <Col md={4}>
          <div className='text-white'>
            <h2 className='text-center'>Get In Touch</h2>
            <p className='text-center'>No 10, Jlory Street, Lagos</p>
            <p className='text-center'>Lagos, Nigeria</p>
          </div>
        </Col>
      </Row>
    </Container>);
}
