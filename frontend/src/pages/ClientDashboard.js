/*

import ClientDashSidebar from '../components/ClientDashSidebar';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import '../styles/randula/ClientDashboard.css';
import { signOut } from 'firebase/auth';
import auth from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function ClientDashboard() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) return <p className='text-center mt-5'>Loading ...</p>

  if (!user) {
    navigate('/');
  }
  return (
    <div className='CDashMainCont'>
      <ClientDashSidebar />
      <span className='logoutBtn' onClick={() => signOut(auth)&sessionStorage.removeItem("ID")}>Logout</span>

      <Outlet />
    </div>
  )
}

export default ClientDashboard

*/
import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react'; // Import useEffect from react
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import ClientDashSidebar from '../components/ClientDashSidebar';
import auth from '../firebase';
import '../styles/nawoda/ClientDashboard.css';

function ClientDashboard() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  // Handle unauthenticated users
  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      sessionStorage.removeItem("ID");
      navigate('/');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  if (loading) return <p className='text-center mt-5'>Loading ...</p>;

  return (
    <div className='CDashMainCont'>
      <ClientDashSidebar />
      <span className='logoutBtn' onClick={handleLogout}>Logout</span>
      <Outlet />
    </div>
  );
}

export default ClientDashboard;
