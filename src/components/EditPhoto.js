import axios from "axios";
import { MDBBtn, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar-edit";
import { Button, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function EditPhoto(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [profile, setProfile] = useState([]);
  const [photo, setPhoto] = useState([]);

  const [show, setShow] = useState(false);
  const [imgCrop, setImgCrop] = useState(false);
  const [storeImg, setStoreImg] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const onCrop = (view) => {
    setImgCrop(view);
  };

  const onClose = () => {
    setImgCrop(null);
  };

  const saveImg = () => {
    setStoreImg([...storeImg, { imgCrop }]);
    setShow(false);
  };

  const profileImage = () => {};

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
        <>
          <Button variant="outline-dark" onClick={handleShow}>
            Change Picture
          </Button>
          <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">Update Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <Avatar width={400} height={300} onCrop={onCrop} onClose={onClose} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={saveImg}>
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
