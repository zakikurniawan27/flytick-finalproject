import axios from "axios";
import { MDBBtn, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

function PhotoProfile() {
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
    // console.log(dataProfile.data.data);

    setPhoto(dataProfile.data.data.avatar);
    // console.log(dataProfile.data.data.avatar);
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
    </MDBCardBody>
  );
}

export default PhotoProfile;
