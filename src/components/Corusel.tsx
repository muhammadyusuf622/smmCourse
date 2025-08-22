import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import h1 from "../assets/images/hamkorlar/2022-07-22 11.22.17.png";
import h2 from "../assets/images/hamkorlar/2022-08-10 17.53.59.png";
import h3 from "../assets/images/hamkorlar/IMG_20220709_031423_111-removebg-preview.png";
import h4 from "../assets/images/hamkorlar/logo png.png";
import h5 from "../assets/images/hamkorlar/photo_2020-07-27_15-29-49-removebg-preview.png";
import h6 from "../assets/images/hamkorlar/photo_2021-05-09_11-13-54-removebg-preview.png";
import h7 from "../assets/images/hamkorlar/photo_2021-05-25_15-07-29-removebg-preview.png";
import h8 from "../assets/images/hamkorlar/photo_2021-07-26_11-17-52-removebg-preview.png";
import h9 from "../assets/images/hamkorlar/photo_2021-09-18_19-20-42-removebg-preview.png";
import h10 from "../assets/images/hamkorlar/photo_2021-09-26_18-02-15-removebg-preview.png";
import h11 from "../assets/images/hamkorlar/photo_2021-11-26_11-34-37-removebg-preview.png";
import h12 from "../assets/images/hamkorlar/photo_2022-03-26_23-15-15-removebg-preview.png";
import h13 from "../assets/images/hamkorlar/photo_2022-05-02_22-04-39-removebg-preview.png";
import h14 from "../assets/images/hamkorlar/photo_2022-12-11_21-14-52.jpg";
import h15 from "../assets/images/hamkorlar/photo_2023-03-19_10-56-20.jpg";
import h16 from "../assets/images/hamkorlar/photo_2023-06-30_16-53-03.jpg";
import h17 from "../assets/images/hamkorlar/photo_2024-12-09_10-25-05.jpg";
import h18 from "../assets/images/hamkorlar/photo_2025-08-07_14-59-13.jpg";

const Corusel = () => {
  const images = [
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7,
    h8,
    h9,
    h10,
    h11,
    h12,
    h13,
    h14,
    h15,
    h16,
    h17,
    h18,
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-16 sm:mt-20 lg:mt-25 px-4 sm:px-6 lg:px-8">
      <Swiper
        pagination={{ dynamicBullets: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1200}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper rounded shadow-lg"
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {images.map((item, i) => (
          <SwiperSlide key={i}>
            <img
              src={item}
              alt="this img"
              className="w-full h-[150px] sm:h-[180px] lg:h-[200px] object-contain rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Corusel;
