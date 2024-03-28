import img1 from "../../../assets/category/camera.png";
import img2 from "../../../assets/carticon.png";

import "./Product.css"
const Product = () => {
  return (
    
    
  
      <div className="Product_main">
        <div className="col">
        <div className="card border-0 h-100">
          
            <img src={img1} alt=""/>

          
          <div className="card-body">
            <h5 className="Product_name">HeadPhones</h5>
            <div className="icons">
              <div className="icons-star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              </div>
              <i className="fa fa-cart-plus cart" aria-hidden="true"></i>

            </div>
            <p className="Product_price">$70</p>

          </div>
        </div></div>
      </div>
   


      
    
  );
};

export default Product;
