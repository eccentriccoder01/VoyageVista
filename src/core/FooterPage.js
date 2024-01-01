import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const FooterPagePro = () => {
  return (
    <MDBFooter color="blue-grey" className="page-footer font-small lighten-5">
      <div className="bg-light" style={{background: `url('./image/Australia.jpg')`}}>
        <MDBContainer>
          <MDBRow className="py-3 align-items-center">
            <MDBCol className="text-center text-secondary">
              <h6 className="mb-1 font-weight-bold">Connect With Us</h6>
                <i className="fab fa-facebook-f mr-1"> </i>
                <i className="fab fa-twitter mr-1"> </i>
                <i className="fab fa-linkedin-in mr-1"> </i>
                <i className="fab fa-instagram mr-1"> </i>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mb-4 text-center">
        <MDBRow className="mt-4">
          <MDBCol className="mb-4 dark-grey-text">
            <h6 className="font-weight-bold">
              <span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "70px" }} />
            <p className="text-justify">
            <span style={{ fontWeight: 'bold', fontFamily: 'Copperplate Gothic Light' }}>VoyageVista</span> doesn't just represent a travel website; it embodies the unison of globetrotters and seasoned travel maestros on a single digital stage. We've crafted a virtual haven where adventurers and travel connoisseurs converge. It's more than a travel marketplace; it's a journey reimagined.            </p>
          </MDBCol>
          <MDBCol className="dark-grey-text">
            <h6 className="text-uppercase">
              <strong>Services</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <Link to="/shop" className="dark-grey-text">
                Places
              </Link>
            </p>
            <p>
              <Link to="/gallery" className="dark-grey-text">
                Gallery
              </Link>
            </p>
            <p>
              <Link to="/team" className="dark-grey-text">
                Our Developers
              </Link>
            </p>
            <p>
              <Link to="/about" className="dark-grey-text">
                About Us
              </Link>
            </p>
            <p>
              <Link to="./../user/dashboard" className="dark-grey-text">
                Your Account
              </Link>
            </p>
            <p>
              <Link to="/cart" className="dark-grey-text">
                Wishlist
              </Link>
            </p>
            <p>
              <Link to="/contact" className="dark-grey-text">
                Contact Us
              </Link>
            </p>
          </MDBCol>
          <MDBCol  className="dark-grey-text">
            <p><i className="fa fa-thumb-tack mr-2" /><i>(Imaginary Office)</i></p>
            <p><i className="fa fa-envelope mr-2" /> info@voyagevista.com<i>(non-existent)</i></p>
            <p><i className="fa fa-phone mr-2" /> + 01 234 567 88<i>(non-existent)</i></p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-2 bg-light text-dark">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} :{" "}
          <a href="https://github.com/eccentriccoder01" style={{ color: 'blue' }}> www.VoyageVista.com<i>(non-existent)</i></a> All Rights Reserved.
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;