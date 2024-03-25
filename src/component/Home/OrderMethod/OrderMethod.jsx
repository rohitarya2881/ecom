import "./OrderMethod.css";
import img1 from "../../../assets/ship.png";

import img2 from "../../../assets/payment.png";

import img3 from "../../../assets/customersupport.png";

const OrderMethod = () => {
  return (
    <>
      <div className="Order py-5">
        <div className="container gx-0">
          <div className="row ">
            <div className="col-md-4 col-4">
              <div className="order_col1">
                <img src={img1} alt="" className="img-fluid"></img>
                <h5 className="py-2">Free Shipping</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam deserunt, culpa et repellat voluptatibus eaque quam
                  iste voluptas animi dolor?
                </p>
              </div>
            </div>
            <div className="col-md-4 col-4">
              <div className="order_col1">
                <img src={img2} alt="" className="img-fluid"></img>
                <h5 className="py-2">Online Payment</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam deserunt, culpa et repellat voluptatibus eaque quam
                  iste voluptas animi dolor?
                </p>
              </div>
            </div>
            <div className="col-md-4 col-4">
              <div className="order_col1">
                <img src={img3} alt="" className="img-fluid"></img>
                <h5 >Customer Support</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Numquam deserunt, culpa et repellat voluptatibus eaque quam
                  iste voluptas animi dolor?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderMethod;
