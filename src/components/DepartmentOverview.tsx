import { useParams } from "react-router-dom";
import { colleges } from "../data/collegesData";

const DepartmentOverview = () => {
  const { collegeId, departmentId } = useParams();
  const college = colleges.find(c => c.id === collegeId);
  const department = college?.departments.find(d => d.id === departmentId);

  if (!department) return null;

  return (
    <div className="space-y-8">
      {/* HOD Message */}

      {/* About Section */}
      <section>
        <h1 className="text-2xl font-bold mb-5">About the Department</h1>
        <p className="text-gray-600 leading-relaxed">{department.about}</p>
      </section>

      {/* Vision */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Vision</h2>
        <p className="text-gray-600 leading-relaxed">{department.vision}</p>
      </section>

      {/* Mission */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Mission</h2>
        <p className="text-gray-600 leading-relaxed">{department.mission}</p>
      </section>




    </div>
  );
};

export default DepartmentOverview;