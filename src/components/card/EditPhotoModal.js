import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Avatar from "react-avatar-edit";

function EditPhotoModal(props) {
  const [show, setShow] = useState(false);
  const [imgCrop, setImgCrop] = useState(false);
  const [storeImg, setStoreImg] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onCrop = (view) => {
    setImgCrop(view);
  };

  const onClose = () => {
    setImgCrop(null);
  };

  const saveImg = () => {
    setStoreImg([...storeImg, { imgCrop }]);
  };

  return (
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
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditPhotoModal;
