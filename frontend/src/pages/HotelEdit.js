import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function HotelEdit() { 
  const [hotels, setHotels] = useState([]);

  const getHotels = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/hotels`)
      .then((res) => {
        setHotels(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const deleteHotels = (id) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/hotels/remove/${id}`)  //Activates Hotel deleting function
        .then((res) => {
            alert("Hotel Content Deleted");
            getHotels();
        })
        .catch((err) => {
            alert(err);
        });
    }

  useEffect(() => { getHotels() });  //Shows changes of the page

  return (
    <div className='container text-center' data-testid="hoteledit">
      <h1 className='text-center'>Hotels</h1>

      <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
        {hotels.map((data) => {
          return (
            <Card style={{ width: '19rem', margin: '1rem', padding: '1rem'}}>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.location}</Card.Subtitle>
                <Card.Text>
                  Price: {data.price}<br/>
                  Description: {data.description}<br/>
                  Stars: {data.stars}<br/>
                  Facilities: {data.facilities}<br/>
                  <Card.Img src={data.images}/>
                </Card.Text>
                <Link to={"/editorDash/hotelUpdateForm/"+data._id}>
                <Button variant="warning">Update</Button>
                </Link>
                <Button variant="danger" className='ms-3' onClick={() => deleteHotels(data._id)}>Delete</Button>
              </Card.Body>
            </Card>
          )        
        })}
      </div>
    </div>
  )
}

export default HotelEdit;