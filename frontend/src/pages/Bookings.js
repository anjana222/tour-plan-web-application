/* eslint-disable eqeqeq */
/* eslint-disable default-case */
import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useParams } from "react-router-dom";
import "../styles/anjana/Bookings.css";

const PER_PAGE = 5;

function Bookings() {
  var { id } = useParams();
  var { type } = useParams();
  var topicType = "topic";
  const [array, setArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [flight, setFlight] = useState([]);
  const [destinationName, setDestinationName] = useState("");
  const [flightTicket, setFlightTicket] = useState([]);

  var col1 = null;
  var col2 = null;
  var col3 = null;
  var col4 = null;
  var col5 = null;
  var col6 = null;
  var col7 = null;
  var col8 = null;
  var col9 = null;
  var col10 = null;
  var col11 = null;
  var col12 = null;

  var col1hid = null;
  var col2hid = null;
  var col3hid = null;
  var col4hid = null;
  var col5hid = null;
  var col6hid = null;
  var col7hid = null;
  var col8hid = null;
  var col9hid = null;
  var col10hid = null;
  var col11hid = null;
  var col12hid = null;

  var cold1 = null;
  var cold2 = null;
  var cold3 = null;
  var cold4 = null;
  var cold5 = null;
  var cold6 = null;
  var cold7 = null;
  var cold8 = null;
  var cold9 = null;
  var cold10 = null;
  var cold11 = null;
  var cold12 = null;

  var cold1hid = null;
  var cold2hid = null;
  var cold3hid = null;
  var cold4hid = null;
  var cold5hid = null;
  var cold6hid = null;
  var cold7hid = null;
  var cold8hid = null;
  var cold9hid = null;
  var cold10hid = null;
  var cold11hid = null;
  var cold12hid = null;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = array
    .filter((data) => {
      if (data.userID == sessionStorage.getItem("ID")) {
        switch (type) {
          case "hotel":
            if (searchTerm == "") {
              return data;
            } else if (
              data.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return data;
            } else if (
              data.hotel_Name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return data;
            }
            break;
          case "destination":
            if (searchTerm == "") {
              return data;
            } else if (
              data.desName.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return data;
            } else if (
              data.firstName.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return data;
            } else if (
              data.lastName.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return data;
            }
            break;
          case "package":
            if (searchTerm == "") {
              return data;
            } else if (
              data.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return data;
            } else if (
              data.name1.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return data;
            }
            break;
          case "guide":
            if (searchTerm == "") {
              return data;
            } else if (
              data.guideName.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return data;
            } else if (
              data.location.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return data;
            }
            break;
        }
      }
    })
    .slice(offset, offset + PER_PAGE)
    .map((data) => {
      if (data.userID == sessionStorage.getItem("ID")) {
        SetData(data);
        return (
          <>
            <tr>
              <td className="setWidth concat" style={{ display: cold1hid }}>
                {cold1}
              </td>
              <td className="setWidth concat" style={{ display: cold2hid }}>
                {cold2}
              </td>
              <td className="setWidth concat" style={{ display: cold3hid }}>
                {cold3}
              </td>
              <td className="setWidth concat" style={{ display: cold4hid }}>
                {cold4}
              </td>
              <td className="setWidth concat" style={{ display: cold5hid }}>
                {cold5}
              </td>
              <td className="setWidth concat" style={{ display: cold6hid }}>
                {cold6}
              </td>
              <td className="setWidth concat" style={{ display: cold7hid }}>
                {cold7}
              </td>
              <td className="setWidth concat" style={{ display: cold8hid }}>
                {cold8}
              </td>
              <td className="setWidth concat" style={{ display: cold9hid }}>
                {cold9}
              </td>
              <td className="setWidth concat" style={{ display: cold10hid }}>
                {cold10}
              </td>
              <td className="setWidth concat" style={{ display: cold11hid }}>
                {cold11}
              </td>
              <td className="setWidth concat" style={{ display: cold12hid }}>
                {cold12}
              </td>
            </tr>
          </>
        );
      }
    });

  const pageCount = Math.ceil(array.length / PER_PAGE);

  function getArray() {
    setCurrentPage(0);
    switch (type) {
      case "hotel":
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/hotelRes`)
          .then((res) => {
            setArray(res.data);
            console.log(res.data)
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case "destination":
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/desTicket`)
          .then((res) => {
            setArray(res.data);
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case "guide":
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/booking`)
          .then((res) => {
            setArray(res.data);
            console.log("res.data");
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case "package":
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/packageReservation`)

          .then((res) => {
            setArray(res.data);
          })
          .catch((err) => {
            alert(err);
          });
        break;
    }
  }

  function deleteBooking(bid, ofid) {
    switch (type) {
      
      case "hotel":
        axios
          .delete(`${process.env.REACT_APP_BACKEND_URL}/hotelRes/cancel/${bid}`)
          .then((res) => {
            getArray();
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case "destination":
        axios
          .delete(`${process.env.REACT_APP_BACKEND_URL}/desTicket/delete/${bid}`)
          .then((res) => {
            getArray();
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case "guide":
        axios
          .delete(`${process.env.REACT_APP_BACKEND_URL}/booking/delete/${bid}`)
          .then((res) => {
            getArray();
          })
          .catch((err) => {
            alert(err);
          });
        break;
      case "package":
        axios
          .delete(`${process.env.REACT_APP_BACKEND_URL}/packageReservation/delete/${bid}`)
          .then((res) => {
            getArray();
          })
          .catch((err) => {
            alert(err);
          });
        break;
    }
  }

  function SetData(props) {
    switch (type) {
      case "hotel":
        cold1 = props.name;
        cold2 = props.hotel_Name;
        cold3 = props.check_in;
        cold4 = props.check_out;
        cold5 = props.suite;
        cold6hid = "none";
        cold7hid = "none";
        cold8 = props.customizations;
        cold9hid = "none";
        cold10hid = "none";
        cold11 = (
          <Link
            className="updatebttn"
            to={`/clientDashboard/${id}/hotelRes/${props._id}`}
          >
            <span className="material-symbols-outlined">edit</span>
          </Link>
        );
        cold12 = (
          <button
            className="deletebttn"
            onClick={() => deleteBooking(props._id)}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        );
        break;
      case "destination":
        cold1 = props.desName;
        cold2 = props.firstName + " " + props.lastName;
        cold3hid = "none";
        cold4 = props.phoneNo;
        cold5 = props.date;
        cold6 = props.time;
        cold7 = props.adults;
        cold8 = props.children;
        cold9 = props.total;
        cold10hid = "none";
        console.log(props._id);
        cold11 = (
          <Link
            className="updatebttn"
            to={`/clientDashboard/${id}/desRes/${props.desId}/${props._id}`}
          >
            <span className="material-symbols-outlined">edit</span>
          </Link>
        );
        cold12 = (
          <button
            className="deletebttn"
            onClick={() => {
              if (
                window.confirm(
                  "Do you really want to delete these record? This process cannot be undone."
                )
              )
                deleteBooking(props._id);
            }}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        );
        break;
      case "guide":
        cold1 = props.guideName;
        cold2 = props.date;
        cold3 = props.time;
        cold4 = props.location;
        cold6hid = "none";
        cold7hid = "none";
        cold8hid = "none";
        cold9hid = "none";
        cold10hid = "none";
        console.log(props._id);
        cold11 = (
          <Link
            className="updatebttn"
            to={`/clientDashboard/${id}/booking/${props._id}`}
          >
            <span className="material-symbols-outlined">edit</span>
          </Link>
        );
        cold12 = (
          <button
            className="deletebttn"
            onClick={() => {
              if (
                window.confirm(
                  "Do you really want to delete these record? This process cannot be undone."
                )
              )
                deleteBooking(props._id)
            }}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        );
        break;
      case "package":
        cold1 = props.name;
        cold2 = props.date;
        cold3 = props.email;
        cold4 = props.phoneNo;
        cold5 = props.name1;
        cold6hid = "none";
        cold7hid = "none";
        cold8hid = "none";
        cold9hid = "none";
        cold10hid = "none";
        cold11 = (
          <Link
            className="updatebttn"
            to={`/clientDashboard/${id}/PackageRes/${props._id}`}
          >
            <span className="material-symbols-outlined">edit</span>
          </Link>
        );
        cold12 = (
          <button
            className="deletebttn"
            onClick={() => {
              if (
                window.confirm(
                  "Do you really want to delete these record? This process cannot be undone."
                )
              )
                deleteBooking(props._id);
            }}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        );
        break;
      default:
        break;

    }
  }

  switch (type) {
    // case "flight":
    //   topicType = "Flight";
    //   col1 = "Name";
    //   col2 = "Flight Name";
    //   col3 = "Airline";
    //   col4 = "Passport ID";
    //   col5 = "Email";
    //   col6 = "Start";
    //   col7 = "Destination";
    //   col8 = "Departure Date & Time";
    //   col9 = "Class";
    //   col10 = "Price";
    //   col11 = "Update";
    //   col12 = "Delete";
    //   break;
    case "hotel":
      topicType = "Hotel";
      col1 = "Name";
      col2 = "Hotel Name";
      col3 = "Check In";
      col4 = "Check Out";
      col5 = "Suite";
      col6hid = "none";
      col7hid = "none";
      col8 = "Customizations";
      col9hid = "none";
      col10hid = "none";
      col11 = "Update";
      col12 = "Delete";
      break;
    case "destination":
      topicType = "Destination";
      col1 = "Destination";
      col2 = "Name";
      col3hid = "none";
      col4 = "Phone Number";
      col5 = "Date";
      col6 = "Time";
      col7 = "No of Adults";
      col8 = "No of Children";
      col9 = "Total Cost";
      col10hid = "none";
      col11 = "Update";
      col12 = "Delete";
      break;
    case "guide":
      topicType = "Guide";
      col1 = "Tour Guide Name";
      col2 = "Date";
      col3 = "Time";
      col4 = "Location";
      col5hid = "none";
      col6hid = "none";
      col7hid = "none";
      col8hid = "none";
      col9hid = "none";
      col10hid = "none";
      col11hid = "none";
      col12hid = "none";
      break;
    case "package":
      topicType = "Package";
      col1 = "Name";
      col2 = "Date";
      col3 = "E-mail";
      col4 = "phoneNo";
      col5 = "Package Name";
      col6hid = "none";
      col7hid = "none";
      col8hid = "none";
      col9hid = "none";
      col10hid = "none";
      col11 = "Update";
      col12 = "Delete";
      break;
  }

  useEffect(() => {
    getArray();
  }, [type]);

  return (
    <div className="BookingsMainCont" data-testid="bookings">
      <h1>{topicType} Bookings</h1>
      <div className="BookingsDashSearch">
        <input
          className="bookingsSearchbar"
          type="text"
          placeholder="Search here"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <div className="BookingsCont">
        <div className="BookingsDashOverviewInnerContC1">
          <div className="bookingsOverviewTableCont">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="col-sm-2"
                    style={{ display: col1hid }}
                  >
                    {col1}
                  </th>
                  <th
                    scope="col"
                    className="col-sm-2"
                    style={{ display: col2hid }}
                  >
                    {col2}
                  </th>
                  <th
                    scope="col"
                    className="col-sm-2"
                    style={{ display: col3hid }}
                  >
                    {col3}
                  </th>
                  <th
                    scope="col"
                    className="col-sm-2"
                    style={{ display: col4hid }}
                  >
                    {col4}
                  </th>
                  <th
                    scope="col"
                    className="col-sm-2"
                    style={{ display: col5hid }}
                  >
                    {col5}
                  </th>
                  <th
                    scope="col"
                    className="col-sm-2"
                    style={{ display: col6hid }}
                  >
                    {col6}
                  </th>
                  <th
                    scope="col"
                    className="col-sm-2"
                    style={{ display: col7hid }}
                  >
                    {col7}
                  </th>
                  <th
                    scope="col"
                    className="col-sm-2"
                    style={{ display: col8hid }}
                  >
                    {col8}
                  </th>
                  <th
                    scope="col"
                    className="col-sm-2"
                    style={{ display: col9hid }}
                  >
                    {col9}
                  </th>
                  <th
                    scope="col"
                    className="col-sm-2"
                    style={{ display: col10hid }}
                  >
                    {col10}
                  </th>
                  <th
                    scope="col"
                    className="col-sm-2"
                    style={{ display: col11hid }}
                  >
                    {col11}
                  </th>
                  <th
                    scope="col"
                    className="col-sm-2"
                    style={{ display: col12hid }}
                  >
                    {col12}
                  </th>
                </tr>
              </thead>
              <tbody>{currentPageData}</tbody>
            </table>
          </div>
          <div className="bookingsOverviewBottomCont">
            <ReactPaginate
              previousLabel={
                <span
                  style={{ fontSize: "16px" }}
                  className="material-symbols-outlined"
                >
                  navigate_before
                </span>
              }
              nextLabel={
                <span
                  style={{ fontSize: "16px" }}
                  className="material-symbols-outlined"
                >
                  navigate_next
                </span>
              }
              breakLabel={"..."}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookings;
