import { MDBCardBody, MDBCardLink, MDBCardText, MDBIcon, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ProfileLeft() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [profile, setProfile] = useState([]);

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
  };
  return (
    <MDBCardBody className="p-0 text-center">
      <MDBListGroup flush className="rounded-3">
        <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
          <MDBCardText>
            <MDBCardLink onClick={() => navigate(`/user/${profile.id}`)}>Profile</MDBCardLink>
          </MDBCardText>
        </MDBListGroupItem>
        <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
          <MDBCardText>
            <MDBCardLink onClick={() => navigate(`/notification`)}>Notification</MDBCardLink>
          </MDBCardText>
        </MDBListGroupItem>
      </MDBListGroup>
    </MDBCardBody>
  );
}

export default ProfileLeft;
