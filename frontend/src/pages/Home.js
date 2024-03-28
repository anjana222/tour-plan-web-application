
import axios from "axios";
import { signOut } from "firebase/auth";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import auth from "../firebase";
import "../styles/anjana/Home.css";

function Home() {
  const [id, setId] = useState("");
  

  const [user, loading] = useAuthState(auth);

  if (loading) return <p className="text-center mt-5">Loading ...</p>;

  if (user) {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/client/getClientInfo/${user?.email}`)
      .then((client) => {
        setId(client.data._id);
      })
      .catch((err) => {
        console.log(err);
        signOut(auth);
      });
  }

  return (
    <div className="homeCont" data-testid="home">
      <Navbar />
      <Carousel className="carouselCont" fade>
        <Carousel.Item className="heroCont1" interval={2500}>
        
        <Carousel.Caption className="carousalCap">
  <div className="caption-content">
    <h1>Travel with us</h1>
    <p>Travel with us to the most beautiful places in Sri Lanka</p>
    <Link to="/registration">
      <Button className="whitebtn">Let's get started</Button>
    </Link>
  </div>
</Carousel.Caption>

          
        </Carousel.Item>
{/*
        <Carousel.Item className="heroCont2" interval={2500}>
          <Tilt options={options} className="heroText1">
            <Carousel.Caption className="carousalCap">
              <img
                src={
                  ""
                }
                alt="heroimg"
              />
              <h1>Travel with us</h1>
              <p>Travel with us to the most beautiful places in Sri Lanka</p>
              <Link to="/registration">
                <Button className="whitebtn">Let's get started</Button>
              </Link>
            </Carousel.Caption>
          </Tilt>
        </Carousel.Item>

        <Carousel.Item className="heroCont3" interval={2500}>
          <Tilt options={options} className="heroText1">
            <Carousel.Caption className="carousalCap">
              <img
                src={
                  ""
                }
                alt="heroimg"
              />
              <h1>Travel with us</h1>
              <p>Travel with us to the most beautiful places in Sri Lanka</p>
              <Link to="/registration">
                <Button className="whitebtn">Let's get started</Button>
              </Link>
            </Carousel.Caption>
          </Tilt>
        </Carousel.Item>
        
        */}
      </Carousel>

      
      <script type="text/javascript" src="vanilla-tilt.js"></script>
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
