import { useEffect, useState } from "react";
import derectorImg from "./assets/images/rahmar.jpg";
import CourseRec from "./components/CourseRec";
import LessonCars from "./components/LessonCars";
import "swiper/css";
import "swiper/css/pagination";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import Corusel from "./components/Corusel";

interface Lessons {
  title: string;
  les1: string;
  les2: string;
  les3: string;
}

type Inputs = {
  fullname: string;
  tell: string;
  email: string;
  message: string;
};

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

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();

  const onError = (errors: any) => {
    Object.values(errors).forEach((err: any) => {
      if (err?.message) toast.error(err.message);
    });
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzhDoFCD8krQiEUMhw5Ko0yUB_x3y4pwmAHYSf2_L3VEm_zmEpwQWdb6B0lUkuV5hEyCA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      toast.success("Ma'lumot yuborildi");
    } catch (error) {
      console.log(error);
      toast("Xatolik yuz berdi ❌");
    }
  };

  return (
    <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-780">
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
            <span
              onClick={() => {
                document
                  .getElementById("setAdmin")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer hover:text-gray-600 transition-colors"
            >
              Bog'lanish
            </span>
          </div>
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
        {/* Navbar end //////////////////////////////////  */}

        {/* Hearder start //////////////////////////////////  */}
        <div className="mt-10 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          <div className="w-full lg:w-[60%] flex flex-col gap-5">
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
              Lorem, ipsum dolor amet consectetur adipisicing elit. Fuga
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

        {/* Slide start //////////////////////////////////  */}
        <div id="kimlar" className="mt-20 sm:mt-30">
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
            <p className="w-full lg:w-[50%] text-lg sm:text-xl lg:text-2xl text-center lg:text-left">
              Pastdagi formani to'Idiring - 24 soat ichida javob beramiz.
              ljtimoly tarmoqlardagi sahifalarimizga ham yozishingiz mumkin.
            </p>
            <form
              className="flex flex-col justify-center gap-3 w-full mx-auto lg:mx-0 lg:w-full"
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              <input
                className="w-full border-1 focus:outline-none focus:ring-0 border-gray-400 rounded px-3 py-2 text-sm sm:text-base"
                type="text"
                {...register("fullname", { required: "Ism Familya majburiy" })}
                placeholder="Ism Familya"
              />
              <input
                className="w-full border-1 focus:outline-none focus:ring-0 border-gray-400 rounded px-3 py-2 text-sm sm:text-base"
                type="text"
                {...register("email", {
                  required: "Email majburiy",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email noto'g'ri formatda",
                  },
                })}
                placeholder="email"
              />
              <input
                className="w-full border-1 focus:outline-none focus:ring-0 border-gray-400 rounded px-3 py-2 text-sm sm:text-base"
                type="text"
                {...register("tell", {
                  required: "Telefon majburiy",
                  pattern: {
                    value: /^[0-9+]{7,15}$/,
                    message: "Telefon raqam noto'g'ri",
                  },
                })}
                placeholder="Telefon (+998)"
              />
              <textarea
                className="w-full h-20 border-1 focus:outline-none focus:ring-0 border-gray-400 rounded px-3 py-2 resize-none text-sm sm:text-base"
                {...register("message", { required: "Xabar majburiy" })}
                placeholder="Qisqa xabar"
              />
              <button
                className="w-full sm:w-full bg-gray-500 text-white px-5 py-2 rounded active:bg-gray-700 transition-colors duration-300 text-sm sm:text-base"
                type="submit"
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>
        {/* Slide end //////////////////////////////////  */}
      </div>
    </div>
  );
}

export default App;
