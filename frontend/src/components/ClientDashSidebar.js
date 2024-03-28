import { Link, useParams } from 'react-router-dom';
import '../styles/nawoda/ClientDashSidebar.css';

function ClientDashSidebar() {
  const { id } = useParams();

  return (
    <div className="ClientDashSidebarMainCont" data-testid="clientdashsidebar">
      <div className='ClientDSLogoCont'>
        <center><Link to={`/`}>
          <img src={'https://i.ibb.co/rv3cmhq/Logo.png'} alt='logo' />
        </Link>
        </center><br/>
      </div>
      <Link className='ClientSTabContS' to={`/clientDashboard/${id}`}>
        <span className="material-symbols-outlined">person</span><p>User Profile</p>
      </Link>
      <div className='ClientSTabContL'>
        <span className="material-symbols-outlined">sell</span><p>Bookings</p>
      </div>
      <div className='ClientSTabContSub'>
        {/* <Link className='ClientSTabContS' to={`/clientDashboard/${id}/bookings/flight`}>
          <span className="material-symbols-outlined">flight</span><p>Flights</p>
        </Link> */}
        <Link className='ClientSTabContS' to={`/clientDashboard/${id}/bookings/hotel`}>
          <span className="material-symbols-outlined">hotel</span><p>Hotels</p>
        </Link>
        {/* <Link className='ClientSTabContS' to={`/clientDashboard/${id}/bookings/destination`}>
          <span className="material-symbols-outlined">pin_drop</span><p>Destinations</p>
        </Link> */}
        <Link className='ClientSTabContS' to={`/clientDashboard/${id}/bookings/guide`}>
          <span className="material-symbols-outlined">person</span><p>Guides</p>
        </Link>
        <Link className='ClientSTabContS' to={`/clientDashboard/${id}/bookings/package`}>
          <span className="material-symbols-outlined">package</span><p>Tour Packages</p>
        </Link>
      </div>
      <Link className='ClientSTabContS' to={`/clientDashboard/${id}/feedback`}>
        <span className="material-symbols-outlined">chat</span><p>Feedbacks</p>
      </Link>
      {/* <Link className='ClientSTabContS' to={`/ClientDashboard/${id}/payments`}>
          <span className="material-symbols-outlined">payment</span><p>Payments</p>
        </Link> */}
    </div>
  )
}

export default ClientDashSidebar