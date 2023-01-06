import { MDBBreadcrumb, MDBBreadcrumbItem, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import ProfileLeft from "../../components/ProfileLeft";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import EditPhoto from "../../components/EditPhoto";

import "../../styles/signIn.css";

function EditUser() {
  const navigate = useNavigate();

  const { id } = useParams();

  const token = localStorage.getItem("token");

  const [countries, SetCountries] = useState([]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    balance: {},
  });

  const [biodata, setBiodata] = useState({
    nik: "",
    birth_place: "",
    birth_date: "",
    telp: "",
    nationality: "",
    no_passport: "",
    issue_date: "",
    expire_date: "",
  });

  const { name, email, balance } = user;
  const { nik, birth_place, birth_date, telp, nationality, no_passport, issue_date, expire_date } = biodata;

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   console.log(user);
  //   console.log(biodata);
  // }, [user, biodata]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: user.name,
      balance: Number(balance),
      nik: biodata.nik,
      birth_place: biodata.birth_place,
      birth_date: biodata.birth_date,
      telp: biodata.telp,
      nationality: biodata.nationality,
      no_passport: biodata.no_passport,
      issue_date: biodata.issue_date,
      expire_date: biodata.expire_date,
    };
    await axios
      .put(`${process.env.REACT_APP_BASE_URL}/api/user/${id}`, data, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => console.log(response))
      .then(() => {
        navigate(`/user/${id}`);
      });

    console.log(data);
  };

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

    const dataCountries = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/country`, {
      headers: {
        Authorization: `${token}`,
      },
    });

    SetCountries(dataCountries.data.data);
    // console.log(dataCountries.data.data);
  };

  return (
    <section>
      <MDBContainer className="d-block py-5">
        <MDBRow>
          <MDBCol lg="3" md="4">
            <MDBCard className="mb-4" style={{ width: "auto" }}>
              <EditPhoto />
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
                  <MDBBreadcrumbItem>
                    <a href="" className="text-decoration-none" onClick={() => navigate(`/user/${user.id}`)}>
                      Profile
                      {/* <a href="">Profile */}
                    </a>
                  </MDBBreadcrumbItem>
                  <MDBBreadcrumbItem>Edit Profile</MDBBreadcrumbItem>
                </MDBBreadcrumb>
              </MDBCol>
            </MDBRow>

            {localStorage.getItem("token") ? (
              <MDBCard className="mb-4" style={{ width: "auto" }}>
                <MDBCardBody>
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-4">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name" name="name" value={name} onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} required />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e) => setUser({ ...user, [e.target.email]: e.target.value })} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Balance</Form.Label>
                      <Form.Control type="number" placeholder="Enter balance" name="balance" value={balance} onChange={(e) => setUser({ ...user, [e.target.balance]: e.target.value })} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>NIK</Form.Label>
                      <Form.Control type="text" placeholder="Enter NIK" name="nik" value={nik} onChange={(e) => setBiodata({ ...biodata, nik: e.target.value })} required />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Birth Place</Form.Label>
                      <Form.Control type="text" placeholder="Enter Birth Place" name="birth_place" value={birth_place} onChange={(e) => setBiodata({ ...biodata, birth_place: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Birth Date</Form.Label>
                      <Form.Control type="date" placeholder="Enter Birth Date" name="birth_date" value={birth_date} onChange={(e) => setBiodata({ ...biodata, birth_date: e.target.value })} required />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Telp</Form.Label>
                      <Form.Control max="13" type="text" placeholder="Enter Telp" name="telp" value={telp} onChange={(e) => setBiodata({ ...biodata, telp: e.target.value })} required />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Nationality</Form.Label>
                      <Form.Select type="text" placeholder="Enter Nationality" name="nationality" value={nationality} onChange={(e) => setBiodata({ ...biodata, nationality: e.target.value })} required>
                        <option value="">Your Nationality</option>
                        {countries &&
                          countries?.length > 0 &&
                          countries.map((item, index) => (
                            <option value={item.id} key={index}>
                              {item.name}
                            </option>
                          ))}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>No Passport</Form.Label>
                      <Form.Control type="text" placeholder="Enter No Passport" name="no_passport" value={no_passport} onChange={(e) => setBiodata({ ...biodata, no_passport: e.target.value })} required />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Issue Date</Form.Label>
                      <Form.Control type="date" placeholder="Enter Issue Date" name="issue_date" value={issue_date} onChange={(e) => setBiodata({ ...biodata, issue_date: e.target.value })} required />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Expire Date</Form.Label>
                      <Form.Control type="date" placeholder="Enter Expire Date" name="expire_date" value={expire_date} onChange={(e) => setBiodata({ ...biodata, expire_date: e.target.value })} required />
                    </Form.Group>
                    <div className="text-center">
                      {/* <Button className="px-4" variant="success" type="submit">
                        Save
                      </Button> */}
                      <div className="signInFieldbutton">
                        <button className="signInFieldButton">Save</button>
                      </div>
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

export default EditUser;
