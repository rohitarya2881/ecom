import React from "react";
import { useState } from "react";

import img1 from "../../../assets/category/camera.png";
import "./singleproduct.css";

const Singleproduct = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* First Column with Picture */}
        <div className="col-md-6 product-img">
          <img src={img1} className="img-fluid" alt="Product Image" />
        </div>
        {/* Second Column with Product Details */}
        <div className="col-md-6">
          <div className="row mb-3">
            <div className="col product-name">HeadPhone xyzz</div>
          </div>
          <div className="row mb-3">
            <div className="col product-price">$ 60</div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
                consequuntur eligendi. Amet minus, rem suscipit corrupti
                consectetur quidem deleniti odio molestiae porro debitis quasi
                maxime, ut facere! Suscipit aliquid aut dolorem quod rem placeat
                inventore!
              </p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col cart-incre-decre">
              <button className="btn btn-primary me-2" onClick={increment}>
                +
              </button>
              <span className="total-cart">{count}</span>
              <button className="btn btn-primary ms-2" onClick={decrement}>
                -
              </button>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col add-cart">
              <button className="btn">Add to Cart</button>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col buy-now">
              <button className="btn">Buy Now</button>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col category">
              <h4>Category:</h4>
              <div className="category-name">fkljfdasd</div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col brand">
              <h4>Brand:</h4>
              <div className="brand-name">adsfhjkadsf</div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col share-icon">
              <h4>Share:</h4>
              <div className="icons">
              <i class="fa-brands fa-whatsapp"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-facebook"></i>
              </div>
       
              {/* Add more icons as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
