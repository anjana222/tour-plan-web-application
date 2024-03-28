import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../firebase";
import "../styles/hashani/VehicleForm.css";

function GuideForm() {
  const [nic, setnic] = useState("");
  const [name, setName] = useState("Car");
  const [gender, setGender] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const [bio, setBio] = useState("");
  const [languages, setLanguages] = useState("");
  const [fee, setfee] = useState("");
  const [image, setImage] = useState("");
  const [availability, setAvailability] = useState("");
  const [password, setPassword] = useState("");
  const [area, setArea] = useState("");

  const navigate = useNavigate();

  return (
    <div className="VehicleFormMainCont" data-testid="guideform">
      <h1>Add Guide Details</h1>
      <div className="VehicleFormCont">
        <br />
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            //image
            const imageRef = ref(
              storage,
              `images/guides/${name + image.name}`
            );

            await uploadBytes(imageRef, image)
              .then(() => {
                console.log("Uploaded image");
              })
              .catch((err) => {
                console.log(err);
              });

            await getDownloadURL(ref(storage, `images/guides/${name + image.name}`)
            )
              .then((url) => {
                console.log(url);
                
                const newGuide = {
                  nic,
                  name,
                  gender,
                  phoneNo,
                  bio,
                  languages,
                  fee,
                  image: url,
                  availability,
                  password,
                  area,
                };

                axios
                  .post(`${process.env.REACT_APP_BACKEND_URL}/guides/create`, newGuide)
                  .then(() => {
                    alert("Guide Content added successfully");
                    navigate("/editorDashboard/editorWebContent/guide");
                  })
                  .catch((err) => {
                    alert("Error adding Guide Content");
                    console.log(err);
                    console.log(process.env.REACT_APP_BACKEND_URL);
                    console.log(newGuide);//

                  });
              })
              .catch((err) => {
                console.log(err);
              });
            //
          }}
        >
          <div className="form-group">
            <label className="form-label">NIC</label>
            {/* <select className="form-control" onChange={(e) => {
                        settype(e.target.value);
                    }} required> 
                        <option value = "Taxi" selected = "selected">Taxi</option>
                        <option value = "Rent-a-Car">Rent-a-Car</option>
                    </select> */}
            <input
              type="text"
              className="form-control"
              minLength="10"
              maxLength="12"
              onChange={(e) => {
                setnic(e.target.value);
              }}
              required
            />
          </div>

          <div className="form-group">
          <label className="form-label">Name</label>
            
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            </div>

          <div className="form-group">
            <label className="form-label">Gender</label>
            <select
              className="form-control"
              pattern="[a-z,A-Z,0-9 ]{3,}"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              pattern="[0-9]{10}"
              onChange={(e) => {
                setphoneNo(e.target.value);
              }}
            />

          <div className="form-group">
            <label className="form-label">Bio </label>
            <input
              type="textarea"
              className="form-control"
              onChange={(e) => {
                setBio(e.target.value);
              }}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Languages</label>
            <input
              type="text"
              className="form-control"
              patter="[a-z,A-Z ]{3,}"
              onChange={(e) => {
                setLanguages(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Fee</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setfee(e.target.value);
              }}
            />
          </div>
          
          </div>

          <div className="form-group">
            <label className="form-label">Add Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              required
            />
          </div>

          {/* <div className="form-group">
            <label className="form-label">Fee</label>
            <input
              type="text"
              className="form-control"
              pattern="[0-9]{1,}"
              onChange={(e) => {
                setfee(e.target.value);
              }}
              required
            />
          </div> */}

        <div className="form-group">
            <label className="form-label">Availability</label>
            <select
              className="form-control"
              onChange={(e) => {
                setAvailability(e.target.value);
              }}
              required
            >
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>

          <div className="form-group">
          <label className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              minLength="10"
              maxLength="12"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            </div>
            
          <div className="form-group">
            <label className="form-label">Area</label>
            <input
              type="text"
              className="form-control"
              pattern="[a-z,A-Z ]{3,}"
              onChange={(e) => {
                setArea(e.target.value);
              }}
              required
            />
          </div>

          <br />
          <button type="submit" className="submitbtn">
            Add Guide
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default GuideForm;
