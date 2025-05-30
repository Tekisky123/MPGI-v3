import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../data/Api";
import {
  UserCircle2,
  GraduationCap,
  Briefcase,
  CalendarDays,
  Contact2,
  AlertCircle,
  Loader2
} from "lucide-react";

interface FacultyMember {
  _id: string;
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  dateOfJoining: string;
  photo: string;
  department: string;
  college: string;
}

const DepartmentFaculty = () => {
  const { collegeId, departmentId } = useParams<{ collegeId: string; departmentId: string }>();
  const [faculty, setFaculty] = useState<FacultyMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await api.get<FacultyMember[]>(
          `/faculty/college/${collegeId}/department/${departmentId}`
        );

        if (!response.data) throw new Error("No faculty data available");
        setFaculty(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load faculty data");
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, [collegeId, departmentId]);

  const LoadingState = () => (
    <div className="flex justify-center items-center h-96">
      <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
    </div>
  );

  if (loading) return <LoadingState />;

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="text-red-600 bg-red-50 p-4 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-6 h-6" />
          <span className="font-medium">Error loading faculty: {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 flex items-center gap-3">
        <UserCircle2 className="w-8 h-8 text-gray-700" />
        <h1 className="text-3xl font-bold text-gray-800">Faculty Members</h1>
      </div>

      {faculty.length === 0 ? (
        <div className="text-gray-500 text-center py-12 bg-gray-50 rounded-lg">
          <UserCircle2 className="mx-auto w-12 h-12 mb-4 text-gray-400" />
          <p className="font-medium">No faculty members found in this department</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {faculty.map((member) => (
            <FacultyCard key={member._id} member={member} />
          ))}
        </div>
      )}
    </div>
  );
};

const FacultyCard = ({ member }: { member: FacultyMember }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
  >
    <div className="p-6">
      <div className="flex items-start gap-4">
        <div className="relative">
          <img
            src={member.photo}
            alt={member.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-gray-100"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0YjU1NmIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiLz48cGF0aCBkPSJNMTIgMjEuOGE5IDkgMCAwIDAtOS05IDkgOSAwIDAgMSAxOCAwIi8+PC9zdmc+';
            }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-800 ">{member.name}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
            <Contact2 className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span className="truncate">{member.designation}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <GraduationCap className="w-5 h-5 text-gray-500 flex-shrink-0" />
          <div className="flex-1">
            <p className="font-medium text-gray-700">Qualification</p>
            <p className="truncate">{member.qualification}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Briefcase className="w-5 h-5 text-gray-500 flex-shrink-0" />
          <div className="flex-1">
            <p className="font-medium text-gray-700">Experience</p>
            <p>{member.experience}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <CalendarDays className="w-5 h-5 text-gray-500 flex-shrink-0" />
          <div className="flex-1">
            <p className="font-medium text-gray-700">Joined Date</p>
            <p>
              {
                member.dateOfJoining ? new Date(member.dateOfJoining).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }) : "-"
              }

            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default DepartmentFaculty;