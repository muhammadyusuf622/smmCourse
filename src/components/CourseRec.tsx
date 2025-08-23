interface Commands {
  title: string;
  text: string;
  textColor?: string;
  bgColor?: string;
}

const CourseRec = ({
  title,
  text,
  textColor = "text-black",
  bgColor = "bg-white",
}: Commands) => {
  return (
    <div
      className={`flex flex-col gap-3 justify-center w-full sm:w-80 lg:w-90 shadow-xl px-4 sm:px-3 py-4 sm:py-6 rounded-3xl ${textColor} ${bgColor} hover:shadow-xl transition-shadow duration-300`}
    >
      <h4 className={`font-bold text-xl sm:text-2xl`}>{title}</h4>
      <p className={`${textColor} ${bgColor} text-sm sm:text-base`}>{text}</p>
    </div>
  );
};

export default CourseRec;
