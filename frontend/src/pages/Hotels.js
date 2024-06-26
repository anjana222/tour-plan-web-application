import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarDark from "../components/NavbarDark";
import "../styles/hashani/Hotel.css";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // created to catch and set the searching options
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);

  const handleOnChange5 = () => {
    setIsChecked5(!isChecked5);
  };

  const handleOnChange4 = () => {
    setIsChecked4(!isChecked4);
  };

  const handleOnChange3 = () => {
    setIsChecked3(!isChecked3);
  };

  const handleOnChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  const handleOnChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const { id } = useParams();

  const getHotels = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/hotels`)
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getHotels();
  }, []); //Shows changes of the page

  return (
    <div className="hotelMainContainer" data-testid="hotels">
      <NavbarDark />
      <div className="hotelInnerContainer">
        <h1 className="hotelHeader">Hotels</h1>
        <div className="hotelContainer">
          <div className="hotelSearch">
            <br />
            <input
              className="hotelSearchInput"
              type="text"
              placeholder="Search Hotel"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <hr />
            
            <br />
            <br />

            {/* Rating */} 

          </div>
          <div className="hotelBodyContainer">
            {hotels
              .filter((data) => {
                if (data.sellingPrice != null) {
                  if (searchTerm == "") {
                    if (isChecked5) {
                      if (data.stars == 5) {
                        return data;
                      }
                    } else if (isChecked4) {
                      if (data.stars == 4) {
                        return data;
                      }
                    } else if (isChecked3) {
                      if (data.stars == 3) {
                        return data;
                      }
                    } else if (isChecked2) {
                      if (data.stars == 2) {
                        return data;
                      }
                    } else if (isChecked1) {
                      if (data.stars == 1) {
                        return data;
                      }
                    } else {
                      return data;
                    }
                  } else if (
                    data.location
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    if (isChecked5) {
                      if (data.stars == 5) {
                        return data;
                      }
                    } else if (isChecked4) {
                      if (data.stars == 4) {
                        return data;
                      }
                    } else if (isChecked3) {
                      if (data.stars == 3) {
                        return data;
                      }
                    } else if (isChecked2) {
                      if (data.stars == 2) {
                        return data;
                      }
                    } else if (isChecked1) {
                      if (data.stars == 1) {
                        return data;
                      }
                    } else {
                      return data;
                    }
                  }
                }
              })
              .map((data) => {
                return (
                  <Link to={"/hotelPreview/" + data._id}>
                    <div className="hotelCardContainer">
                      <div className="hotelImageContainer">
                        <img
                          className="hotelCardImg"
                          alt="pic"
                          src={data.images}
                        />
                      </div>
                      <div className="hotelTextContainer">
                        <div className="row">
                          <div className="col-6">
                            <h4 className="taxititlesec">
                              {data.name}{" "}
                              <span
                                style={{
                                  fontWeight: "normal",
                                  fontSize: "12px",
                                }}
                              >
                                {data.location}
                              </span>
                            </h4>
                          </div>
                          <div className="col-6" style={{ textAlign: "end" }}>
                            {Array(data.stars).fill(
                              <span
                                className="material-symbols-outlined"
                                style={{ color: "#FFC107", textAlign: "end" }}
                              >
                                star
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div
                            style={{
                              fontSize: "13px",
                              height: "62px",
                              width: "70%",
                              overflow: "hidden",
                            }}
                            className="col-12 "
                          >
                            {data.description}
                          </div>
                          <div className="col-12" style={{ textAlign: "end" }}>
                            Price per night:
                            <br />
                          </div>
                          <div className="col-6" />

                          <div className="col-6" style={{ textAlign: "end" }}>
                            <h4>
                              <b>Rs {data.sellingPrice}.00</b>
                            </h4>
                          </div>
                        </div>
                        {/* <p className="hotelpriceTage">
                          Price:Rs. {data.sellingPrice}
                          <br />
                        </p>
                        <p className="hoteldesTage">
                          {data.description}
                          <br />
                        </p>
                        <p className="hotelstarTage">
                          Stars: {data.stars}
                          <br />
                        </p> */}
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

export default Hotels;
