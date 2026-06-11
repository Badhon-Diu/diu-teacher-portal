import { useStudents } from '../context/StudentsContext';
import ApprovalStatus from './ApprovalStatus';
import ActionButtons from './ActionButtons';
import StudentRow from './StudentRow';

const MarksSheet = () => {
  const { students, updateStudent, deleteStudent } = useStudents();

  return (
    <div className="p-6 md:p-8 bg-gray-50">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col">
        <div className="bg-blue-600 text-white px-4 py-3 text-center font-semibold">
          Student Marks Entry List
        </div>

        <ActionButtons />

        <ApprovalStatus students={students} />

        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 rounded-t-lg text-center">
          <h1 className="text-lg font-semibold text-gray-700">Student List</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[1200px]">
            <thead className="bg-gray-100 sticky top-0 z-10">
              <tr>
                <th className="px-2 py-2 text-left text-xs font-medium text-gray-600 border-b border-gray-200">Student Id</th>
                <th className="px-2 py-2 text-left text-xs font-medium text-gray-600 border-b border-gray-200">Name</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-b border-gray-200">ATTM</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-b border-gray-200">Q1</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-b border-gray-200">Q2</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-b border-gray-200">Q3</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-b border-gray-200">AVG<br />(Quiz)</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-b border-gray-200">Presn</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-b border-gray-200">Assign</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-b border-gray-200">MT</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-b border-gray-200">MT Im</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-b border-gray-200">UTM</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-b border-gray-200">Abs</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-b border-gray-200">WH</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-b border-gray-200">Final</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-b border-gray-200">GT</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-b border-gray-200">GRD</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-b border-gray-200">GP</th>
                <th className="px-2 py-2 text-center text-xs font-medium text-gray-600 border-b border-gray-200"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {students.map(student => (
                <StudentRow
                  key={student.id}
                  student={student}
                  onUpdate={updateStudent}
                  onDelete={deleteStudent}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MarksSheet;