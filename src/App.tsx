import { useState } from "react";
import derectorImg from "./assets/images/derectorImg.jpg";
import CourseRec from "./components/CourseRec";
import LessonCars from "./components/LessonCars";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Lessons {
  title: string;
  les1: string;
  les2: string;
  les3: string;
}

function App() {
  const [lesson,] = useState<Lessons[]>([
    {
      title: "1-dats smm asoslari",
      les1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
      les2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
      les3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
    },
    {
      title: "2-dats smm asoslari",
      les1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
      les2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
      les3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
    },
    {
      title: "3-dats smm asoslari",
      les1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
      les2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
      les3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
    },
    {
      title: "4-dats smm asoslari",
      les1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
      les2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
      les3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
    },
    {
      title: "5-dats smm asoslari",
      les1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
      les2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
      les3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
    },
    {
      title: "6-dats smm asoslari",
      les1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
      les2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
      les3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
    },
  ]);

  return (
    <div className="w-[1100px] m-auto">
      <div className="h-700">
        {/* Navbar //////////////////////////////////  */}
        <div className="flex justify-between items-center mt-5">
          <p className="text-3xl">SMM.Kurs</p>
          <div className="flex gap-5 text-1xl">
            <span className="cursor-pointer">Kimlar uchun?</span>
            <span className="cursor-pointer">Darslar</span>
            <span className="cursor-pointer">Faq</span>
            <span className="cursor-pointer">Bog'lanish</span>
          </div>
          <button className="bg-gray-700 text-white px-8 py-2 rounded-full cursor-pointer">
            Boshlash
          </button>
        </div>
        {/* Navbar end //////////////////////////////////  */}

        {/* Hearder start //////////////////////////////////  */}
        <div className="mt-10 flex justify-between items-center">
          <div className="w-[60%] flex flex-col gap-5 ">
            <div className="flex gap-5 items-center">
              <span className="bg-black text-white px-5 py-1 rounded-full">
                Online
              </span>
              <span className="bg-black text-white px-5 py-1 rounded-full">
                6 dars
              </span>
              <span className="bg-gray-300 px-5 py-1 rounded-full">
                Boshlash: istalgan payt
              </span>
            </div>
            <h3 className="text-6xl font-light leading-tight tracking-wide">
              Lorem, ipsum dolor amet consectetur adipisicing elit. Fuga
            </h3>
            <p className="text-[20px] text-gray-500 w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              expedita nihil dicta voluptatum quas dolorum molestias similique
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={derectorImg}
              alt="this derector images"
              className="w-84 h-84 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
        {/* Hearder end //////////////////////////////////  */}

        {/* Slide start //////////////////////////////////  */}
        <div className="mt-30">
          <h2 className="text-5xl">Bu Kurs Kimlar Uchun</h2>
          <div className="flex justify-between items-center mt-10">
            <CourseRec
              title="Yangi Boshlovchi"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, error?"
            />
            <CourseRec
              title="Tadbirkor"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, error?"
              bgColor="bg-green-500"
              textColor="text-white"
            />
            <CourseRec
              title="Bloger"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, error?"
              bgColor="bg-black"
              textColor="text-white"
            />
          </div>

          <div className="mt-30">
            <h2 className="text-5xl">Kurs Dasturi - 6 ta dars</h2>
            <div className="grid grid-cols-3 gap-10 mt-5">
              {lesson?.map((item) => (
                <LessonCars
                  title={item.title}
                  les1={item.les1}
                  les2={item.les2}
                  les3={item.les3}
                />
              ))}
            </div>
          </div>

          <div className="w-full max-w-6xl mx-auto mt-25">
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
            >
              {[...Array(9)].map((_, i) => (
                <SwiperSlide key={i}>
                  <img
                    src="https://png.pngtree.com/background/20230624/original/pngtree-tech-savvy-a-three-dimensional-interpretation-of-digital-binary-code-picture-image_4027301.jpg"
                    alt="this img"
                    className="w-full h-50 object-cover rounded-2xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* Slide end //////////////////////////////////  */}
      </div>
    </div>
  );
}

export default App;
