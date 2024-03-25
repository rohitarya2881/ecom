import React from 'react';
import img1 from "../../../assets/blackheadphone.png";
import "../Banner/Banner.css";

const BestSells = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <div className="banner_col1 pt-md-4">
                  <h1>
                    Welcome <span>Deal</span> Your{" "}</h1>
                    <h3><span>Exclusive</span> Price</h3>
                  
                  <p>
                  "Terms & conditions apply. By accessing our site,

                   you agree to abide by our policies regarding electronic products.
                    Read carefully before proceeding with any purchase or transaction."
                  </p>
                  <div className="btn-box">
                <NavLink to="#" className="btn">Today Deal</NavLink>
                <NavLink to="#" className="btn">Sale</NavLink>
            </div>
                </div>
        </div>
        <div className="col-md-6">
          <img src={img1} alt="Black Headphone" className='img-fluid'/>
        </div>
      </div>
    </div>
  );
};

export default BestSells;
