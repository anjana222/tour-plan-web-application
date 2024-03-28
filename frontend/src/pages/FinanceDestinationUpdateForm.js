import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/anjana/DestinationUpdateForm.css";

function FinanceDestinationUpdateForm() {
  const [name, setName] = useState("");
  const [childTicketBuyingRate, setChildTicketBuyingRate] = useState("");
  const [adultTicketBuyingRate, setAdultTicketBuyingRate] = useState("");
  const [childTicketSellingRate, setChildTicketSellingRate] = useState("");
  const [adultTicketSellingRate, setAdultTicketSellingRate] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const getDestination = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/destination/` + id)
      .then((res) => {
        setName(res.data.name);
        setChildTicketBuyingRate(res.data.childTicketBuyingRate);
        setAdultTicketBuyingRate(res.data.adultTicketBuyingRate);
        setChildTicketSellingRate(res.data.childTicketSellingRate);
        setAdultTicketSellingRate(res.data.adultTicketSellingRate);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getDestination();
  }, []);

  return (
    <div className="DestinationUpdateFormMainCont" data-testid="financedestinationupdateform">
      <h1>Update Travel Destination</h1>
      <div className="DestinationUpdateFormCont">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const newDestination = {
              childTicketBuyingRate,
              childTicketSellingRate,
              adultTicketBuyingRate,
              adultTicketSellingRate,
            };
            await axios
              .put(
                `${process.env.REACT_APP_BACKEND_URL}/destination/update/` + id,
                newDestination
              )
              .then(() => {
                alert("Destination Updated");
                navigate("/financeDashboard/pending/destination");
              })
              .catch((err) => {
                alert(err);
              });
          }}
        >

          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              readOnly
            />
          </div>
          <div className="form-group">
            <label className="form-label">Child Ticket Buying Rate</label>
            <input
              type="text"
              className="form-control"
              value={childTicketBuyingRate}
              onChange={(e) => {
                setChildTicketBuyingRate(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Child Ticket Selling Rate</label>
            <input
              type="text"
              className="form-control"
              value={childTicketSellingRate}
              onChange={(e) => {
                setChildTicketSellingRate(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Adult Ticket Buying Rate</label>
            <input
              type="text"
              className="form-control"
              value={adultTicketBuyingRate}
              onChange={(e) => {
                setAdultTicketBuyingRate(e.target.value);
              }}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Adult Ticket Selling Rate</label>
            <input
              type="text"
              className="form-control"
              value={adultTicketSellingRate}
              onChange={(e) => {
                setAdultTicketSellingRate(e.target.value);
              }}
              required
            />
          </div>
          <br />
          <button type="submit" className="submitbtn">
            Update Details
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default FinanceDestinationUpdateForm;
