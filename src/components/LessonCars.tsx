interface Commands {
  title: string;
  les1: string;
  les2: string;
  les3: string;
}

const LessonCars = ({ title, les1, les2, les3 }: Commands) => {
  return (
    <div className="flex flex-col gap-4 shadow-lg px-4 sm:px-5 py-6 sm:py-8 rounded hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl sm:text-2xl lg:text-2xl font-bold">{title}</h3>
      <ul className="list-disc list-inside space-y-2">
        <li className="text-sm sm:text-base">{les1}</li>
        <li className="text-sm sm:text-base">{les2}</li>
        <li className="text-sm sm:text-base">{les3}</li>
      </ul>
    </div>
  );
};

export default LessonCars;
