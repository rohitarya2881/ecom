import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper/modules";
import img1 from "../../../assets/blue_headphones.jpg";
import img2 from "../../../assets/blue_headphones.jpg";

const Banner = () => {
  return (
    <div className="Banner_main">
      <Swiper
        scrollbar={{ draggable: true, hide: true }}
        autoplay={{ delay: 400, disableOnInteraction: false }}
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
                    Get <span>Healthy</span> Body with the{" "}
                    <span>Perfect</span> Exercises
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquid sunt eius repudiandae fuga quam velit alias hic ad
                    odio quis laudantium magnam voluptatibus, et nam voluptatum
                    esse aperiam corrupti inventore.
                  </p>
                  <div className="banner_btns">
                    <button className="btn1 btn0">Shop Now</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="banner_image">
                  <img src={img1} alt="Blue Headphones" className="img-fluid" />
                </div>
              </div>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-fluid Banner_slide">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="banner_content">
                  <h1>
                    Get <span>Healthy</span> Body with the{" "}
                    <span>Perfect</span> Exercises
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquid sunt eius repudiandae fuga quam velit alias hic ad
                    odio quis laudantium magnam voluptatibus, et nam voluptatum
                    esse aperiam corrupti inventore.
                  </p>
                  <div className="banner_btns">
                    <button className="btn1 btn0">Shop Now</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="banner_image">
                  <img src={img2} alt="Blue Headphones" className="img-fluid" />
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
