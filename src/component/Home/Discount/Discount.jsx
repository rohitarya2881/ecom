import React from 'react'
import img1 from "../../../assets/blackheadphone.png";

import { NavLink } from "react-router-dom";
import "./Discount.css"
const Discount = () => {
  return (
    <div>

<div className="container Discount">
      <div className="row align-items-center">
        <div className="col-md-7">
        <div className="banner_col1 pt-md-4">
                  <h1>
                    Big  <span>Discount</span> </h1>
                    <h3><span>Special Offer on </span>WishList</h3>
                  
                  <p>
                  "Terms & conditions apply. By accessing our site,

                   you agree to abide by our policies regarding electronic products.
                    Read carefully before proceeding with any purchase or transaction."
                  </p>
                  <div className="btn-box">
                <NavLink to="#" className="btn">Buy Now</NavLink>
                <NavLink to="#" className="btn">Add to Cart</NavLink>
            </div>
                </div>
        </div>
        <div className="col-md-5">
          <img src={img1} alt="Black Headphone" className='img-fluid'/>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Discount