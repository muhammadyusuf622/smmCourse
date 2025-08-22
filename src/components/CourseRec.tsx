

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
    <div className={`flex flex-col gap-3 justify-center w-90 shadow-lg px-3 py-6 rounded ${textColor} ${bgColor}`}>
      <h4 className={`font-bold text-2xl`}>{title}</h4>
      <p className={`${textColor} ${bgColor} `}>{text}</p>
    </div>
  );
};

export default CourseRec;