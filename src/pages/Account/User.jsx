import { React, useState, useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardLink,
  MDBAccordion,
  MDBAccordionItem,
} from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import axios from "axios";

export default function User() {
  const { id } = useParams();
  // console.log(id);

  const navigate = useNavigate();

  const [profile, setProfile] = useState([]);
  const [biodata, setBiodata] = useState([]);
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

    setBiodata(dataProfile.data.data.biodata);
    // console.log(dataProfile.data.data.biodata);
  };

  return (
    <section>
      {localStorage.getItem("token") ? (
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="3" md="4">
              <MDBCard className="mb-4" style={{ width: "auto" }}>
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    alt={photo.filename}
                    // src="https://flytick-dev.up.railway.app/api/images/default.jpg"
                    src={photo.imagekit_url}
                    // alt={profile.avatar_id}
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  {/* <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p> */}
                  <div className="d-flex justify-content-center mb-2 mt-3">
                    {/* <MDBBtn>Edit Profile</MDBBtn> */}
                    <MDBBtn outline className="ms-1" onClick={() => navigate(`/edit-user/${profile.id}`)}>
                      <MdEdit /> Edit Profile
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4 mb-lg-0" style={{ width: "auto" }}>
                <MDBCardBody className="p-0 text-center">
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                      <MDBIcon />
                      <MDBCardText>
                        <MDBCardLink onClick={() => navigate(`/user/${profile.id}`)}>
                          <FaUser className="mx-2" />
                          Profile
                        </MDBCardLink>
                      </MDBCardText>
                    </MDBListGroupItem>
                    {/* <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                      <BsBellFill className="mx-2" />
                      <MDBAccordion flush>
                        <MDBAccordionItem collapseId={2} headerTitle="Notification">
                          <MDBCardText>
                            <MDBCardLink>All Notification</MDBCardLink>
                          </MDBCardText>
                          <MDBCardText>
                            <MDBCardLink>All Notification</MDBCardLink>
                          </MDBCardText>
                        </MDBAccordionItem>
                      </MDBAccordion>
                    </MDBListGroupItem> */}
                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                      <MDBIcon />
                      <MDBCardText>
                        <MDBCardLink onClick={() => navigate(`/notification`)}>Notification</MDBCardLink>
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
                    {/* <MDBBreadcrumbItem>
                    <a href="#">User</a>
                  </MDBBreadcrumbItem> */}
                    <MDBBreadcrumbItem active>Profile</MDBBreadcrumbItem>
                  </MDBBreadcrumb>
                </MDBCol>
              </MDBRow>
              <MDBCard className="mb-4" style={{ width: "auto" }}>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{profile.name}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {/* example@example.com */}
                        {profile.email}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Role</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{profile.role}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>NIK</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{biodata.nik}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Birth Place</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{biodata.birth_place}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Birth Date</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{biodata.birth_date}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Telp</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{biodata.telp}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Nationality</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{biodata.nationality}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>No Passport</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{biodata.no_passport}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Issue Date</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{biodata.issue_date}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Expire Date</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{biodata.expire_date}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      ) : (
        navigate("/")
      )}
    </section>
  );
}
