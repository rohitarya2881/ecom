import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper/modules";
import img1 from "../../../assets/blackheadphone.png";
import img2 from "../../../assets/neckband.png";
import { NavLink } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="Banner_main">
      <Swiper
        scrollbar={{ draggable: true, hide: true }}
        autoplay={{ delay: 40000, disableOnInteraction: false }}
        modules={[Autoplay, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container-fluid Banner_1">
            <div className="container gx-0">
            <div className="row gx-0 align-items-center">
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
                <div className="banner_image">
                  <img src={img2} alt="Black Headphones"  className="img-fluid" />
                </div>
              </div>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-fluid Banner_1">
            <div className="container gx-0">
            <div className="row gx-0 align-items-center">
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
                <div className="banner_image">
                  <img src={img1} alt="Blue Headphones"  className="img-fluid" />
                </div>
              </div>
            </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </div>
  );
};

export default Banner;
