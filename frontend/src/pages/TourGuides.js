import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarDark from "../components/NavbarDark";
import "../styles/hashani/Taxis.css";

function TourGuides() {
  const [guides, setGuides] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  

  const { id } = useParams();

  const getGuides = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/guides`)
      .then((res) => {
        setGuides(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getGuides();
  }, []); //Shows changes of the page

  return (
    <div className="taxiMainContainer" data-testid="guides">
      <NavbarDark />
      <div className="taxiInnerContainer">
        <h1 className="taxiHeader">Guides</h1>
        <div className="taxiContainer">
          
          <div className="taxiBodyContainer">
            {guides
              .map((data) => {
                return (
                  <Link to={"/BookingPreview/" + data._id}>
                    <div className="taxiCardContainer">
                      <div className="taxiImageContainer">
                        <img
                          className="taxiCardImg"
                          alt="pic"
                          src={data.image}
                        />
                      </div>
                      <div className="taxiTextContainer">
                        <h4 className="taxititlesec">
                          {data.name}{" "}
                          <span
                            style={{ fontWeight: "normal", fontSize: "12px" }}
                          >
                          </span>
                        </h4>
                        
                          <div className="col-6">
                           <span><b>Bio: </b>{data.bio}  </span>
                          </div>
                          <div className="col-6">
                          
                          <span><b>Availability: </b>{data.availability}  </span>
                          </div>

                          <div className="col-6">
                          
                          <span><b>Area: </b>{data.area}  </span>
                          </div>
                        
                        <p className="taxipriceTage">
                          <span>Fee per day:</span>{" "}
                          <h4>
                            <b>Rs {data.fee}.00</b>
                          </h4>
                        </p>
                        <br />
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

export default TourGuides;
