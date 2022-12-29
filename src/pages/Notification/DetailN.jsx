import { React, useState, useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBBreadcrumb, MDBBreadcrumbItem, MDBTypography } from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BsArrowLeft } from "react-icons/bs";
import ProfileLeft from "../../components/ProfileLeft";
import PhotoProfile from "../../components/PhotoProfile";

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
                <MDBBreadcrumbItem>
                  <a>Detail Notifikasi</a>
                </MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>

          <MDBCard>
            <MDBCardBody>
              <div className="mb-3">
                <a href="/notification">
                  <BsArrowLeft className="mx-1" />
                  back
                </a>
              </div>
              <MDBCard className="mb-3">
                <MDBCardBody>
                  <div className="d-flex flex-start">
                    <div className="w-100">
                      <div className=" justify-content-between align-items-center mb-3">
                        <MDBTypography>
                          <h5 className="fw-bold text-capitalize text-success"> {detailNotif.topic}</h5>
                          <h6 className="text-dark my-3">{detailNotif.message}</h6>
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
