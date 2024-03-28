import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarDark from "../components/NavbarDark";
import "../styles/anjana/flight.css";

function Culture() {
    const [cultures, setCultures] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [culture, setCulture] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleCulture(props) {
        setCulture(props);
        handleShow();
    }

    const getCultures = () => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/culture`)
            .then((res) => {
                setCultures(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => {
        getCultures();

    }, []);

    return (
        <div className="flightMainContainer" data-testid="culture">
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{culture.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src={culture.image} />
                        <Card.Body>
                            <Card.Title>{culture.location}</Card.Title>
                            <Card.Title>{culture.month}</Card.Title>
                            <Card.Text>
                                {culture.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <NavbarDark />
            <div className="flightInnerContainer">
                <h1 className="flightHeader">Cultural Scenarios</h1>
                <div className="flightContainer">
                    <div className="flightSearch">
                        Name
                        <br />
                        <br />
                        <input
                            className="flightSearchInput"
                            type="text"
                            placeholder="Search by Name"
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                            }}
                        />
                        <hr />
                    </div>
                    <div className="flightBodyContainer">
                        {cultures
                            .filter((data) => {
                                if (
                                    data.name
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase())
                                ) {
                                    return data;
                                }

                            })
                            .map((data) => {
                                return (
                                    <Link onClick={() => handleCulture(data)}>
                                        <div className="flightCardContainer">
                                            <div className="flightImageContainer">
                                                <img
                                                    className="flightCardImg"
                                                    alt="pic"
                                                    src={data.image}
                                                />
                                            </div>
                                            <div className="flightTextContainer">
                                                <div className="row">
                                                    <div className="col-7">
                                                        <h4 className="taxititlesec">
                                                            {data.name}{" "}
                                                            <span
                                                                style={{
                                                                    fontWeight: "normal",
                                                                    fontSize: "14px",
                                                                }}
                                                            >
                                                                {data.month}
                                                            </span>
                                                        </h4>
                                                    </div>
                                                    <div className="col-12">{data.location}</div>
                                                    <br />
                                                    <br />
                                                </div>
                                                {/* <br /> */}
                                                <div className="row">
                                                    <div
                                                        className="col-6"
                                                        style={{ textAlign: "end" }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Culture;
