import axios from "axios";
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "../styles/anjana/CeoRevenue.css";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


function FlightChartData(month) {
  const [flights, setFlights] = useState([]);

  const [vehicles, setVehicles] = useState([]);
  const [destinations, setDestinations] = useState([]);

  const [departureDate, setDepartureDate] = useState("");

  function getFlights() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/flightTicket`)
      .then((response) => {
        setFlights(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getFlights();
  }, []);

  var count = 0;
  flights.filter((data) => {
    switch (month) {
      case "april":
        if (data.departureDate.includes("2023-04")) {
          count++;
        }
        break;
      case "may":
        if (data.departureDate.includes("2023-05")) {
          count++;
        }
        break;
      case "june":
        if (data.departureDate.includes("2023-06")) {
          count++;
        }
        break;
      case "july":
        if (data.departureDate.includes("2023-07")) {
          count++;
        }
        break;
    }
  });

  console.log(count);
  return count;
}

function HotelChartData(month) {
  const [hotels, setHotels] = useState([]);

  function getHotels() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/hotelRes`)
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getHotels();
  }, []);

  var count = 0;
  hotels.filter((data) => {
    switch (month) {
      case "april":
        if (data.check_in.includes("2023-04")) {
          count++;
        }
        break;
      case "may":
        if (data.check_in.includes("2023-05")) {
          count++;
        }
        break;
      case "june":
        if (data.check_in.includes("2023-06")) {
          count++;
        }
        break;
      case "july":
        if (data.check_in.includes("2023-07")) {
          count++;
        }
        break;
    }
  });

  console.log(count);
  return count;
}

function VehiclesChartData(month) {
  const [vehicles, setVehicles] = useState([]);

  function getVehicles() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/rental`)
      .then((response) => {
        setVehicles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getVehicles();
  }, []);

  var count = 0;
  vehicles.filter((data) => {
    switch (month) {
      case "april":
        if (data.date.includes("2023-04")) {
          count++;
        }
        break;
      case "may":
        if (data.date.includes("2023-05")) {
          count++;
        }
        break;
      case "june":
        if (data.date.includes("2023-06")) {
          count++;
        }
        break;
      case "july":
        if (data.date.includes("2023-07")) {
          count++;
        }
        break;
    }
  });

  console.log(count);
  return count;
}

function DesChartData(month) {
  const [destinations, setDestinations] = useState([]);

  function getDes() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/desTicket`)
      .then((response) => {
        setDestinations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getDes();
  }, []);

  var count = 0;
  destinations.filter((data) => {
    switch (month) {
      case "april":
        if (data.date.includes("2023-04")) {
          count++;
        }
        break;
      case "may":
        if (data.date.includes("2023-05")) {
          count++;
        }
        break;
      case "june":
        if (data.date.includes("2023-06")) {
          count++;
        }
        break;
      case "july":
        if (data.date.includes("2023-07")) {
          count++;
        }
        break;
    }
  });

  console.log(count);
  return count;
}

export const options = {
  // responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Numbers",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  maintainAspectRatio: false,
};

var april = "april";
var may = "may";
var june = "june";
var july = "july";

// export const data = {
//     labels: ['april', 'may', 'june', 'july'],
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: [passMonth(april), passMonth(may), passMonth(june), passMonth(july)],
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//     //   {
//     //     label: 'Dataset 2',
//     //     data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//     //     borderColor: 'rgb(53, 162, 235)',
//     //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     //   },
//     ],
// };

function CeoRevenue() {
  const [childTicketBuyingRate, setChildTicketBuyingRate] = useState(0);
  const [adultTicketBuyingRate, setAdultTicketBuyingRate] = useState(0);
  const [childTicketSellingRate, setChildTicketSellingRate] = useState(0);
  const [adultTicketSellingRate, setAdultTicketSellingRate] = useState(0);

  const [desRes, setDesRes] = useState([]);
  const [destinationRevenue, setDestinationRevenue] = useState(0);
  var totalDesRev = null;

  const [flightRes, setFlightRes] = useState([]);
  const [revFlight, setFlightRev] = useState(0);
  var totalFlightRev = null;

  const [hotelRes, setHotelRes] = useState([]);
  const [revHotel, setHotelRev] = useState(0);
  var totalHotelRev = null;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/desTicket`)
      .then((res) => {
        // setChildTicketBuyingRate(res.data[0].childTicketBuyingRate);
        // setAdultTicketBuyingRate(res.data[0].adultTicketBuyingRate);
        // setChildTicketSellingRate(res.data[0].childTicketSellingRate);
        // setAdultTicketSellingRate(res.data[0].adultTicketSellingRate);
        // console.log(res.data[0].childTicketBuyingRate);
        // setDestinationRevenue((adultTicketSellingRate - adultTicketBuyingRate) + (childTicketSellingRate - childTicketBuyingRate));

        setDesRes(res.data);
      })
      .catch((err) => {
        alert(err);
      });
    setDestinationRevenue(totalDesRev);

    // axios
    //   .get(`${process.env.REACT_APP_BACKEND_URL}/flightTicket`)
    //   .then((res) => {
    //     setFlightRes(res.data);
    //     // setPrice(res.data[0].price);
    //     // setFlightRev(price*0.08);
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });
    // setFlightRev(totalFlightRev);

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/hotels`)
      .then((res) => {
        setHotelRes(res.data);
      })
      .catch((err) => {
        alert(err);
      });
    setHotelRev(totalHotelRev);
  };
  return (
    // <Line data={data} options={options}/>

    <div className="CeoRevenueMainCont">
      {desRes.map((data) => {
        totalDesRev = totalDesRev + data.total;
      })}
      {flightRes.map((data) => {
        totalFlightRev =
          Math.round((totalFlightRev + data.price * 0.08) * 100) / 100;
        // totalFlightRev = (totalFlightRev+data.price);
      })}

      {hotelRes.map((data) => {
        totalHotelRev = totalHotelRev + (data.sellingPrice - data.buyingPrice);
      })}
      <h1>Dashboard</h1>
      <div className="CeoRevenueInnerCont">
        <div className="CeoRevenueInnerContR1">
          <div className="CeoRevInConR1card">
            <h1>{"Rs. " + (totalDesRev + totalFlightRev + totalHotelRev)}</h1>
            <h4>Total Revenue</h4>
          </div>

          {/* <div className="CeoRevInConR1card">
            <h1>{"Rs. " + totalFlightRev}</h1>
            <h4>Revenue from Flights</h4>
          </div> */}

          <div className="CeoRevInConR1card">
            <h1>{"Rs. " + totalHotelRev}</h1>
            <h4>Revenue from Hotels</h4>
          </div>

          <div className="CeoRevInConR1card">
            <h1>{"Rs. " + totalDesRev}</h1>
            <h4>Revenue from Destinations</h4>
          </div>
        </div>

        <div className="CeoRevenueInnerContR2">
          <div className="CeoRevenueInnerContR2C1">
            <Line
              data={{

                labels: ["april", "may", "june", "july"],
                datasets: [
                  {
                    label: "Flights booked",
                    data: [
                      FlightChartData(april),
                      FlightChartData(may),
                      FlightChartData(june),
                      FlightChartData(july),
                    ],
                    borderColor: "rgb(255, 99, 132)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                  },
                  {
                    label: "Hotels reserved",
                    data: [
                      HotelChartData(april),
                      HotelChartData(may),
                      HotelChartData(june),
                      HotelChartData(july),
                    ],
                    borderColor: "rgb(0,0,255)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                  },
                  {
                    label: "Vehicles rented",
                    data: [
                      VehiclesChartData(april),
                      VehiclesChartData(may),
                      VehiclesChartData(june),
                      VehiclesChartData(july),
                    ],
                    borderColor: "rgb(124,252,0)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                  },
                  {
                    label: "Attraction tickets booked",
                    data: [
                      DesChartData(april),
                      DesChartData(may),
                      DesChartData(june),
                      DesChartData(july),
                    ],
                    borderColor: "rgb(234, 221, 202)",
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                  },
                ],
              }}
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CeoRevenue;
