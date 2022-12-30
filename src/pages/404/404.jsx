import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import NotFound from "../../assets/404.png";

function PatRatus() {
  return (
    <MDBContainer>
      <div className="text-center justify-content-center align-items-center">
        <h3>Page Not Found</h3>
        <img src={NotFound} width="400" />
      </div>
    </MDBContainer>
  );
}

export default PatRatus;
