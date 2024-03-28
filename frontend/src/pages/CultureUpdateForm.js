import axios from 'axios';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { storage } from '../firebase';
import '../styles/nawoda/PackageForm.css';

function CultureUpdateForm() {
    const [name, setName] = useState('');
    const [month, setMonth] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');

    const { id } = useParams();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/culture/` + id)
            .then((res) => {
                setName(res.data.name);
                setMonth(res.data.month);
                setDescription(res.data.description);
                setLocation(res.data.location);
                setImage(res.data.image);
            })
            .catch((err) => {
                alert(err);
            });
    }, []);


    return (
        <div className='PackageFormMainCont' data-testid="cultueupdateform">
            <h1>Update Cultural Scenario Details</h1>
            <div className="PackageForm">
                <br />
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    //image
                    const imageRef = ref(storage, `images/culture/${name + image.name}`);

                    await uploadBytes(imageRef, image) //uploads image to the DataBase
                        .then(() => {
                            console.log('Uploaded image');
                        }).catch((err) => {
                            console.log(err);
                        })

                    await getDownloadURL(ref(storage, `images/culture/${name + image.name}`))
                        .then((url) => {
                            console.log(url);

                            const newCulture = {
                                name,
                                month,
                                description,
                                location,
                                image: url
                            }

                            axios.put(`${process.env.REACT_APP_BACKEND_URL}/culture/update/` + id, newCulture)
                                .then(() => {
                                    alert("Culture Content Updated successfully");
                                    window.location = '/editorDashboard/editorWebContent/cultures';
                                }).catch((err) => {
                                    alert("Error Updated Culture Content");
                                    console.log(err);
                                })
                        }).catch((err) => {
                            console.log(err);
                        })
                }}>

                    <div className="form-group">
                        <label className="form-label">Enter Culture Name</label>
                        <input type="text" className="form-control" pattern="[a-z]+[0-9]+[+[a-z]+]"
                            defaultValue={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }} required />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Specific Location</label>
                        <input type="text" className="form-control"
                            defaultValue={location}
                            onChange={(e) => {
                                setLocation(e.target.value);
                            }} required />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <input type="text" className="form-control"
                            defaultValue={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }} required />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Specific Month</label>
                        <select className="form-control"
                            defaultValue={month}
                            onChange={(e) => {
                                setMonth(e.target.value);
                            }} required>
                            <option value="January" selected="selected">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Add Image</label>
                        <input type="file" className="form-control"
                            defaultValue={image}
                            onChange={(e) => {
                                setImage(e.target.files[0]);
                            }} required />
                    </div>

                    <br />
                    <button type="submit" className="submitbtn">Submit</button><br /><br />
                </form>
            </div>
        </div>
    )
}


export default CultureUpdateForm;