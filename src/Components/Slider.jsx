import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import toast from "react-hot-toast";

const Slider = () => {
const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("slider.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load slider data");
        }
        return res.json();
      })
      .then((data) => setSlides(data))
     
  }, []);

    const handleOrderClick = () => {
      toast.success("Yahoo! Redirecting..to Order Page. ");
    };

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-[350px] md:h-[500px] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0  bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2
                    className="text-3xl md:text-5xl font-bold mb-4"
                    data-aos="fade-down"
                  >
                    {slide.title}
                  </h2>
                  <p
                    className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {slide.description}
                  </p>
                  <Link
                    to="/my-order"
                    onClickCapture={ handleOrderClick }
                    className="bg-green-500  border-none rounded-lg text-white hover:bg-gradient-to-br from-[#632ee3] to-[#9f62f2] btn px-8 py-4 "
                  >
                     Orders
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
