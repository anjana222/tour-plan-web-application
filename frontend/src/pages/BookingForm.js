/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarDark from "../components/NavbarDark";
import "../styles/hashani/Rental.css";

function BookingForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  const [guide, setGuide] = useState("");



  const { id } = useParams();

  const getGuide = async () => {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/guides/` + id)
      .then((res) => {
        setGuide(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getGuide();
  }, [id]);
  const navigate = useNavigate();


  return (
    <div id="rentalform" className="rentalContainer" data-testid="rentalform">
      <NavbarDark />

      <h1>Booking Details</h1>
      <div className="rentaleinnercontainer">
        <div className="rentalformcont">
          <form
            className="rentalform"
            onSubmit={async (e) => {
              e.preventDefault();

              const newBooking = {
                guideID: guide._id,
                userID: sessionStorage.getItem("ID"),
                guideName: guide.name,
                firstName,
                lastName,
                email,
                phoneNo,
                date,
                time,
                location
              };
              console.log(newBooking);

              axios
                .post(`${process.env.REACT_APP_BACKEND_URL}/booking/create`, newBooking)
                .then(() => {
                  alert("Guide Booked successfully");
                  navigate("/tourGuides");
                })
                .catch((err) => {
                  alert("Error making the booking");
                  console.log(err);
                });
            }}
          >
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                pattern="[a-z,A-Z]{3,}"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                pattern="[a-z,A-Z]{3,}"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                pattern="[a-z0-9]+@+[a-z]+.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                pattern="[0-9]{10}"
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Time</label>
              <input
                type="time"
                className="form-control"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                required
              />
            </div>

            {/* <div className="form-group">
              <label className="form-label">Starting Destination</label>
              <input type="text" className="form-control" onChange={(e) => {setStartDes(e.target.value)}} required/>
            </div> */}

            

            
            <br />

            <button type="submit" className="submitbtn">
              Book Tour Guide
            </button>
          </form>
        </div>
        <div className="rentcont">
          <div className="rent">
            <p>
              Name : {firstName} {lastName}{" "}
            </p>
            <p>Email :{email}</p>
            <p>Phone Number :{phoneNo}</p>
            <p>Date :{date}</p>
            <p>Time :{time}</p>
            <p>Location :{location}</p>
            
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default BookingForm;
