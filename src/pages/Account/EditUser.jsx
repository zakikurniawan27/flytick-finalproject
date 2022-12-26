import { React, useEffect, useState } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBBreadcrumb, MDBBreadcrumbItem, MDBIcon, MDBListGroup, MDBListGroupItem, MDBCardLink, MDBInput } from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

export default function User() {
  const { id } = useParams();

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // const [profile, setProfile] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nik, setNIK] = useState("");
  const [birth_place, setBirthPlace] = useState("");
  const [birth_date, setBirthDate] = useState("");
  const [telp, setTelp] = useState("");
  const [nationality, setNationality] = useState("");
  const [no_passport, setNoPassport] = useState("");
  const [issue_date, setIssueDate] = useState("");
  const [expire_date, setExpireDate] = useState("");

  // useEffect(() => {
  //   editData();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Name is required");
      return;
    }
    // if (email === "") {
    //   alert("email is required");
    //   return;
    // }
    if (nik === "") {
      alert("email is required");
      return;
    }
    if (birth_place === "") {
      alert("birth place is required");
      return;
    }
    if (birth_date === "") {
      alert("birth date is required");
      return;
    }
    if (telp === "") {
      alert("telp is required");
      return;
    }
    if (nationality === "") {
      alert("nationality is required");
      return;
    }
    if (no_passport === "") {
      alert("no passport is required");
      return;
    }
    if (issue_date === "") {
      alert("issue date is required");
      return;
    }
    if (expire_date === "") {
      alert("expire date is required");
      return;
    }
    if (name !== "" && nik !== "nik" && birth_place !== "" && birth_date !== "" && telp !== "" && nationality !== "" && no_passport !== "" && issue_date !== "" && expire_date !== "") {
      const data = {
        name,
        nik,
        birth_place,
        birth_date,
        telp,
        nationality,
        no_passport,
        issue_date,
        expire_date,
      };
      try {
        // const editData = async () =>
        await axios.put(`${process.env.REACT_APP_BASE_URL}/api/user/${id}`, data, {
          headers: {
            Authorization: `${token}`,
          },
        });
      } catch (error) {
        alert(error.response.data.message);
        console.log(error.response.data);
      }
    }
  };

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
                    <a>Profile</a>
                  </MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active>Edit Profile</MDBBreadcrumbItem>
                </MDBBreadcrumb>
              </MDBCol>
            </MDBRow>

            {localStorage.getItem("token") ? (
              <MDBCard className="mb-4" style={{ width: "auto" }}>
                <MDBCardBody>
                  <form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>NIK</Form.Label>
                      <Form.Control type="text" placeholder="Enter NIK" value={nik} onChange={(e) => setNIK(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Birth Place</Form.Label>
                      <Form.Control type="text" placeholder="Enter Birth Place" value={birth_place} onChange={(e) => setBirthPlace(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Birth Date</Form.Label>
                      <Form.Control type="date" placeholder="Enter Birth Date" value={birth_date} onChange={(e) => setBirthDate(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Telp</Form.Label>
                      <Form.Control type="text" placeholder="Enter Telp" value={telp} onChange={(e) => setTelp(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Nationality</Form.Label>
                      <Form.Control type="text" placeholder="Enter Nationality" value={nationality} onChange={(e) => setNationality(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>No Passport</Form.Label>
                      <Form.Control type="text" placeholder="Enter No Passport" value={no_passport} onChange={(e) => setNoPassport(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Issue Date</Form.Label>
                      <Form.Control type="date" placeholder="Enter Issue Date" value={issue_date} onChange={(e) => setIssueDate(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Expire Date</Form.Label>
                      <Form.Control type="date" placeholder="Enter Expire Date" value={expire_date} onChange={(e) => setExpireDate(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Edit Photo Profile</Form.Label>
                      <Form.Control type="file" placeholder="Enter Expire Date" value={expire_date} onChange={(e) => setExpireDate(e.target.value)} required />
                    </Form.Group>

                    <div className="text-center">
                      <Button className="px-4" variant="success" type="submit">
                        Save
                      </Button>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            ) : (
              alert("Edit Profile error!!")
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
