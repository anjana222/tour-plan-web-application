import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/anjana/FinanceDashboard.css';

function FinanceDashboard() {
    // const [flights, setFlights] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [guides, setGuides] = useState([]);
    const [packages, setPackages] = useState([]);
    const [clients, setClients] = useState([]);
    const [destinations, setDestinations] = useState([]);
    const [invoice, setInvoice] = useState([]);
    var countFlight = 0;
    var countHotel = 0;
    var countDestination = 0 ;
    var countPackage = 0;
    var countGuide = 0;


    function setStates() {
        // axios.get(`${process.env.REACT_APP_BACKEND_URL}/flights`)
        //     .then((response) => {
        //         setFlights(response.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/hotels`)
            .then((response) => {
                setHotels(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/guides`)
            .then((response) => {
                setGuides(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/destination`)
            .then((response) => {
                setDestinations(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/packages`)
            .then((response) => {
                setPackages(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get(`${process.env.REACT_APP_BACKEND_URL}/client`)
            .then((response) => {
                setClients(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

            axios.get(`${process.env.REACT_APP_BACKEND_URL}/invoice`)
            .then((response) => {
                setInvoice(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => { setStates() }, []);
    

    return (
        <div className="FinanceDashMainCont">
            <h1>Dashboard</h1>
            
        </div>
    )
}

export default FinanceDashboard