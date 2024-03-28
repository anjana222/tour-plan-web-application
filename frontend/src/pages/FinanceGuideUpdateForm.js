import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/anjana/FlightUpdateForm.css';

function FinanceGuideUpdateForm() {
    const [name, setName] = useState('');
    const [fee, setFee] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    const getUniqueGuide = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/guides/` + id)
            .then((res) => {
                setName(res.data.name);
                setFee(res.data.fee);

            })
            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => { getUniqueGuide() }, []);

    return (
        <div className='FlightUpdateFormMainCont' data-testid="financeguideupdateform">
            <h1>Update Guide Financial Details</h1>
            <div className="FlightUpdateFormCont">
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const newGuide = {
                        fee
                    }
                    await axios.put(`${process.env.REACT_APP_BACKEND_URL}/guides/update/` + id, newGuide).then(() => {
                        alert("Guide Updated");
                        navigate("/financeDashboard/pending/guide");
                    }).catch((err) => {
                        alert(err);
                    })
                }}>



                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} readOnly />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Fee per day</label>
                        <input type="text" className="form-control" value={fee} pattern="[0-9]{3,}" onChange={(e) => { setFee(e.target.value) }} required />
                    </div>
                    <br />
                    <button type="submit" className="submitbtn">Submit</button><br /><br />
                </form>
            </div>
        </div>
    )
}

export default FinanceGuideUpdateForm;