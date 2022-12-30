import { React, useState, useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBBtn, MDBBreadcrumb, MDBBreadcrumbItem, MDBTypography } from "mdb-react-ui-kit";
import { Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProfileLeft from "../../components/ProfileLeft";
import PhotoProfile from "../../components/PhotoProfile";
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
    <MDBContainer className="d-block py-5">
      <MDBRow>
        <MDBCol lg="3" md="4">
          <MDBCard className="mb-4" style={{ width: "auto" }}>
            <PhotoProfile />
          </MDBCard>

          <MDBCard className="mb-4 mb-lg-0" style={{ width: "auto" }}>
            <ProfileLeft />
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
                <MDBBreadcrumbItem>Notification</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>

          <MDBCard>
            <div className="d-flex justify-content-end px-3 pt-3">
              <MDBBtn color="tertiary" rippleColor="grey">
                <p onClick={handleReadAll}>Mark All As Read</p>
              </MDBBtn>
            </div>
            <>
              {notification &&
                notification?.length > 0 &&
                notification.map((result, index) => {
                  return (
                    <MDBCardBody key={index}>
                      <MDBCard className="mb-2" onClick={() => navigate(`/detail-notification/${result.id}`)}>
                        <MDBCardBody>
                          <div className="d-flex flex-start">
                            <div className="w-100">
                              <div className="d-flex justify-content-between align-items-center mb-3">
                                <MDBTypography tag="h5" className=" text-capitalize text-primary fw-bold mb-0">
                                  {result.topic}
                                  {result.is_read ? (
                                    <Badge className="ms-2" bg="success">
                                      Opened
                                    </Badge>
                                  ) : (
                                    <Badge className="ms-2" bg="danger">
                                      Unread
                                    </Badge>
                                  )}
                                </MDBTypography>
                              </div>
                              <h6 className="text-dark my-3">{result.message}</h6>
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
