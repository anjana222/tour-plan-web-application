/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from "../components/Footer";
import NavbarDark from "../components/NavbarDark";
import '../styles/hashani/TaxiPreview.css';

function alertt(){
  alert("Please login to rent a vehicle");
}

function BookingPreview() {

  const [name, setName]=useState('');
  const [area, setArea]=useState('');
  const [fee, setFee]=useState('');
  const [image, setImage]=useState('');

  function checkLogin(){
    if(sessionStorage.getItem("ID")==null){
        return(
        <Link to={'/registration'} onClick={alertt} >
        <div>
            <button className='rentbtn'>Book Tour Guide</button>
        </div>
        </Link>)   
    }else{
        return(<Link to={'/bookingForm/'+ id}>
        <div>
            <button className='rentbtn' >Book Tour Guide</button>
        </div>
        </Link>)   
    }
 }


  const {id} = useParams();

  const getGuide = async () => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/guides/`+id)
      .then((res) => {
        setName(res.data.name);
        setArea(res.data.area);
        setFee(res.data.fee);
        setImage(res.data.image);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => { getGuide() }, [id]);

  return (
    <div className='taxipreviewContainer' data-testid="taxipreview">
      <NavbarDark />
      <div className="taxiApp">
        <div className='taxiImgContainer'>
          <img className='taxiImg' alt='pic' src={image}/>
        </div>
      <div className='taxiTextContainer'>
        <h2 className='taxi-text-center-2'><b>Name:</b> {name}</h2>
        <div className='taxiInnerTextContainer'>
          <p className = 'content'><b>Area: </b>{area}<br/></p>
          <p className='taxiFee'> Fee per day: Rs {fee}<br/></p> 
          {
            checkLogin()
          } 
        </div>
      </div>

      {/* <Link to={'/RentalForm'}>
        <div>
        <button className='rentbtn'>Rent this Vehicle</button>
        </div>
        </Link> */}
      </div>
      <Footer /> 
      </div>
      
  )
}


export default BookingPreview;
