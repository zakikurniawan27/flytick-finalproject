import axios from "axios";
import { MDBBtn, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

function EditProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [profile, setProfile] = useState([]);
  const [photo, setPhoto] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const dataProfile = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/user/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    setProfile(dataProfile.data.data);
    setPhoto(dataProfile.data.data.avatar);
  };

  return (
    <MDBCardBody className="text-center">
      <MDBCardImage
        alt={photo.filename}
        // src="https://flytick-dev.up.railway.app/api/images/default.jpg"
        src={photo.imagekit_url}
        className="rounded-circle"
        style={{ width: "150px" }}
        fluid
      />
      <div className="mt-2">
        <h5 className="text-capitalize">{profile.name}</h5>
        <p className="text-muted">{profile.email}</p>
      </div>
      <div className="d-flex justify-content-center mb-2 mt-3">
        <MDBBtn outline className="ms-1" onClick={() => navigate(`/edit-user/${profile.id}`)}>
          <MdEdit className="mb-1" /> Edit Profile
        </MDBBtn>
      </div>
    </MDBCardBody>
  );
}

export default EditProfile;
