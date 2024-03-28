import { Link, Outlet } from 'react-router-dom';
import CeoDashSidebar from '../components/CeoDashSidebar.js';
import '../styles/anjana/SharedLayoutCeoDashboard.css';

function SharedLayoutCeoDashboard() {
  return (
    <div className='SharedLayoutCeoDashMainCont'>
        <CeoDashSidebar />
        <Outlet />
      <Link to={"/"}>
        <button className='HomeBtn'>Home</button>
      </Link>
    </div>
  )
}

export default SharedLayoutCeoDashboard