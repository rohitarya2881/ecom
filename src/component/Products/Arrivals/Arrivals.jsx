import img1 from "../../../assets/category/camera.png";
import img2 from "../../../assets/category/game.png";
import img3 from "../../../assets/category/headphones.png";
import img4 from "../../../assets/category/laptop.png";
import img5 from "../../../assets/category/phone.png";
import img6 from "../../../assets/category/watch.png";
import "../Product/NewArrival.css"
const Arrivals = () => {
  return (
    <>
      <div className="container gx-0 Arrivals">
        
        <div className="row gx-0 align-items-center Arrival_main">
          <div className="col-6">
            <div className="Arrivals_col1 text-center">
            
              <img
                src={img1}
                alt="Category"
                className="img-fluid"
                
              /></div></div>
              <div className="col-6">
                <div className="Arrivals_col2">
                   
                    <p className="Product_name">HeadPhones</p>
            <div className="icons">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="Product_price">$50</p>
                </div>
              </div>
            </div>
          </div>
    

    </>
  );
};

export default Arrivals;
