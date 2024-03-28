
import { Link, useNavigate } from 'react-router-dom';

import axios from "axios";
import { useState } from "react";
import '../styles/anjana/login.css';




const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  
  
  // const handleLogin = async (event) => {
    
  //   event.preventDefault();

  //   try {
  //     const response = await axios.post("http://localhost:8070/supplier/login", {
  //       email,
  //       password,
  //     });

  //     localStorage.setItem("supId", response.data.supId);
      
  //     // Redirect to the dashboard or any other authenticated page
  //     navigate('/SupplierAccount');
  //   } catch (error) {
  //     setErrorMessage(error.response.data.message);
  //   }
  // };

  //new
  const handleLogin = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:8070/supplier/login", {
        email,
        password,
      });
  
      const supplierId = response.data.supId;
      console.log(supplierId)
  
      // localStorage.setItem("supId", supplierId);
      
  
      // Fetch the reports for the logged-in supplier
      const reportsResponse = await axios.get(`http://localhost:8070/report/viewReports/${supplierId}`);
      const reports = reportsResponse.data;
      console.log(reportsResponse)
  
      // Navigate to the view reports page with the reports data
      navigate(`/viewReports/${supplierId}`);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };
  

  
  return (
    <div id='supplier-login'>
      <h1 id='supplier-login-head'>Login</h1>
      {errorMessage && <div>{errorMessage}</div>}
      <form id='supplier-login-form' >
        
        <div>
          <label htmlFor="email">username:</label>
          <input
          type='text'
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        
        
        <Link to={"/financeDashboard"}>
                  <button className="blackbtn">Login as an Accountant</button>
                </Link>
 

      </form>
    </div>
  );
};

export default Login;
