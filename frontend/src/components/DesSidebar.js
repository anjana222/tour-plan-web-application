/* eslint-disable array-callback-return */
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/anjana/DesSidebar.css';
import { Link } from 'react-router-dom';

function DesSidebar() {
  const [attractions, setAttractions] = useState([]);

  const getAttractions = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/destination`)
      .then((res) => {
        setAttractions(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => { getAttractions() }, []);

  return (
    <div className='DesSidebar' data-testid="dessidebar">
      <div className='container'>
        {attractions.map((data) => {
          if (data.childTicketBuyingRate != null) {
            return (
              <Link to={`/attractions/${data._id}`}>
                <Card className='DesSidebarCard' key={`${data._id} + 1`}>
                  <Card.Img className='DesCardImg' key={`${data._id} + 1`} src={data.images} />
                  <Card.Body className='DesCardBody' key={`${data._id} + 2`}>
                    <Card.Title className='desCardTitle' key={`${data._id} + 1`}>{data.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            )
          }
        })}
      </div>
    </div>
  )
}

export default DesSidebar;