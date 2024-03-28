import { Link } from 'react-router-dom';
import '../styles/anjana/EditorDashSidebar.css';

function EditorDashSidebar() {
  return (
    <div className='EditorDashSidebarMainCont' data-testid="editordashsidebar">
      <div className='EditorDSLogoCont'>
        <center>
          <img src={'https://i.ibb.co/rv3cmhq/Logo.png'} alt='logo' />
        </center>
      </div>
      <Link className='EditorSTabContS' to={`/editorDashboard`}>
        <span className="material-symbols-outlined">dashboard</span><p>Dashboard</p>
      </Link>
      <p className='EditorSTabContL'>
        <span className="material-symbols-outlined">analytics</span><p>Web Content</p>
      </p>
      <p className='EditorSTabContSub'>
        {/* <Link className='EditorSTabContS' to={`/editorDashboard/editorWebContent/flight`}>
          <span className="material-symbols-outlined">flight</span><p>Flights</p>
        </Link> */}
        <Link className='EditorSTabContS' to={`/editorDashboard/editorWebContent/hotel`}>
          <span className="material-symbols-outlined">hotel</span><p>Hotels</p>
        </Link>
        {/* <Link className='EditorSTabContS' to={`/editorDashboard/editorWebContent/destination`}>
          <span className="material-symbols-outlined">pin_drop</span><p>Destinations</p>
        </Link> */}
        <Link className='EditorSTabContS' to={`/editorDashboard/editorWebContent/guide`}>
          <span className="material-symbols-outlined">person</span><p>Guides</p>
        </Link>
        <Link className='EditorSTabContS' to={`/editorDashboard/editorWebContent/package`}>
          <span className="material-symbols-outlined">package</span><p>Packages</p>
        </Link>
        <Link className='EditorSTabContS' to={`/editorDashboard/editorWebContent/cultures`}>
          <span className="material-symbols-outlined">Celebration</span><p>Cultural Scenarios</p>
        </Link>
      </p>
    </div>
  )
}

export default EditorDashSidebar