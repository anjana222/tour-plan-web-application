import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Navbarx from "react-bootstrap/Navbar";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase";

import "../styles/anjana/Home.css";
import "../styles/anjana/Navbar.css";



function Navbar() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  function view() {
    if (sessionStorage.getItem("ID") === null) {
      return (
        <Button className="whitebtn" onClick={handleShow}>
          Login
        </Button>
      );
    } else {
      return (
        <Link to={`/clientDashboard/${sessionStorage.getItem("ID")}`}>
          <Button className="whitebtn">Profile</Button>
        </Link>
      );
    }
  }

  // sign in with email and password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // sign in with google
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  // loggin in user in backend
  useEffect(() => {
    if (user) {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/client/login`, {
          email,
          password: password,
        })
        .then((client) => {
          sessionStorage.setItem("ID", client.data._id);
          return navigate(`/ClientDashboard/${client.data._id}`);
        })
        .catch((err) => {
          alert("Login unsuccessful");
          signOut(auth);
          console.log(err);
        });
    }
  }, [user]);

  // loggin in google user in backend
  useEffect(() => {
    if (gUser) {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/client/login`, {
          email: gUser.user?.email,
          password: "No Password",
        })
        .then((client) => {
          return navigate(`/ClientDashboard/${client.data._id}`);
        })
        .catch((err) => {
          alert("Login unsuccessful");
          signOut(auth);
          console.log(err);
        });
    }
  }, [gUser]);

  useEffect(() => {
    if (error || gError) alert("Login unsuccessful");
  }, [error, gError]);

  return (
    <Navbarx className="NavbarCont" expand="lg" data-testid="navbar">
      <Container>
      <Navbarx.Brand>
  <img
    src={"https://i.ibb.co/rv3cmhq/Logo.png"}
    alt="heroimg"
    style={{ width: "100px" }} // Adjust the width as needed
  />
</Navbarx.Brand>
        <Navbarx.Toggle aria-controls="basic-navbar-nav" />
        <Navbarx.Collapse id="basic-navbar-nav" className="NavbarList">
          
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Cultures" className="navlink">
              Culture
            </Nav.Link>
            <Nav.Link as={Link} to="/hotels" className="navlink">
              Hotels
            </Nav.Link>
            <Nav.Link as={Link} to="/tourGuides" className="navlink">
              Guides
            </Nav.Link>
            <Nav.Link as={Link} to="/packages" className="navlink">
              Packages
            </Nav.Link>
            <Nav.Link as={Link} to="/attractions" className="navlink">
              Attractions
            </Nav.Link>
            <Nav.Link as={Link} to="/packages" className="navlink">
              Memory Map
            </Nav.Link>
            <a className="no-underline" href="http://localhost:2000/">
              Weather
            </a>
          </Nav>
          {view()}

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>User Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                onSubmit={async (e) => {
                  e.preventDefault();

                  signInWithEmailAndPassword(email, password);
                }}
              >
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    autoFocus
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                </Form.Group>
                <div className="btnContainerlosgin">
                  {loading ? (
                    <Button type="submit" className="blackbtn">
                      Loading ...
                    </Button>
                  ) : (
                    <Button type="submit" className="blackbtn">
                      Login as a User
                    </Button>
                  )}
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <div style={{}}>
                <h4>Other Logins</h4>
                <Link to={"/login"}>
                  <button className="blackbtn">Login as an Accountant</button>
                </Link>
                <Link to={"/editorDashboard"}>
                  <button className="blackbtn">Login as an Editor</button>
                </Link>
              </div>
            </Modal.Footer>
          </Modal>
        </Navbarx.Collapse>
      </Container>
    </Navbarx>
  );
}

export default Navbar;
