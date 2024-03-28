import React from "react";
import logo from "../../assets/elogo.png";
import "./Footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="container gx-0">
        <div className="row gx-0">
          <div className="col-md-3">
            <div className="footer_col1">
              <img src={logo} alt="" className="img-fluid logo" />
              <div className="ft-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <p>@2024 ©️ All Rights Reserved</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer_col2"> 
            <ul>
                <h4>Get To Know Us</h4>
            <li className="footer-link list-unstyled">
                <NavLink  to="#"  >
                  About Us
                </NavLink>
              </li>
              <li className="footer-link list-unstyled">
                <NavLink  to="#"  >
                 News & Blog
                </NavLink>
              </li>
              <li className="footer-link list-unstyled">
                <NavLink  to="#" >
                  Careers
                </NavLink>
              </li>
              <li className="footer-link list-unstyled">
                <NavLink  to="#">
                  Contact Us
                </NavLink>
              </li>
              <li className="footer-link list-unstyled">
                <NavLink  to="#"  >
                  Customer Support
                </NavLink>
              </li>
           
            </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer_col3"> 
            
            {/* ********* */}

            <div className="footer_col2"> 
            <ul>
                <h4>Order & Returns</h4>
            <li className="footer-link list-unstyled">
                <NavLink  to="#"  >
                  Shopping & Delivery
                </NavLink>
              </li>
              <li className="footer-link list-unstyled">
                <NavLink  to="#"  >
                 Return & Exchange
                </NavLink>
              </li>
              <li className="footer-link list-unstyled">
                <NavLink  to="#" >
                  Sales
                </NavLink>
              </li>
              <li className="footer-link list-unstyled">
                <NavLink  to="#">
                 Payment
                </NavLink>
              </li>
              <li className="footer-link list-unstyled">
                <NavLink  to="#"  >
                  Track Order
                </NavLink>
              </li>
           
            </ul>
            </div>

            {/* ********** */}
            
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer_col4">
                {/* ********* */}

                <div className="footer_col2"> 
            <ul>
                <h4>Contact Us</h4>
            <li className="footer-link list-unstyled">
                <NavLink  to="#"  >
                <i className="fa-solid fa-phone"></i>1234-1234-1234
                </NavLink>
              </li>
              <li className="footer-link list-unstyled"><NavLink  to="#"  ><i className="fa-regular fa-paper-plane"></i>abbcdef@exampl.com
                </NavLink>
              </li>
              <li className="footer-link list-unstyled">
                <NavLink  to="#" >
                <i className="fa-solid fa-location-dot"></i>Sector 36 , Gurugram
                </NavLink>
              </li>
           
           
            </ul>
            </div>


                {/* *************** */}
                
                
                 </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
