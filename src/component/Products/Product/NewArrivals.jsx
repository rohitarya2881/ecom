import img1 from "../../../assets/iphone1.png";
import Arrivals from "../Arrivals/Arrivals";
import "./NewArrival.css";
const NewArrivals = () => {
  return (
    <>
      <div className="container gx-0 ">
        <h3 className="NewArrivalHeading">New Arrival</h3>
        <div className="row gx-0 ">
          <div className="col-md-6">
            <div className="NewArrival_col1">
                <h3 className="ProductName">Iphone 16 Pro Max</h3>
                <div className="btn-box mb-3">
                    <button className="btn">Shop Now</button>
                </div>
                <img src={img1} alt ="" className="img-fluid"></img>
            </div>
          </div>
          <div className="col-md-6 col-xs-6">
            <div className="NewArrival_col2">
           <Arrivals/>
           <Arrivals/>
           <Arrivals/>
           <Arrivals/>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
