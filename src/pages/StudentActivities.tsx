import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { studentActivitiesData, facultyActivitiesData, Activity, CollegeActivityGroup } from "../data/studentActivitiesData";

const StudentActivities = () => {
  const { collegeId } = useParams<{ collegeId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeActivity, setActiveActivity] = useState<Activity | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isDepartmentalRoute = location.pathname.includes("/activities/departmental-activities");
  const isStudentClubsRoute = location.pathname.includes("/activities/students");

  const college = isDepartmentalRoute 
    ? facultyActivitiesData.find((c: CollegeActivityGroup) => c.id === collegeId)
    : studentActivitiesData.find((c: CollegeActivityGroup) => c.id === collegeId);

  useEffect(() => {
    if (!college) return;

    if (isDepartmentalRoute) {
      setActiveActivity({
        name: "Faculty Activities",
        description: "Programs and participation details for faculty members.",
        path: "/activities/departmental-activities"
      });
    } else if (isStudentClubsRoute) {
      setActiveActivity({
        name: "Student Clubs",
        description: "Explore various student clubs and organizations at our institution.",
        path: "/activities/students"
      });
    } else {
      setActiveActivity(college.activities[0]);
    }
  }, [college, isDepartmentalRoute, isStudentClubsRoute]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node) &&
        !menuButtonRef.current?.contains(e.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSidebarOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleActivityClick = (activity: Activity) => {
    setActiveActivity(activity);
    setIsSidebarOpen(false);
  };

  if (!college) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">College Not Found</h2>
          <p className="text-gray-600 mb-6">The requested college could not be found.</p>
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const groupDepartmentalData = () => {
    if (!college) return [];
    const deptActivity = college.activities.find(a => a.name === "Departmental Activities");
    if (!deptActivity?.tableData) return [];
    
    const rows = [];
    for (let i = 0; i < deptActivity.tableData.length; i += 4) {
      rows.push(deptActivity.tableData.slice(i, i + 4));
    }
    return rows;
  };

  const groupFacultyParticipationData = () => {
    if (!college) return [];
    const facultyActivity = college.activities.find(a => a.name === "Faculty Participation");
    if (!facultyActivity?.tableData) return [];
    
    const rows = [];
    for (let i = 0; i < facultyActivity.tableData.length; i += 5) {
      rows.push(facultyActivity.tableData.slice(i, i + 5));
    }
    return rows;
  };

  const departmentalRows = groupDepartmentalData();
  const facultyParticipationRows = groupFacultyParticipationData();

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Mobile menu button - only show when not on special routes */}
      {!isDepartmentalRoute && !isStudentClubsRoute && (
        <div className="md:hidden flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-mpgin-darkBlue">Student Activities</h2>
          <button
            ref={menuButtonRef}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-mpgin-darkBlue"
          >
            {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      )}

      <div className="w-full mx-auto flex flex-col lg:flex-row gap-6">
        {/* Sidebar - only show when not on special routes */}
        {!isDepartmentalRoute && !isStudentClubsRoute && (
          <aside
            className={`lg:w-1/4 xl:w-1/5 bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-300 fixed lg:static z-50 lg:z-auto h-full overflow-y-auto ${
              isSidebarOpen ? "block inset-0" : "hidden lg:block"
            }`}
            ref={sidebarRef}
          >
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="md:hidden absolute top-4 right-4 text-mpgin-darkBlue"
            >
              <X size={24} />
            </button>
            <nav className="space-y-2 mt-6 md:mt-0">
              {college.activities.map((item) => (
                <motion.button
                  key={item.path}
                  whileHover={{ x: 5 }}
                  onClick={() => handleActivityClick(item)}
                  className={`block w-full border border-gray-200 text-left py-3 px-4 transition-all duration-200 font-bold text-lg md:text-base ${
                    activeActivity?.path === item.path
                      ? "bg-mpgin-darkBlue text-mpgin-blue underline"
                      : "bg-mpgin-blue hover:bg-mpgin-darkBlue hover:text-white text-mpgin-darkBlue"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <div className={`${isDepartmentalRoute || isStudentClubsRoute ? 'w-full' : 'flex-1 lg:w-2/4 xl:w-3/5'}`}>
          {activeActivity ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-md overflow-hidden border border-gray-200 rounded-lg"
            >
              {/* Activity Header */}
              <div className="bg-mpgin-blue text-mpgin-darkBlue p-4">
                <h1 className="text-xl md:text-2xl font-bold">{college.collegeName}</h1>
                <h2 className="text-lg md:text-xl font-bold mt-1">{activeActivity.name}</h2>
              </div>

              {/* Activity Body */}
              <div className="p-6">
                {activeActivity.description && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-700 mb-6"
                  >
                    {activeActivity.description}
                  </motion.p>
                )}

                {/* Departmental Activities Tables */}
                {isDepartmentalRoute && (
                  <div className="space-y-8">
                    {/* Departmental Activities Table */}
                    <div>
                      <h4 className="text-xl font-semibold text-mpgin-darkBlue mb-4">
                        Departmental Activities
                      </h4>
                      <div className="overflow-x-auto border border-gray-300 rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                Sr. No.
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                Title of the program
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                Name of the expert
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                Date/duration
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {departmentalRows.map((row, rowIndex) => (
                              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                {row.map((cell, cellIndex) => (
                                  <td 
                                    key={cellIndex} 
                                    className="px-4 py-4 whitespace-normal text-sm text-gray-700"
                                  >
                                    {cell.value}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Faculty Participation Table */}
                    <div>
                      <h4 className="text-xl font-semibold text-mpgin-darkBlue mb-4">
                        Faculty Participation
                      </h4>
                      <div className="overflow-x-auto border border-gray-300 rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                Sr. No.
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                Title of the program
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                Date/duration
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                Organization
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                                Faculty
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {facultyParticipationRows.map((row, rowIndex) => (
                              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                {row.map((cell, cellIndex) => (
                                  <td 
                                    key={cellIndex} 
                                    className="px-4 py-4 whitespace-normal text-sm text-gray-700"
                                  >
                                    {cell.value}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* Student Clubs View */}
                {isStudentClubsRoute && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {college?.activities.map((club) => (
                      <motion.div 
                        key={club.path}
                        whileHover={{ y: -5 }}
                        className="bg-white overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-300 rounded-lg"
                      >
                        <div className="p-6 h-full flex flex-col">
                          <div className="flex-grow">
                            <h4 className="text-xl font-bold text-mpgin-darkBlue mb-3">
                              {club.name}
                            </h4>
                            <p className="text-gray-600">
                              {club.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <div className="bg-white shadow-md overflow-hidden border border-gray-200 rounded-lg">
              <div className="bg-mpgin-blue text-mpgin-darkBlue p-4">
                <h1 className="text-xl md:text-2xl font-bold">{college.collegeName}</h1>
                <h2 className="text-lg md:text-xl font-bold mt-1">No Activity Selected</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700">
                  Please select an activity from the sidebar to view details.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentActivities;