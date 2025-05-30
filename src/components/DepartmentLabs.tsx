import { useParams } from "react-router-dom";
import { colleges } from "../data/collegesData";
import { AlertCircle } from "lucide-react";

const DepartmentLabs = () => {
  const { collegeId, departmentId } = useParams();
  const college = colleges.find((c) => c.id === collegeId);
  const department = college?.departments.find((d) => d.id === departmentId);

  if (!department || !department.labs || department.labs.length === 0) {
    return (
      <>
        <div className="max-w-4xl mx-auto p-4">
          <div className="text-red-600 bg-red-50 p-4 rounded-xl flex items-center gap-3">
            <AlertCircle className="w-6 h-6 flex-shrink-0" />
            <div>No Labs Data Found</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Laboratories</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="py-3 px-4 border-b">Sr. No.</th>
              <th className="py-3 px-4 border-b">Laboratory Name</th>
              {/* <th className="py-3 px-4 border-b">Area</th> */}
              <th className="py-3 px-4 border-b">Laboratory Incharge</th>
            </tr>
          </thead>
          <tbody>
            {department.labs.map((lab) => (
              <tr key={lab.srNo} className="hover:bg-gray-50 transition">
                <td className="py-3 px-4 border-b">{lab.srNo}</td>
                <td className="py-3 px-4 border-b font-medium">{lab.labName}</td>
                {/* <td className="py-3 px-4 border-b">{lab.area}</td> */}
                <td className="py-3 px-4 border-b">{lab.incharge}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepartmentLabs;