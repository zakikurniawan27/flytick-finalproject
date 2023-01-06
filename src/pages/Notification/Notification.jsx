import { React, useState, useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBBtn, MDBBreadcrumb, MDBBreadcrumbItem, MDBTypography } from "mdb-react-ui-kit";
import { Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProfileLeft from "../../components/ProfileLeft";
import PhotoProfile from "../../components/PhotoProfile";
import Pagination from "../../components/Pagination";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../styles/signIn.css";

const Notification = () => {
  const [notification, setNotification] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const getNotif = (no) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/notification`, {
        headers: {
          Authorization: `${token}`,
        },
        params: {
          page: no,
        },
      })
      .then((response) => {
        setNotification(response.data);
      });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = `${notification?.pagination?.totalPages}`;

  useEffect(() => {
    getNotif(currentPage);
  }, [currentPage]);

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
        // console.log(response);
      });
    window.location.reload();
    // navigate(`/notification`);
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
              <MDBBreadcrumb className="BC rounded-3 p-3 mb-4" style={{ backgroundColor: "#eee" }}>
                <MDBBreadcrumbItem>
                  <a href="/" className="text-decoration-none">
                    Home
                  </a>
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
              <Button variant="light">
                <p onClick={handleReadAll}>Mark All As Read</p>
              </Button>
            </div>
            <>
              {(notification &&
                notification?.data?.length > 0 &&
                notification?.data?.map((result, index) => {
                  return (
                    <MDBCardBody key={index}>
                      <MDBCard className="mb-2">
                        <MDBCardBody>
                          <div className="d-flex flex-start">
                            <div className="w-100">
                              <div className="d-flex justify-content-between align-items-center mb-3">
                                <MDBTypography tag="h5" className=" text-capitalize text-primary fw-bold mb-0">
                                  {result.topic || <Skeleton />}
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
                              {/* <h6 className="text-dark mt-3 mb-4">{result.message || <Skeleton />}</h6> */}
                            </div>
                            <div className=" position-absolute bottom-0 end-0 mx-3 my-1">
                              <a href="" onClick={() => navigate(`/detail-notification/${result.id}`)} className="text-decoration-none">
                                Detail
                              </a>
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCardBody>
                  );
                })) || <Skeleton />}
            </>
            <div className="d-flex justify-content-center">
              <Pagination currentPage={currentPage} totalPage={totalPage} setCurrentPage={setCurrentPage} />
            </div>{" "}
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Notification;
