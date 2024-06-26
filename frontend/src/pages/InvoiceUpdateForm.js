import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/dilshan/invoiceForm.css';


function InvoiceUpdateForm() {
    const [fName, setfName] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [Type, setType] = useState('');
    const [price, setsprice] = useState('');
    const [additonalaNote, setadditonalaNote] = useState('');


    const { id } = useParams();

    const newInvoice = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/invoice/` + id) //get id
            .then((res) => {

                setfName(res.data.fName);
                setemail(res.data.email);
                setphone(res.data.phone);
                setType(res.data.Type);
                setsprice(res.data.price);
                setadditonalaNote(res.data.additonalaNote);

            })
            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => { newInvoice() }, []);

    return (
        <div className='InvoiceFormMainCont' data-testid="invoiceupdateform">
            <h1>Update Invoice </h1>
            <div className="InvoiceForm">
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    const newInvoice = {
                        fName,
                        email,
                        phone,
                        Type,
                        price,
                        additonalaNote,
                    }

                    axios.put(`${process.env.REACT_APP_BACKEND_URL}/invoice/update/` + id, newInvoice)
                        .then(() => {
                            alert("Invoice updated successfully");
                            window.location = '/financeDashboard/invoice';
                        }).catch((err) => {
                            alert(err);
                        })

                }}>

                    <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-control" value={fName}
                            onChange={(e) => {
                                setfName(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" value={email}
                            onChange={(e) => {
                                setemail(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Phone</label>
                        <input type="text" className="form-control" min="100000000" max="790000000" value={phone}
                            onChange={(e) => {
                                setphone(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Type (Flights/Taxis/Packages)</label>
                        <input type="text" className="form-control" value={Type}
                            onChange={(e) => {
                                setType(e.target.value);
                            }} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Price</label>
                        <input type="text" className="form-control" value={price}
                            onChange={(e) => {
                                setsprice(e.target.value);
                            }} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Additional Note</label>
                        <input type="text" className="form-control" value={additonalaNote}
                            onChange={(e) => {
                                setadditonalaNote(e.target.value);
                            }} />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-dark">Submit</button><br /><br />
                </form>
            </div>
        </div>
    )
}


export default InvoiceUpdateForm;
