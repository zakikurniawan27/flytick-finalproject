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
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DetailN = () => {
  const { id } = useParams();
  const [detailNotif, setDetailNotif] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/notification/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        // console.log(response);
        setDetailNotif(response.data.data);
      });
    axios
      .put(
        `${process.env.REACT_APP_BASE_URL}/api/notification/${id}/read`,
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
  }, []);

  return (
    <MDBContainer className="py-5">
      <MDBRow>
        <MDBCol lg="3" md="4">
          {/* Photo Profile */}
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
          {/* Href */}
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
        {/* BreadCrumb */}
        <MDBCol lg="9" md="8">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className=" rounded-3 p-3 mb-4" style={{ backgroundColor: "#eee" }}>
                <MDBBreadcrumbItem>
                  <a href="/">Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <a href="/notification">Notification</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>
                  <a>Detail Notifikasi</a>
                </MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>

          <MDBCard>
            <MDBCardBody>
              <MDBCard className="mb-3">
                <MDBCardBody>
                  <div className="d-flex flex-start">
                    <div className="w-100">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <MDBTypography tag="h5" className="text-primary fw-bold mb-0">
                          {detailNotif.topic}
                          <p className="text-dark my-3">{detailNotif.message}</p>
                        </MDBTypography>
                      </div>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default DetailN;
