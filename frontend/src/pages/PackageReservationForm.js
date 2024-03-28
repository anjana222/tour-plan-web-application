import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarDark from "../components/NavbarDark";

function PackageReservationForm() {
  const { id } = useParams();

  const [packages, setPackages] = useState({});
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setphoneNo] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // Get current date when the component mounts
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setCurrentDate(formattedDate);
  }, []);

  const getPackages = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/packages/${id}`)
      .then((res) => {
        setPackages(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getPackages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation using regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Phone number validation using regex
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNo)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const newBook = {
      packageReservationId: packages._id,
      packageName: packages.name,
      price: packages.price,
      name,
      date,
      email,
      phoneNo,
      userID: sessionStorage.getItem("ID"),
    };

    console.log(newBook);

    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/packageReservation/create`, newBook);
      alert("Package Booked Successfully");
    } catch (error) {
      alert("Error");
      console.log(error);
    }
  };

  return (
    <div id="rentalform" className="rentalContainer" data-testid="packagereservationform">
      <NavbarDark />
      <h1>Package Reservation</h1>
      <h1>Booking Details</h1>

      <div className="rentaleinnercontainer">
        <div className="rentalformcont">
          <form className="rentalform" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" className="form-control" placeholder="Enter Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <br />
            <div className="form-group">
              <label>Reserve Date</label>
              <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} min={currentDate} required />
            </div>
            <br />
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
            </div>
            <br />
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" className="form-control" placeholder="Enter Phone Number (ex - 071 XXXX XXXX)" value={phoneNo} onChange={(e) => setphoneNo(e.target.value)} required />
            </div>
            <br />
            <br />
            <button type="submit" className="submitbtn">Submit</button>
          </form>
        </div>
        <div className="rentcont">
          <div className="rent">
            <h6>Package Name - <b>{packages.name}</b></h6>
            <p>Name: {name}</p>
            <p>Reserve Date: {date}</p>
            <p>Email: {email}</p>
            <p>Contact Number: {phoneNo}</p>
            <h3><b>Package Price: Rs. {packages.price}.00</b><br /></h3>
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

export default PackageReservationForm;
