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
  MDBTypography,
} from "mdb-react-ui-kit";
import { Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useSelector } from "react-redux";

const Notification = () => {
  const [notification, setNotification] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/notification`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        setNotification(response.data.data);
      });
  }, []);

  const handleReadAll = () => {
    axios
      .put(
        `${process.env.REACT_APP_BASE_URL}/api/notification/read-all`,
        {},
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      });
    navigate(`/notification`);
  };

  return (
    <MDBContainer className="py-5">
      <MDBRow>
        <MDBCol lg="3" md="4">
          <MDBCard className="mb-4" style={{ width: "auto" }}>
            <MDBCardBody className="text-center">
              <MDBCardImage
                src="https://flytick-dev.up.railway.app/api/images/default.jpg"
                // src={photo.imagekit_url}
                // alt={profile.avatar_id}
                className="rounded-circle"
                style={{ width: "150px" }}
                fluid
              />
              {/* <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p> */}
              <div className="d-flex justify-content-center mb-2 mt-3">
                {/* <MDBBtn>Edit Profile</MDBBtn> */}
                {/* <MDBBtn outline className="ms-1" onClick={() => navigate(`/edit-user/${profile.id}`)}>
                  <MdEdit /> Edit Profile
                </MDBBtn> */}
              </div>
            </MDBCardBody>
          </MDBCard>

          <MDBCard className="mb-4 mb-lg-0" style={{ width: "auto" }}>
            <MDBCardBody className="p-0 text-center">
              <MDBListGroup flush className="rounded-3">
                <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                  <MDBIcon />
                  <MDBCardText>
                    <MDBCardLink>
                      {/* <FaUser className="mx-2" /> */}
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
                    <MDBCardLink>Notification</MDBCardLink>
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
                <MDBBreadcrumbItem active>Notification</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>

          <MDBCard>
            <div className="d-flex justify-content-end px-3 pt-3">
              <MDBBtn color="tertiary" rippleColor="light" onClick={handleReadAll}>
                Read All
              </MDBBtn>
            </div>
            <>
              {notification &&
                notification?.length > 0 &&
                notification.map((result, index) => {
                  return (
                    <MDBCardBody key={index}>
                      <MDBCard className="mb-3" onClick={() => navigate(`/detail-notification/${result.id}`)}>
                        <MDBCardBody>
                          <div className="d-flex flex-start">
                            <div className="w-100">
                              <div className="d-flex justify-content-between align-items-center mb-3">
                                <MDBTypography tag="h5" className="text-primary fw-bold mb-0">
                                  {result.topic}
                                  {result.is_read ? (
                                    <Badge className="ms-2" bg="success">
                                      Sudah Dibaca
                                    </Badge>
                                  ) : (
                                    <Badge className="ms-2" bg="danger">
                                      Belum Dibaca
                                    </Badge>
                                  )}

                                  <p className="text-dark my-3">{result.message}</p>
                                </MDBTypography>
                              </div>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCardBody>
                  );
                })}
            </>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Notification;
