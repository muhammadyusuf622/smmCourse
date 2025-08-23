import { useState } from "react";
import derectorImg from "./assets/images/rahmar.jpg";
import CourseRec from "./components/CourseRec";
import LessonCars from "./components/LessonCars";
import "swiper/css";
import "swiper/css/pagination";
import Corusel from "./components/Corusel";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";

interface Lessons {
  title: string;
  les1: string;
  les2: string;
  les3: string;
}

function App() {
  const [lesson] = useState<Lessons[]>([
    {
      title: "1-dars SMM kursi 3 oylik va natijaga eltuvchi kurs",
      les1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
      les2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
      les3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
    },
    {
      title:
        "2-dars SMM 0 dan o'rgatamiz target va strategiya kurishni o'rgatamiz",
      les1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
      les2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
      les3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
    },
    {
      title:
        "3-dats Temur Xasanov 5 yillik Marketing sohasida ishlab keladigan mutaxassis",
      les1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
      les2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
      les3: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, debitis.",
    },
    {
      title:
        "4-dats SMM bu video joylashtirish emas siz biznesga sotuvni yo'lga qo'yishga yordamchisiz",
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
    <div>
      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-920 sm:h-670 lg:h-670">
          {/* Navbar //////////////////////////////////  */}
          <div className="flex flex-row sm:flex-row justify-between items-center mt-5 gap-4 sm:gap-0">
            <p className="text-2xl sm:text-3xl font-bold">SMM.Kurs</p>
            <div className="hidden sm:flex gap-3 lg:gap-5 text-sm lg:text-xl">
              <span
                onClick={() => {
                  document
                    .getElementById("kimlar")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="cursor-pointer hover:text-gray-600 transition-colors"
              >
                Kimlar uchun?
              </span>
              <span
                onClick={() => {
                  document
                    .getElementById("darslar")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="cursor-pointer hover:text-gray-600 transition-colors"
              >
                Darslar
              </span>
              <div
                onClick={() => {
                  document
                    .getElementById("setAdmin")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="cursor-pointer flex items-center gap-5 hover:text-gray-600 transition-colors"
              >
                <span>Bog'lanish:</span>
                <a
                  className="text-[18px] text-green-600"
                  href="tel:+998777777777"
                >
                  998 77 777 77 77
                </a>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <button
                onClick={() => {
                  document
                    .getElementById("setAdmin")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hidden sm:inline-block bg-gray-700 text-white px-6 sm:px-8 py-2 rounded-full cursor-pointer focus:outline-none focus:ring-0 focus:border-0 hover:bg-gray-800 transition-colors text-sm sm:text-base"
              >
                Boshlash
              </button>
            </div>
          </div>
          {/* Navbar end //////////////////////////////////  */}

          {/* Hearder start //////////////////////////////////  */}
          <div className="mt-10 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
            <div className="w-full lg:w-[60%] flex flex-col gap-5 ">
              <div className="flex flex-wrap gap-3 sm:gap-5 items-center">
                <span className="bg-black text-white px-3 sm:px-5 py-1 rounded-full text-sm sm:text-base">
                  Online
                </span>
                <span className="bg-black text-white px-3 sm:px-5 py-1 rounded-full text-sm sm:text-base">
                  6 dars
                </span>
                <span className="bg-gray-300 px-3 sm:px-5 py-1 rounded-full text-sm sm:text-base">
                  Boshlash: istalgan payt
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-6xl font-light leading-tight tracking-wide">
                <p>SMM KURSI</p>
                NOLDAN BIRINCHI MIJOZGACHA
              </h3>
              <p className="text-base sm:text-lg lg:text-[20px] text-gray-500 w-full lg:w-[80%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                expedita nihil dicta voluptatum quas dolorum molestias similique
              </p>
            </div>
            <div className="flex justify-center w-full lg:w-auto">
              <img
                src={derectorImg}
                alt="this derector images"
                className="w-74 h-74 sm:w-80 sm:h-80 lg:w-84 lg:h-84 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
          {/* Hearder end //////////////////////////////////  */}
          <div className="mt-5">
            <button className="bg-gradient-to-r transition-colors duration-300 mt-10 w-[70%] block md:w-[50%] text-[15px] md:text-2xl text-white rounded-full from-gray-400 to-gray-800 hover:from-gray-500 hover:to-gray-900">
              <a href="https://t.me/smmNewCourse_bot">
                Botga ulanish uchun bosing
              </a>
            </button>
          </div>
          {/* Slide start //////////////////////////////////  */}
          <div id="kimlar" className="mt-10 sm:mt-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left">
              Bu Kurs Kimlar Uchun
            </h2>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-6 sm:gap-4 lg:gap-4">
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

            <div id="darslar" className="mt-20 sm:mt-30">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left">
                Kurs Dasturi - 6 ta dars
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-5">
                {lesson?.map((item, index) => (
                  <LessonCars
                    key={index}
                    title={item.title}
                    les1={item.les1}
                    les2={item.les2}
                    les3={item.les3}
                  />
                ))}
              </div>
            </div>

            <Corusel />

            <div
              id="setAdmin"
              className="flex flex-col justify-center gap-5 mt-20"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left">
                Hali Ham Savollaringiz bormi?
              </h2>

              <div>
                <a href="https://t.me/smmNewCourse_bot">
                  <button className="text-1xl md:text-3xl w-full tracking-wide px-10 py-2 cursor-pointer flex justify-center items-center gap-4  bg-gradient-to-r mt-10 text-white rounded-full from-gray-400 to-gray-800">
                    <span className="uppercase">
                      Bepul darsni ko'rish uchun bosing
                    </span>
                    <FaTelegram className="text-5xl" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Slide end //////////////////////////////////  */}
        </div>
      </div>
      {/* Footer start ////////////////////////////////// */}
      <footer className="w-full bg-black text-white py-10">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-8">
          {/* Social Icons */}
          <div className="flex gap-5">
            <a
              href="#"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <FaTelegram className="text-3xl rounded-full text-white bg-gradient-to-br from-[#29A9EA] to-[#0089D2] p-2" />
            </a>
            <a
              href="#"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <FaInstagram className="text-3xl rounded-full text-white bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500 p-2" />
            </a>
            <a
              href="#"
              className="transform hover:scale-110 transition-transform duration-200"
            >
              <FaSquareYoutube className="text-3xl rounded-full text-white bg-gradient-to-br from-[#FF0000] to-[#E60000] p-2" />
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center text-sm lg:text-lg">
            <span
              onClick={() =>
                document
                  .getElementById("kimlar")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer hover:text-gray-400 transition-colors duration-200"
            >
              Kimlar uchun?
            </span>
            <span
              onClick={() =>
                document
                  .getElementById("darslar")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer hover:text-gray-400 transition-colors duration-200"
            >
              Darslar
            </span>
            <span className="cursor-pointer hover:text-gray-400 transition-colors duration-200">
              Bog'lanish:
              <a href="tel:+998777777777" className="text-green-500 ml-1">
                998 77 777 77 77
              </a>
            </span>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SMM Course. Barcha huquqlar
          himoyalangan.
        </div>
      </footer>
      {/* Footer end ////////////////////////////////// */}
    </div>
  );
}

export default App;
