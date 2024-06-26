import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/anjana/DesResUpdateForm.css";

function BookingUpdateForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [startDes, setStartDes] = useState("");
  const [endDes, setEndDes] = useState("");

  const { id } = useParams();
  const { bookingId } = useParams();
  const navigate = useNavigate();

  const [destination, setDestination] = useState([]);
  const [hotel, setHotel] = useState([]);

  const handleOnChangeSD = (e) => {
    setStartDes(e.target.value);
  };

  const handleOnChangeED = (e) => {
    setEndDes(e.target.value);
  };

  const getBooking = () => {
    console.log(bookingId);
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/booking/` + bookingId)
      .then((res) => {
        console.log(res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
        setPhoneNo(res.data.phoneNo);
        setTime(res.data.time);
        setStartDes(res.data.startDes);
        setEndDes(res.data.endDes);

        // setDestination(res.data.desName);
        const date = new Date(res.data.date);
        setDate(date.toISOString().split('T')[0]);
      })
      .catch((err) => {
        alert(err);
      });
  };

  // const getVehicle = () => {
  //     axios.get("http://localhost:8070/vehicles/" + vehicleId)
  //         .then((res) => {
  //             setChildTicketSellingRate(res.data.childTicketSellingRate);
  //             setAdultTicketSellingRate(res.data.adultTicketSellingRate);
  //         })
  //         .catch((err) => {
  //             alert(err);
  //         })};

  useEffect(() => {
    getBooking();
  }, []);
  // useEffect(() => { getDestination() }, []);

  const getDestination = async () => {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/destination/`)
      .then((res) => {
        setDestination(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getDestination();
  });

  const getHotel = async () => {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/hotels/`)
      .then((res) => {
        setHotel(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getHotel();
  });

  return (
    <div className="DesResUpdateFormMainCont" data-testid="bookingupdateform">
      <h1>Update Booking Details</h1>
      <div className="DesResUpdateFormCont">
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const newBooking = {
              firstName,
              lastName,
              email,
              phoneNo,
              date,
              time,
              startDes,
              endDes,
            };

            axios
              .put(`${process.env.REACT_APP_BACKEND_URL}/booking/update/${bookingId}`, newBooking)
              .then(() => {
                alert("Booking updated successfully");
                navigate(`/clientDashboard/${id}/bookings/guide`);
              })
              .catch((err) => {
                alert("Error adding booking");
                console.log(err);
              });
          }}
        >
          {/* <div className="form-group">
                        <label className="form-label">Destination</label>
                        <input type="text" className="form-control" value={destination} readOnly />
                    </div> */}
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              value={firstName}
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
              value={lastName}
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
              type="text"
              className="form-control"
              value={email}
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
              value={phoneNo}
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
              defaultValue={date}
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
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Starting Destination</label>
            <select
              className="form-control"
              value={startDes}
              onChange={handleOnChangeSD}
              required
            >
              <option
                value="Select the starting Destination"
                selected
                disabled="true"
              >
                Select the starting Destination
              </option>
              <option value="destinations" selected disabled="true">
                --------- Attractions ---------
              </option>
              {destination.map((result) => (
                <option value={destination.name}>{result.name}</option>
              ))}
              <option value="hotels" selected disabled="true">
                --------- Hotels ---------
              </option>
              {hotel.map((a) => (
                <option value={hotel.name}>{a.name}</option>
              ))}
              <option value="airports" selected disabled="true">
                --------- Airports ---------
              </option>
              <option value="Katunayaka Airpor">Katunayaka Airport</option>
              <option value="Maththala Airport">Maththala Airport</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Ending Destination</label>
            <select
              className="form-control"
              value={endDes}
              onChange={handleOnChangeED}
              required
            >
              <option value="Select the Arrival" selected disabled="true">
                Select the Arrival Destination
              </option>
              <option value="destinations" selected disabled="true">
                --------- Attractions ---------
              </option>
              {destination.map((result) => (
                <option value={destination.name}>{result.name}</option>
              ))}
              <option value="hotels" selected disabled="true">
                --------- Hotels ---------
              </option>
              {hotel.map((a) => (
                <option value={hotel.name}>{a.name}</option>
              ))}
              <option value="airports" selected disabled="true">
                --------- Airports ---------
              </option>
              <option value="Katunayaka Airpor">Katunayaka Airport</option>
              <option value="Maththala Airport">Maththala Airport</option>
            </select>
          </div>
          <br />
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
      <br />
    </div>
  );
}

export default BookingUpdateForm;
