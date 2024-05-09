import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-dark w-full"
      style={{ position: "absolute", top: "0px", width: "100%" }}

    >
      <Container>
        <Navbar.Brand href="#home">Student Library System</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Books</Nav.Link>
            <Nav.Link href="#pricing">Journals</Nav.Link>
            <Nav.Link href="#pricing">Magazines</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              My Account
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
