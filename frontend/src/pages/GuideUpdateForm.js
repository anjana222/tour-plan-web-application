import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "../firebase";
import "../styles/hashani/VehicleUpdateForm.css";

function GuideUpdateForm() {
  const [nic, setnic] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [bio, setBio] = useState("");
  const [languages, setLanguages] = useState("");
  const [fee, setfee] = useState("");
  const [image, setImage] = useState("");
  const [availability, setAvailability] = useState("");
  const [password, setPassword] = useState("");
  const [area, setArea] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const newGuide = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/guides/` + id)
      .then((res) => {
        const updateGuides = {
          nic: res.data.nic,
          name: res.data.name,
          gender: res.data.gender,
          phoneNo: res.data.phoneNo,
          bio: res.data.bio,
          languages: res.data.languages,
          fee: res.data.fee,
          image: res.data.image,
          availability: res.data.availability,
          password: res.data.password,
          area: res.data.area,
        };
        setnic(updateGuides.nic);
        setName(updateGuides.name);
        setGender(updateGuides.gender);
        setPhoneNo(updateGuides.phoneNo);
        setBio(updateGuides.bio);
        setLanguages(updateGuides.languages);
        setfee(updateGuides.fee);
        setImage(updateGuides.image);
        setAvailability(updateGuides.availability);
        setPassword(updateGuides.password);
        setArea(updateGuides.area);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    newGuide();
  }, []);

  return (
    <div className="VehicleUpdateFormMainCont" data-testid="vehicleupdateform">
      <h1>Update Guide Details</h1>
      <div className="VehicleUpdateFormCont">
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const imageRef = ref(
              storage,
              `images/guides/${name + image.name}`
            );

            uploadBytes(imageRef, image)
              .then(() => {
                console.log("Uploaded image");
              })
              .catch((err) => {
                console.log(err);
              });

            await getDownloadURL(
              ref(storage, `images/guides/${name + image.name}`)
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
                  availability,
                  password,
                  area,
                };

                axios
                  .put(
                    `${process.env.REACT_APP_BACKEND_URL}/guides/update/` + id,
                    newGuide
                  )
                  .then(() => {
                    alert("Guide updated successfully");
                    navigate("/editorDashboard/editorWebContent/guide");
                  })
                  .catch((err) => {
                    alert(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          <div className="form-group">
            <label className="form-label">NIC</label>
            <input
              type="text"
              className="form-control"
              minLength="10"
              maxLength="12"
              value={nic}
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
              value={name}
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
              value={gender}
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
              value={phoneNo}
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
            />

          <div className="form-group">
            <label className="form-label">Bio </label>
            <input
              type="textarea"
              className="form-control"
              value={bio}
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
              value={languages}
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
              value={fee}
              onChange={(e) => {
                setfee(e.target.value);
              }}
            />
          </div>
          
          </div>

        <div className="form-group">
            <label className="form-label">Availability</label>
            <select
              className="form-control"
              value={availability}
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
              value={password}
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
              value={area}
              onChange={(e) => {
                setArea(e.target.value);
              }}
              required
            />
          </div>
          <br />
          <button type="submit" className="submitbtn">
            Update Guide
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}

export default GuideUpdateForm;
