import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/anjana/FlightUpdateForm.css';

function FinanceHotelUpdateForm() {
    const [name, setName] = useState('');
    const [buyingPrice, setBuyingPrice] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    const getUniqueHotel = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/hotels/` + id)
            .then((res) => {
                setName(res.data.name);
                setBuyingPrice(res.data.buyingPrice);
                setSellingPrice(res.data.sellingPrice);
            })
            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => { getUniqueHotel() }, []);

    return (
        <div className='FlightUpdateFormMainCont' data-testid="financehotelupdateform">
            <h1>Update Hotel Financial Details</h1>
            <div className="FlightUpdateFormCont">
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const newHotel = {
                        buyingPrice,
                        sellingPrice
                    }
                    await axios.put(`${process.env.REACT_APP_BACKEND_URL}/hotels/update/` + id, newHotel).then(() => {
                        alert("Hotel Details Updated And Uploaded");
                        navigate("/financeDashboard/pending/hotel");
                    }).catch((err) => {
                        alert(err);
                    })
                }}>


                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} readOnly />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Hotel Ticket Buying Price</label>
                        <input type="text" className="form-control" value={buyingPrice} onChange={(e) => { setBuyingPrice(e.target.value) }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Hotel Ticket Selling Price</label>
                        <input type="text" className="form-control" value={sellingPrice} onChange={(e) => { setSellingPrice(e.target.value) }} required />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-dark">Submit</button><br /><br />
                </form>
            </div>
        </div>
    )
}

export default FinanceHotelUpdateForm;