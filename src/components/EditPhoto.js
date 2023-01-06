import axios from "axios";
import { MDBBtn, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function EditPhoto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [profile, setProfile] = useState([]);
  const [photo, setPhoto] = useState([]);

  const [show, setShow] = useState(false);
  const [imgCrop, setImgCrop] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   console.log(imgCrop);
  // }, [imgCrop]);

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

  const onCrop = (view) => {
    setImgCrop(view);

    // axios kirim gambar

    let imageData = new FormData();
    imageData.append("image", imgCrop);

    const data = {
      image: imageData,
    };

    axios
      .put(`${process.env.REACT_APP_BASE_URL}/api/image`, data, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => console.log(response))
      .then(() => {
        navigate(`/user/${id}`);
      });
  };

  let imgData = new FormData();

  const handleImg = async (e) => {
    imgData.append("image", e.target.files[0]);
  };

  const handleSubmit = async () => {
    await axios
      .put(`${process.env.REACT_APP_BASE_URL}/api/user/${id}`, imgData, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((data) => console.log(data))
      .then(() => {
        navigate(`/user/${id}`);
      });
  };

  return (
    <MDBCardBody className="text-center">
      <MDBCardImage
        alt={photo.filename || <Skeleton />}
        // src="https://flytick-dev.up.railway.app/api/images/default.jpg"
        src={photo.imagekit_url || <Skeleton />}
        className="rounded-circle"
        style={{ width: "150px" }}
        fluid
      />
      <div className="mt-2">
        <h5 className="text-capitalize">{profile.name || <Skeleton />}</h5>
        <p className="text-muted">{profile.email || <Skeleton />}</p>
      </div>
      <div className="d-flex justify-content-center mb-2 mt-3">
        <>
          <Button variant="outline-dark" onClick={handleShow}>
            Change Picture
          </Button>
          <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">Update Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <Form.Group className="mb-4">
                <Form.Label>Change Photo Profile</Form.Label>
                <Form.Control type="file" onChange={handleImg} />
              </Form.Group>{" "}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    </MDBCardBody>
  );
}

export default EditPhoto;
