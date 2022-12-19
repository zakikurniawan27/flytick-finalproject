import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBBreadcrumb, MDBBreadcrumbItem, MDBIcon, MDBListGroup, MDBListGroupItem, MDBCardLink, MDBInput } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { Button, Form } from "react-bootstrap";

export default function User() {
  const navigate = useNavigate();
  return (
    <section>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="3" md="4">
            <MDBCard className="mb-4" style={{ width: "auto" }}>
              <MDBCardBody className="text-center">
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle" style={{ width: "150px" }} fluid />

                <div className="d-flex justify-content-center mb-2 mt-3">
                  <MDBBtn outline className="ms-1" onClick={() => navigate("/edit-user")}>
                    <MdEdit /> Select Image
                  </MDBBtn>
                </div>
                <p className="text-muted mb-1">File size: maximum 1 MB</p>
                <p className="text-muted mb-4">File extension: .JPEG, .PNG</p>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0" style={{ width: "auto" }}>
              <MDBCardBody className="p-0 text-center">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                    <MDBIcon />
                    <MDBCardText>
                      <MDBCardLink onClick={() => navigate("/user")}>
                        <FaUser className="mx-2" />
                        Profile
                      </MDBCardLink>
                    </MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                    <MDBIcon />
                    <MDBCardText>
                      <MDBCardLink onClick={() => navigate("/")}>
                        <BsBellFill className="mx-2" />
                        Notification
                      </MDBCardLink>
                    </MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                    <MDBIcon />
                    <MDBCardText>
                      <MDBCardLink>-</MDBCardLink>
                    </MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                    <MDBIcon />
                    <MDBCardText>
                      <MDBCardLink>-</MDBCardLink>
                    </MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="9" md="8">
            <MDBRow>
              <MDBCol>
                <MDBBreadcrumb className=" rounded-3 p-3 mb-4" style={{ backgroundColor: "#eee" }}>
                  <MDBBreadcrumbItem>
                    <a href="/">Home</a>
                  </MDBBreadcrumbItem>
                  <MDBBreadcrumbItem>
                    <a href="/user">Profile</a>
                  </MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active>Edit Profile</MDBBreadcrumbItem>
                </MDBBreadcrumb>
              </MDBCol>
            </MDBRow>
            <MDBCard className="mb-4" style={{ width: "auto" }}>
              <MDBCardBody>
                <form>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <div className="text-center">
                    <Button className="px-4" variant="success" type="submit">
                      Submit
                    </Button>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
