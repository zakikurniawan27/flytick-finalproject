import React from "react";
import { Card, ListGroup, Nav, Button, Form, Row, Col } from "react-bootstrap";
import profile from "../../assets/user.png";

import "../../styles/account.css";

function User() {
  return (
    <div className="profile">
      <div className="leftSide">
        <Card style={{ width: "18rem" }}>
          <div className="photos">
            <Card.Img variant="top" src={profile} />
          </div>
          <Card.Body className="user">
            <h4>John Watson</h4>
            <p>Yogyakarta, 18 Juni 1997</p>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Keluar dari akun</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <div className="rightSide">
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Ubah Profil</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav.Item> */}
              {/* <Nav.Item>
                <Nav.Link href="#disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Ubah Biodata Diri</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicNama">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="nama" placeholder="Nama Panjang" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicKelamin">
                <Form.Label>Kelamin</Form.Label>
                <Form.Select type="kelamin" placeholder="kelamin">
                  <option></option>
                  <option>Laki - Laki</option>
                  <option>Perempuan</option>
                </Form.Select>
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Tanggal Lahir</Form.Label>
                  <Form.Select type="tanggal">
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Bulan Lahir</Form.Label>
                  <Form.Select>
                    <option></option>
                    <option>Januari</option>
                    <option>Februari</option>
                    <option>Maret</option>
                    <option>April</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Tahun Lahir</Form.Label>
                  <Form.Select>
                    <option></option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <div className="buttonAcc">
                <Button variant="primary" type="submit">
                  Batal
                </Button>
                <Button variant="primary" type="submit">
                  Simpan
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default User;
