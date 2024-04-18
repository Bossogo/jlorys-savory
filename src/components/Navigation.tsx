import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

type Props = {navBar: React.RefObject<HTMLElement> | undefined}

export function Navigation({navBar}: Props) {
  return (
    <Navbar collapseOnSelect data-bs-theme="dark" expand="md" ref={navBar} className='ps-lg-5 pe-lg-5 stay-top'>
      <Container fluid>
        <Navbar.Brand href="#home">
        <p>
          <span className="display-5">
            <span className="display-3">J</span>lory
          </span>
          <br />
          <span className="sub-text fs-200"> Savory</span>
        </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="start"
          data-bs-theme="dark"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`} className=''>
            <p>
              <span className="display-5">
                <span className="display-3">J</span>lory
              </span>
              <br />
              <span className="sub-text fs-200"> Savory</span>
            </p>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Navbar.Collapse id="navbar">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About Us</Nav.Link>
                <Nav.Link href="#service">Our Services</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

/* export function Navigation(props: { navBar: React.RefObject<HTMLElement> | undefined; }) {
  return (<nav className="navbar navbar-expand-md ps-lg-5 pe-lg-5 navbar-dark stay-top" ref={props.navBar}>
    <div className="container-fluid">
      <a className="navbar-brand" href="./">
        <p>
          <span className="display-5">
            <span className="display-3">J</span>lory
          </span>
          <br />
          <span className="sub-text fs-200"> Savory</span>
        </p>
      </a>

      <button className="navbar-toggler collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className=" navbar-collapse justify-content-end collapse" id="navbarCollapse">
        <ul className="navbar-nav align-items-center me-lg-4 me-md-2">
          <li className="nav-item">
            <a className="nav-link" href="#section1">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#section2">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#section3">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>);
} */
