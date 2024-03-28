

import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import { deleteVehicle } from '../../../backend/controllers/vehicles';


function GuidesEdit() { 
  const [guides, setGuides] = useState([]);

  const getGuide = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/guides`)
      .then((res) => {
        setGuides(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  const deleteGuide = (id) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/guides/delete/${id}`)  //Activates Hotel deleting function
        .then((res) => {
            alert("Guide Content Deleted");
            getGuide();
        })
        .catch((err) => {
            alert(err);
        });
    }

  useEffect(() => { getGuide() } , []);  //Shows changes of the page

  return (
    <div className='container text-center' data-testid="Guidesedit">
      <h1 className='text-center'>Guide</h1>

      <div className='container d-flex flex-wrap' style={{ width: '80%'}}>
        {guides.map((data) => {
          return (
            <Card style={{ width: '19rem', margin: '1rem', padding: '1rem'}}>
              <Card.Img src={data.image}/>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.location}</Card.Subtitle>
                <Card.Text>
               
                type = {data.type}<br/>
                vehicleType = {data.vehicleType}<br/>
                driverName      = {data.driverName}<br/>
                ownerName        = {data.ownerName}<br/>
                email    = {data.email}<br/>
                phoneNo            ={data.phoneNo}<br/>
                fee              = {data.fee}<br/>
               
                </Card.Text>
                
                <Link key={`${data._id} + 4`} to={"/editorDash/GuideUpdateForm/"+data._id}>
                <Button key={`${data._id} + 1`}variant="warning">Update</Button>
                </Link>
                <Button key={`${data._id} + 5`} variant="danger" className='ms-3' onClick={() => deleteGuide(data._id)}>Delete</Button>
              </Card.Body>
            </Card>
          )        
        })}
      </div>
    </div>
  )
}

export default GuidesEdit;