import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link, useParams } from 'react-router-dom';
import '../styles/anjana/FinancePending.css';

const PER_PAGE = 7;

function FinancePending() {
    var { type } = useParams();
    var topicType = 'topic';
    const [array, setArray] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");

    var col1 = null;
    var col2 = null;
    var col3 = null;
    var col4 = null;
    var col5 = null;
    var col6 = null;

    var col1hid = null;
    var col2hid = null;
    var col3hid = null;
    var col4hid = null;
    var col5hid = null;
    var col6hid = null;

    var cold1 = null;
    var cold2 = null;
    var cold3 = null;
    var cold4 = null;
    var cold5 = null;
    var cold6 = null;

    var cold1hid = null;
    var cold2hid = null;
    var cold3hid = null;
    var cold4hid = null;
    var cold5hid = null;
    var cold6hid = null;

    function handlePageClick({ selected: selectedPage }) {
        console.log("selectedPage", selectedPage);
        setCurrentPage(selectedPage);
    }

    const offset = currentPage * PER_PAGE;

    const currentPageData = array
        .filter((data) => {
            switch (type) {
                
                case 'hotel':
                    if (searchTerm == "") {
                        return data;
                    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    } else if (data.price.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    } else if (data.stars.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    }
                    break;
                case 'destination':
                    if (searchTerm == "") {
                        return data;
                    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    }
                    break;
                case 'package':
                    if (searchTerm == "") {
                        return data;
                    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    } else if (data.price.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    } else if (data.hotel.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    } else if (data.destination.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    }
                    break;
                case 'guide':
                    if (searchTerm == "") {
                        return data;
                    } else if (data.nic.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    }
                    break;
                case 'user':
                    if (searchTerm == "") {
                        return data;
                    } else if (data.firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    } else if (data.lastName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    } else if (data.email.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return data;
                    }
                    break;
            }
        })
        .slice(offset, offset + PER_PAGE)
        .map((data) => {
            SetData(data);
            return (
                <tr>
                    <td style={{ display: cold1hid }}>{cold1}</td>
                    <td style={{ display: cold2hid }}>{cold2}</td>
                    <td style={{ display: cold3hid }}>{cold3}</td>
                    <td style={{ display: cold4hid }}>{cold4}</td>
                    <td style={{ display: cold5hid }}>{cold5}</td>
                    <td style={{ display: cold6hid }}>{cold6}</td>
                </tr>
            )
        });

    const pageCount = Math.ceil(array.length / PER_PAGE);

    function getArray() {
        setCurrentPage(0);
        switch (type) {
            
            case 'hotel':
                axios.get(`${process.env.REACT_APP_BACKEND_URL}/hotels`)
                    .then((res) => {
                        setArray(res.data);
                    })
                    .catch((err) => {
                        alert(err);
                    });
                break;
            case 'destination':
                axios.get(`${process.env.REACT_APP_BACKEND_URL}/destination`)
                    .then((res) => {
                        setArray(res.data);
                    })
                    .catch((err) => {
                        alert(err);
                    });
                break;
            case 'guide':
                axios.get(`${process.env.REACT_APP_BACKEND_URL}/guides`)
                    .then((res) => {
                        setArray(res.data);
                    })
                    .catch((err) => {
                        alert(err);
                    });
                break;
            case 'package':
                axios.get(`${process.env.REACT_APP_BACKEND_URL}/packages`)
                    .then((res) => {
                        setArray(res.data);
                    })
                    .catch((err) => {
                        alert(err);
                    });
                break;
            case 'user':
                axios.get(`${process.env.REACT_APP_BACKEND_URL}/client`)
                    .then((res) => {
                        setArray(res.data);
                    })
                    .catch((err) => {
                        alert(err);
                    });
                break;
        }
    }

    function SetData(props) {
        switch (type) {
            case 'hotel':
                cold1 = props.name;
                cold2 = props.stars;
                cold3hid = 'none';
                cold4 = props.buyingPrice;
                cold5 = props.sellingPrice;
                cold6 = <Link className='updatebttn' to={"/financeDashboard/financeHotelUpdateForm/" + props._id}><span className="material-symbols-outlined">edit</span></Link>;
                break;
            case 'destination':
                cold1 = props.name;
                cold2 = props.childTicketBuyingRate;
                cold3 = props.childTicketSellingRate;
                cold4 = props.adultTicketBuyingRate;
                cold5 = props.adultTicketSellingRate;
                cold6 = <Link className='updatebttn' to={"/financeDashboard/destinationUpdateForm/" + props._id}><span className="material-symbols-outlined">edit</span></Link>;
                break;
            case 'guide':
                cold1 = props.nic;
                cold2 = props.name;
                cold3 = props.fee;
                cold4hid = 'none';
                cold5hid = 'none';
                cold6 = <Link className='updatebttn' to={"/financeDashboard/FinanceGuideUpdateForm/" + props._id}><span className="material-symbols-outlined">edit</span></Link>;;
                break;
            case 'package':
                cold1 = props.name;
                cold2 = props.hotel;
                cold3 = props.destination;
                cold4 = props.vehicle;
                cold5 = props.price;
                cold6hid = 'none';
                break;
            case 'user':
                cold1 = props.firstName;
                cold2 = props.lastName;
                cold3 = props.email;
                cold4 = props.contactNo;
                cold5hid = 'none';
                cold6hid = 'none';
                break;

            default:
                break;
        }

    }

    switch (type) {
        case ('hotel'):
            topicType = 'Hotels';
            col1 = 'Name';
            col2 = 'Star';
            col3hid = 'none';
            col4 = 'Buying Price';
            col5 = 'Selling Price';
            col6 = 'Update';
            break;
        case ('destination'):
            topicType = 'Destinations';
            col1 = 'Name';
            col2 = 'Child (Buying)';
            col3 = 'Child (Selling)';
            col4 = 'Adult (Buying)';
            col5 = 'Adult (Selling)';
            col6 = 'Update';
            break;
        case ('guide'):
            topicType = 'Tour Guides';
            col1 = "NIC";
            col2 = 'Name';
            col3 = 'Fee';
            col4hid = 'none';
            col5 = 'Update';
            col6hid = 'none';
            break;
        case ('package'):
            topicType = 'Packages';
            col1 = 'Name';
            col2 = 'Hotel';
            col3 = 'Destination';
            col4 = 'Vehicle';
            col5 = 'Price';
            col6hid = 'none';
            break;
        case ('user'):
            topicType = 'Users';
            col1 = 'First Name';
            col2 = 'Last Name';
            col3 = 'Email';
            col4 = 'Contact Number';
            col5hid = 'none';
            col6hid = 'none';
            break;

    }

    useEffect(() => { getArray() }, [type]);

    return (
        <div className='FinancePendingMainCont' data-testid="financepending">
            <h1>{topicType} Overview</h1>
            <div className='FinancePendingSearch'>
                <input className='FinancePendingSearchbar' type='text' placeholder='Search here' onChange={(e) => { setSearchTerm(e.target.value) }} />
            </div>
            <div className='FinancePendingCont'>
                <div className='FinancePendingContC1'>
                    <div className='FinancePendingTableCont'>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ display: col1hid }}>{col1}</th>
                                    <th scope="col" style={{ display: col2hid }}>{col2}</th>
                                    <th scope="col" style={{ display: col3hid }}>{col3}</th>
                                    <th scope="col" style={{ display: col4hid }}>{col4}</th>
                                    <th scope="col" style={{ display: col5hid }}>{col5}</th>
                                    <th scope="col" style={{ display: col6hid }}>{col6}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentPageData}
                            </tbody>
                        </table>
                    </div>
                    <div className='FinancePendingBottomCont'>
                        <ReactPaginate
                            previousLabel={<span style={{ fontSize: '16px' }} className="material-symbols-outlined">navigate_before</span>}
                            nextLabel={<span style={{ fontSize: '16px' }} className="material-symbols-outlined">navigate_next</span>}
                            breakLabel={"..."}
                            pageCount={pageCount}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            previousLinkClassName={"pagination__link"}
                            nextLinkClassName={"pagination__link"}
                            disabledClassName={"pagination__link--disabled"}
                            activeClassName={"pagination__link--active"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinancePending