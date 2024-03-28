import axios from "axios";
import { deleteUser } from "firebase/auth";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import "react-day-picker/dist/style.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import auth from "../firebase";
import "../styles/nawoda/UserProfile.css";

function UserProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    password: "",
    // Add more user details as needed
  });

  const [selected, setSelected] = useState(new Date());

  const { id } = useParams();
  const navigate = useNavigate();

  const getClient = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/client/` + id)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
        setContactNo(res.data.contactNo);
        // setUsername(res.data.username);
        setPassword(res.data.password);
        setImage(res.data.image);
        setUserData(res.data)
      })
      .catch((err) => {
        alert(err);
      });
  };

  const deleteClient = async (id) => {
    try {
      await deleteUser(auth.currentUser);
      axios
        .delete(`${process.env.REACT_APP_BACKEND_URL}/client/delete/${id}`)
        .then(() => {
          sessionStorage.removeItem("ID");
          alert("User account deleted");
          navigate("/");
        })
        .catch((err) => {
          alert(err);
        });
    } catch (error) {
      alert("Error!Could not delete user");
      console.log(error);
    }
  };
  useEffect(() => {
    getClient();
  }, [id]);
  // console.log(client);
  const generateReport = () => {
    // Format user details as plain text
    const reportContent = `User Details:
    First Name: ${userData.firstName}
    Last Name: ${userData.lastName}
    Email: ${userData.email}
    Contact Number: ${userData.contactNo}
    Password: ${userData.password}`;

    // Create a Blob with the report content
    const blob = new Blob([reportContent], { type: "text/plain" });

    // Create a download link and trigger a download
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "user_report.txt";
    document.body.appendChild(a);
    a.click();

    // Cleanup
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };
  

  return (
    <div className="profilecontainer w-100" data-testid="userprofile">
      <div className="userprofiletopic" style={{ textAlign: 'center', paddingTop: '20px' }}>
    <h1 style={{ fontWeight: 'bold' }}>User Profile</h1>
</div>


      {/* <div className='userprofilecontainer'> */}

      <div
        style={{ overflow: "scroll" }}
        className="card-container position-relative shadow-lg bg-solid"
      >
        <div className="upper-container"></div>

        <div className="lower-container d-flex">
          {/* user profile */}
          <Card className="border-0 shadow-lg bg-white profile-container rounded-4 w-100">
            <div className="image-container mx-auto mt-1 shadow-lg rounded-circle">
              <Card.Img
                variant="top"
                src={
                  image || "https://th.bing.com/th/id/R.5d2640166fb9248ee7ae20cbc19a9141?rik=QcfC8%2ft8rnv%2foQ&pid=ImgRaw&r=0"
                }
              />
            </div>

            <Card.Body className="d-flex  justify-content-between mt-1">
              <Card.Text className="mx-auto w-100 px-xxl-2 p-4">
                <table className="tableprofile" style={{ width: "100%" }}>
                  <tr>
                    <th> First name  : </th>
                    <td>{firstName}</td>
                  </tr>

                  <tr>
                    <th> Last name  : </th>
                    <td>{lastName}</td>
                  </tr>

                  <tr>
                    <th> Email  : </th>
                    <td>{email}</td>
                  </tr>

                  <tr>
                    <th> Contact  : </th>
                    <td>{contactNo}</td>
                  </tr>
{/* 
                  <tr>
                    <th> password: </th>
                    <td>{password}</td>
                  </tr> */}
                </table>
              </Card.Text>
              <div className="btnprofile">
                <Link to={`/ClientDashboard/${id}/updateProfile`}>
                  <Button variant="warning">Update Profile</Button>
                </Link>


                <div className="">
        {/* <Button variant="primary" onClick={generateReport}>
          Generate Report/
        </Button> */}
      </div>
      <div style={{ margin: '0 10px' }}></div> {/* Add space here */}
                <Button
                  variant="danger"
                  className=""
                  onClick={() => {
                    if (
                      window.confirm(
                        
                        
                        
                        
                        
                         "Are you sure you wish to delete this account?"
                      )
                    )
                      deleteClient(id);
                  }}
                >
                  Delete Account
                </Button>
              </div>
            </Card.Body>
          </Card>
          <br></br>

          {/* recent card */}
                 </div>
      </div>
    </div>
  );
}
export default UserProfile;
