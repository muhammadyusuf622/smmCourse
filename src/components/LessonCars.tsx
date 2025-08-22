
interface Commands {
  title: string;
  les1: string;
  les2: string;
  les3: string;
}

const LessonCars = ({ title, les1, les2, les3 }: Commands) => {
  return (
    <div className="flex flex-col gap-4 shadow-lg px-5 py-8 rounded">
      <h3 className="text-3xl font-bold">{title}</h3>
      <ul className="list-disc list-inside ">
        <li>{les1}</li>
        <li>{les2}</li>
        <li>{les3}</li>
      </ul>
    </div>
  );
};

export default LessonCars;
