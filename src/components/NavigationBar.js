import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Ensure we import the main CSS file for custom classes

const NavigationBar = () => {
  return (
    <Navbar className="book-navbar">
      <Container>
        <Navbar.Brand href="/" className="book-navbar-brand">
          My Book App
        </Navbar.Brand> {/* Branding name for the app */}
        <Nav className="me-auto"> {/* Align Nav links to the right */}
          <Nav.Link href="/" className="book-nav-link">Home</Nav.Link>
          <Nav.Link href="/create" className="book-nav-link">Add Book</Nav.Link>
          <Nav.Link href="/read" className="book-nav-link">View Books</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
