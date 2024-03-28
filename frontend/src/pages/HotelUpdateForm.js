import axios from 'axios';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { storage } from '../firebase';
import '../styles/hashani/HotelUpdateForm.css';

function HotelUpdateForm() {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [stars, setStars] = useState('');
    const [facilities, setFacilities] = useState('');
    const [images, setImages] = useState('');

    const { id } = useParams();

    const getHotel = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/hotels/` + id).then((res) => {
            /*const updateHotelDetails={
                name: res.data.name,
                location: res.data.location,
                price: res.data.price,
                description: res.data.description,
                stars: res.data.stars,
                facilities: res.data.facilities,
                images: res.data.images,

            }*/
            setName(res.data.name);
            setLocation(res.data.location);
            setPrice(res.data.price);
            setDescription(res.data.description);
            setStars(res.data.stars);
            setFacilities(res.data.facilities);
            setImages(res.data.images);
        })
            .catch((err) => {
                alert(err.message);
            });
    }

    useEffect(() => getHotel(), []); // RUns everytime page opens

    return (
        <div className='HotelUpdateFormMainCont' data-testid="hotelupdateform">
            <h1>Update Hotel Content</h1>
            <div className="HotelUpdateFormCont">
                <form onSubmit={async (e) => {
                    e.preventDefault();

                    const imageRef = ref(storage, `images/hotel/${name + images.name}`);

                    uploadBytes(imageRef, images)
                        .then(() => {
                            console.log('Uploaded image');
                        }).catch((err) => {
                            console.log(err);
                        });

                    await getDownloadURL(ref(storage, `images/hotel/${name + images.name}`))
                        .then((url) => {
                            console.log(url);
                            const newHotel = {
                                name,
                                location,
                                price,
                                description,
                                stars,
                                facilities,
                                // images: url
                            }

                            axios.put(`${process.env.REACT_APP_BACKEND_URL}/hotels/update/` + id, newHotel)
                                .then(() => {
                                    alert("Hotel Content updated successfully");
                                }).catch((err) => {
                                    alert(err);
                                })
                        }).catch((err) => {
                            console.log(err);
                        });

                }}>

                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Location</label>
                        <input type="text" className="form-control" value={location}
                            onChange={(e) => {
                                setLocation(e.target.value);
                            }} required />
                    </div>
                    {/* <div className="form-group">
                        <label className="form-label">Price</label>
                        <input type="number" className="form-control" value={price}
                            onChange={(e) => {
                                setPrice(e.target.value);
                            }} required />
                    </div> */}
                    <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea rows={3} type="text" className="form-control" value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Stars</label>
                        <input type="number" className="form-control" value={stars} min="1" max="5"
                            onChange={(e) => {
                                setStars(e.target.value);
                            }} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Facilities</label>
                        <textarea rows={3} type="text" className="form-control" value={facilities}
                            onChange={(e) => {
                                setFacilities(e.target.value);
                            }} required />
                    </div>
                    {/* <div className="form-group">
                        <label className="form-label">Images</label>
                        <input type="file" className="form-control"
                            onChange={(e) => {
                                setImages(e.target.files[0]);
                            }} required />
                    </div> */}
                    <br />
                    <button type="submit" className="btn btn-dark">Submit</button><br /><br />
                </form>
            </div>
        </div>
    )
}

export default HotelUpdateForm;