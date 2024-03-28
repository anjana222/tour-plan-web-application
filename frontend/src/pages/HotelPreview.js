import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from "../components/Footer";
import NavbarDark from "../components/NavbarDark";
import '../styles/hashani/HotelPreview.css';

function alertt(){
    alert("Please login to reserve a Hotel");
}

function HotelPreview(){
    const [name, setName]=useState('');
    const [location,setLocation]=useState('');
    const [price,setPrice]=useState('');
    const [description,setDescription]=useState('');
    const [stars,setStars]=useState('');
    const [facilities,setFacilities]=useState('');
    const [images,setImages]=useState('');
    const [sellingPrice,setSellingPrice]=useState('');
    // const [hotel, setHotel] = useState('');

    function checkLogin(){
        if(sessionStorage.getItem("ID")==null){
            return(
            <Link to={'/registration'} onClick={alertt} >
            <div>
                <button className='hotelbtn'>Make A Reservation</button>
            </div>
            </Link>)   
        }else{
            return(<Link to={'/hotelResForm/'+id}>
            <div>
                <button className='hotelbtn' >Make A Reservation</button>
            </div>
            </Link>)   
        }
     }

    const{id}=useParams();

    const getHotel=()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/hotels/`+id).then((res)=>{
            /*const updateHotelDetails={
                name: res.data.name,
                location: res.data.location,
                price: res.data.price,
                description: res.data.description,
                stars: res.data.stars,
                facilities: res.data.facilities,
                images: res.data.images,

            }*/
            setName(res.data.name);
            setLocation(res.data.location);
            setPrice(res.data.price);
            setDescription(res.data.description);
            setStars(res.data.stars);
            setFacilities(res.data.facilities);
            setImages(res.data.images);
            setSellingPrice(res.data.sellingPrice);
            // setHotel(res.data);
        })
        .catch((err) => {
            alert(err.message);
        });
    }
    useEffect(()=> getHotel(),[]);

    return(
        <div className='hotelpreviewContainer' data-testid="hotelpreview">
            <NavbarDark />
            <div className="hotelApp">
                <div className='hotelImgContainer'>
                    <img className='hotelImg' alt='pic' src={images}/>
                </div>
                <div className='hotelTextContainer'>
                    <h1 className='text-center'>{name}</h1>
                    <p>Location: {location}</p>
                    <p className='pricetag'>Price per Night: Rs {sellingPrice}<br/></p>
                    <p>{description}<br/></p>
                    <p>Stars: {stars}<br/></p>
                    Facilities:<p className='facil'> {facilities}<br/></p>
                    {
                    checkLogin()
                }
                </div>
               
            </div>
            {/* <Link to={'/hotelResForm/'+id}>
            <div>
                <button className='hotelbtn'>Make A Reservation</button>
            </div>
            </Link> */}
            <Footer />
        </div>
    )
}   

export default HotelPreview;
