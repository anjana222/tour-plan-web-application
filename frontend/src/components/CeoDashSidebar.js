import "../styles/anjana/CeoDashSidebar.css";
import { Link } from "react-router-dom";

function CeoDashSidebar() {
  return (
    <div className="CeoDashSidebarMainCont" data-testid="ceodashsidebar">
      <div className="CeoDSLogoCont">
        <center>
          <img
            src={
              "https://clipground.com/images/logo-tour-and-travel-clipart.jpg"
            }
            alt="logo"
          />
        </center>
      </div>
      {/* <hr className='Ceohrline' /> */}
      <Link className="CeoSTabContS" to={`/ceoDashboard/ceoRevenue`}>
        <span className="material-symbols-outlined">dashboard</span>
        <p>Dashboard</p>
      </Link>
      <p className="CeoSTabContL">
        <span className="material-symbols-outlined">analytics</span>
        <p>Overview</p>
      </p>
      <p className="CeoSTabContSub">
        {/* <Link className="CeoSTabContS" to={`/ceoDashboard/ceoOverview/flight`}>
          <span className="material-symbols-outlined">flight</span>
          <p>Flights</p>
        </Link> */}
        <Link className="CeoSTabContS" to={`/ceoDashboard/ceoOverview/hotel`}>
          <span className="material-symbols-outlined">hotel</span>
          <p>Hotels</p>
        </Link>
        <Link
          className="CeoSTabContS"
          to={`/ceoDashboard/ceoOverview/destination`}
        >
          <span className="material-symbols-outlined">pin_drop</span>
          <p>Destinations</p>
        </Link>
        <Link className="CeoSTabContS" to={`/ceoDashboard/ceoOverview/guide`}>
          <span className="material-symbols-outlined">person</span>
          <p>Taxis</p>
        </Link>
        <Link className="CeoSTabContS" to={`/ceoDashboard/ceoOverview/package`}>
          <span className="material-symbols-outlined">package</span>
          <p>Packages</p>
        </Link>
        <Link className="CeoSTabContS" to={`/ceoDashboard/ceoOverview/user`}>
          <span className="material-symbols-outlined">person</span>
          <p>Users</p>
        </Link>
      </p>
    </div>
  );
}

export default CeoDashSidebar;
