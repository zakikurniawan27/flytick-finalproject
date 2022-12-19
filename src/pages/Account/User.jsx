import { React, useState } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBBreadcrumb, MDBBreadcrumbItem, MDBIcon, MDBListGroup, MDBListGroupItem, MDBCardLink } from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { useEffect } from "react";
import axios from "axios";

export default function User(props) {
  const { id } = useParams();
  // console.log(id);

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
    <section>
      {localStorage.getItem("token") ? (
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="3" md="4">
              <MDBCard className="mb-4" style={{ width: "auto" }}>
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    // src={profile.avatar_id}
                    alt={profile.avatar_id}
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  {/* <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p> */}
                  <div className="d-flex justify-content-center mb-2 mt-3">
                    {/* <MDBBtn>Edit Profile</MDBBtn> */}
                    <MDBBtn outline className="ms-1" onClick={() => navigate("/edit-user")}>
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
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {/* Johnatan Smith */}
                        {profile.name}
                      </MDBCardText>
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
