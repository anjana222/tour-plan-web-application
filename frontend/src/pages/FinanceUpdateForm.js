import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/anjana/FlightUpdateForm.css';

function FinanceUpdateForm() {
    const [pkgType, setPkgtype] = useState('');
    const [expDate, setExpDate] = useState('');
    const [price, setPrice] = useState('');
    const [profit, setProfit] = useState('');
    const [finalPrice, setFinalPrice] = useState('');
    const { id } = useParams();

    const getFinance = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/finance/` + id).then((res) => {
            const updateFinance = {
                pkgType: res.data.name,
                expDate: res.data.name,
                price: res.data.name,
                profit: res.data.name,
                finalPrice: res.data.name,
            }

            setPkgtype(updateFinance.pkgType);
            setExpDate(updateFinance.expDate);
            setPrice(updateFinance.price);
            setProfit(updateFinance.profit);
            setFinalPrice(updateFinance.finalPrice);
        })

            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => { getFinance() }, []);

    return (
        <div className='FinanceUpdateFormCont' data-testid="financeupdateform">
            <h1>Update Finance Details</h1>
            <div className="FinanceUpdateFormCont">

                <form onSubmit={async (e) => {
                    e.preventDefault();



                    const newFinance = {
                        pkgType,
                        expDate,
                        price,
                        profit,
                        finalPrice,
                    }

                    // axios.put(`${process.env.REACT_APP_BACKEND_URL}/flights/update/` + id, newFinance)
                    //     .then(() => {
                    //         alert("Finance updated successfully");

                    //     }).catch((err) => {
                    //         alert(err);
                    //     })
                }}>

                    <div className="form-group">
                        <label className="form-label">Package Type</label>
                        <input type="text" className="form-control" value={pkgType}
                            onChange={(e) => {
                                setPkgtype(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Expire Date</label>
                        <input type="text" className="form-control" value={expDate}
                            onChange={(e) => {
                                setExpDate(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Price</label>
                        <input type="text" className="form-control" value={price}
                            onChange={(e) => {
                                setPrice(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">profit</label>
                        <input type="date" className="form-control" value={profit}
                            onChange={(e) => {
                                setProfit(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Final Price</label>
                        <input type="time" className="form-control" value={finalPrice}
                            onChange={(e) => {
                                setFinalPrice(e.target.value);
                            }} required />
                    </div>

                    <button type="submit" className="btn btn-dark">Submit</button><br /><br />
                </form>
            </div>
        </div>
    )
}

export default FinanceUpdateForm;