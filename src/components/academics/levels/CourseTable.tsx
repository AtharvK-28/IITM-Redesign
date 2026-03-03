interface Course {
  name: string;
  credits: number;
  code: string;
  prerequisites: string;
  corequisites: string;
}

interface CourseTableProps {
  courses: Course[];
}

const CourseTable = ({ courses }: CourseTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-[#FFF8E7]">
            <th className="px-4 py-2 text-left">Course Name</th>
            <th className="px-4 py-2 text-left">Credits</th>
            <th className="px-4 py-2 text-left">Code</th>
            <th className="px-4 py-2 text-left">Prerequisites</th>
            <th className="px-4 py-2 text-left">Corequisites</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {courses.map((course) => (
            <tr key={course.code}>
              <td className="px-4 py-2">{course.name}</td>
              <td className="px-4 py-2">{course.credits}</td>
              <td className="px-4 py-2">{course.code}</td>
              <td className="px-4 py-2">{course.prerequisites}</td>
              <td className="px-4 py-2">{course.corequisites}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;