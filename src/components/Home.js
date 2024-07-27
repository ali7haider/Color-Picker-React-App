// src/components/Home.js

import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  const [color, setColor] = useState("");
  const handleColor = () => {
    setColor(document.getElementById("color").value);
  };

  return (
    <div>
      <h1 style={{ color: `${color}`, marginTop: "20px" }}>Color Picker</h1>
      <MDBContainer className="py-5 d-flex align-items-center justify-content-center">
        <MDBRow>
          <MDBCol md="12">
            <center>
              <MDBCard style={{ backgroundColor: `${color}` }}>
                <MDBCardHeader className="py-3">
                  <h5 className="mb-0">Billing details</h5>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput
                        label="First name"
                        id="form1"
                        type="text"
                        floating
                      />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput
                        label="Last name"
                        id="form2"
                        type="text"
                        floating
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Address"
                    id="form3"
                    type="text"
                    floating
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="form4"
                    type="email"
                    floating
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Phone"
                    id="form5"
                    type="number"
                    floating
                  />
                  <MDBInput
                    wrapperClass="mb-4 always-focused"
                    label="Color Picker"
                    type="color"
                    id="color"
                    floating
                    className="color-picker-input"
                    style={{ padding: "10px 10px", height: "40px" }} // Adjust the height as needed
                  />
                  <MDBBtn size="lg" block onClick={handleColor}>
                    Change Color
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </center>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
