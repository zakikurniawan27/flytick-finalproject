import { MDBCardBody, MDBCardLink, MDBCardText, MDBIcon, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Dropdown } from "react-bootstrap";

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
        <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3" onClick={() => navigate(`/user/${profile.id}`)}>
          <Dropdown.Item>
            <a className="text-decoration-none">Profile</a>
          </Dropdown.Item>
        </MDBListGroupItem>
        <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
          <Dropdown.Item onClick={() => navigate(`/notification`)}>
            <a href="" className="text-decoration-none">
              Notification
            </a>
          </Dropdown.Item>
        </MDBListGroupItem>
      </MDBListGroup>
    </MDBCardBody>
  );
}

export default ProfileLeft;
