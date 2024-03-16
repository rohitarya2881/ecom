import img1 from "../../../assets/category/camera.png";
import img2 from "../../../assets/category/game.png";
import img3 from "../../../assets/category/headphones.png";
import img4 from "../../../assets/category/laptop.png";
import img5 from "../../../assets/category/phone.png";
import img6 from "../../../assets/category/watch.png";
import "./Category.css"
const Category = () => {
  return (
    <div className="container gx-0 py-4 Full_main_category  bg-light bg-gradient
    " >
      <h2 >Categories</h2>
      <div className="row gx-0 main_category">
        


        <div className="col-md-2 col-4 ">
          <div className="home_category text-center">
            <img src={img1} alt="Category" className="img-fluid" width="85px" />
            <h5 className="Category_title">Camera</h5>
          </div>
        </div>

        <div className="col-md-2 col-4 ">
          <div className="home_category text-center">
            <img src={img2} alt="Category" className="img-fluid" width="85px" />
            <h5 className="Category_title">Game</h5>
          </div>
        </div>


        <div className="col-md-2 col-4 ">
          <div className="home_category text-center">
            <img src={img3} alt="Category" className="img-fluid" width="85px" />
            <h5 className="Category_title">Headphone</h5>
          </div>
        </div>



        <div className="col-md-2 col-4 ">
          <div className="home_category text-center">
            <img src={img4} alt="Category" className="img-fluid" width="85px" />
            <h5 className="Category_title">Laptop</h5>
          </div>
        </div>



        <div className="col-md-2 col-4 ">
          <div className="home_category text-center">
            <img src={img5} alt="Category" className="img-fluid" width="85px" />
            <h5 className="Category_title">Mobile</h5>
          </div>
        </div>


        <div className="col-md-2 col-4 ">
          <div className="home_category text-center">
            <img src={img6} alt="Category" className="img-fluid" width="85px" />
            <h5 className="Category_title">Watch</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
