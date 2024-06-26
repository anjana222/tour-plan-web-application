import { Link, Outlet } from 'react-router-dom';
import EditorDashSidebar from '../components/EditorDashSidebar';
import '../styles/anjana/SharedLayoutEditorDashboard.css';

function SharedLayoutEditorDashboard() {
  return (
    <div className='SharedLayoutEditorDashMainCont'>
      <EditorDashSidebar />
      <Link to={"/"}>
        <button className='HomeBtn'>Home</button>
      </Link>
      <Outlet />
    </div>
  );
}

export default SharedLayoutEditorDashboard;
