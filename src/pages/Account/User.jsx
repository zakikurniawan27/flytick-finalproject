import { React, useState, useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBBreadcrumb, MDBBreadcrumbItem } from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProfileLeft from "../../components/ProfileLeft";
import EditProfile from "../../components/EditProfile";
import Moment from "react-moment";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../styles/signIn.css";

export default function User() {
  const { id } = useParams();
  // console.log(id);

  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  const [biodata, setBiodata] = useState([]);

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

    setUser(dataProfile.data.data);
    // console.log(dataProfile.data.data);

    setBiodata(dataProfile.data.data.biodata);
    // console.log(dataProfile.data.data.biodata);
  };

  const formatRupiah = (angka) => {
    const rupiah = angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `Rp ${rupiah}`;
  };

  const balance = `${user.balance || <Skeleton />}`;
  const balanceRupiah = formatRupiah(balance);

  return (
    <section>
      {localStorage.getItem("token") ? (
        <MDBContainer className="d-block py-5">
          <MDBRow>
            <MDBCol lg="3" md="4">
              <MDBCard className="mb-4" style={{ width: "auto" }}>
                <EditProfile />
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
                    <MDBBreadcrumbItem>Profile</MDBBreadcrumbItem>
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
                      <MDBCardText className="text-muted">{user.name || <Skeleton />}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{user.email || <Skeleton />}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Role</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{user.role || <Skeleton />}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Balance</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{balanceRupiah}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>NIK</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{biodata.nik != null ? biodata.nik || <Skeleton /> : "-"}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Birth Place</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{biodata.birth_place != null ? biodata.birth_place || <Skeleton /> : "-"}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Birth Date</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <Moment format="DD MMMM YYYY">{biodata.birth_date}</Moment>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Telp</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{biodata.telp != null ? biodata.telp || <Skeleton /> : "-"}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Nationality</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{biodata.nationality != null ? biodata.nationality || <Skeleton /> : "-"}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>No Passport</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{biodata.no_passport != null ? biodata.no_passport || <Skeleton /> : "-"}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Issue Date</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <Moment format="DD MMMM YYYY">{biodata.issue_date != null ? biodata.issue_date || <Skeleton /> : "-"}</Moment>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Expire Date</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <Moment format="DD MMMM YYYY">{biodata.expire_date != null ? biodata.expire_date || <Skeleton /> : "-"}</Moment>
                      </MDBCardText>
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
