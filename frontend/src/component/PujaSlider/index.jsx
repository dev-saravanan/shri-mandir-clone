import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bannerOne from "../../assets/img/img_desktop_banner_devotees.webp";
import bannerTwo from "../../assets/img/img_desktop_banner_puja.webp";
import bannerThree from "../../assets/img/img_desktop_banner_review.webp";

const PujaSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="bg-gradient-to-b from-orange-100 to-white p-2">
      <h1 className="text-[18px] md:text-[36px] font-bold text-[#242424]">
        Perform your Puja as per Vedic rituals at Famous Hindu Temples in India
        with Sri Mandir
      </h1>
      <Slider {...settings}>
        <div className="p-2">
          <img src={bannerOne} alt="banner one" />
        </div>
        <div className="p-2">
          <img src={bannerTwo} alt="banner two" />
        </div>
        <div className="p-2">
          <img src={bannerThree} alt="banner three" />
        </div>
      </Slider>
    </div>
  );
};

export default PujaSlider;
