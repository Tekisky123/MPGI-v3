// StudentActivities.tsx
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { studentActivitiesData, Activity, CollegeActivityGroup } from "../data/studentActivitiesData";

const StudentActivities = () => {
  const { collegeId, activityPath } = useParams<{ collegeId: string; activityPath: string }>();
  const navigate = useNavigate();
  const [activeActivity, setActiveActivity] = useState<Activity | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const college = studentActivitiesData.find((c: CollegeActivityGroup) => c.id === collegeId);

  useEffect(() => {
    if (!college) return;

    // Find the activity that matches the current path
    const matchedActivity = college.activities.find(
      (a: Activity) => a.path === `/activities/${activityPath}`
    );
    setActiveActivity(matchedActivity || college.activities[0]);
  }, [college, activityPath]);

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
    // Extract the last part of the path (e.g., "cesa" from "/activities/cesa")
    const pathSegment = activity.path.split('/').pop();
    navigate(`/${collegeId}/activities/${pathSegment}`);
    setActiveActivity(activity);
    setIsSidebarOpen(false);
  };

  const renderContent = (content?: string[]) => {
    if (!content) return null;
    return content.map((paragraph, index) => (
      <p key={index} className="mb-4 text-gray-700">
        {paragraph}
      </p>
    ));
  };

  const renderTable = (tableData?: { label: string; value: string }[]) => {
    if (!tableData) return null;

    return (
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <tbody>
            {tableData.map((row, idx) => {
              if (row.label === "" && row.value === "") return null;
              return (
                <tr key={idx} className="border-b">
                  <td className="font-semibold border-r border-gray-300 px-4 py-2 bg-gray-100 w-1/3">
                    {row.label}
                  </td>
                  <td className="px-4 py-2">{row.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  if (!college) {
    return <div className="text-center text-red-500 p-8">College not found</div>;
  }

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
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

      <div className="w-full mx-auto flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside
          className={`lg:w-1/4 xl:w-1/5 bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-300 fixed lg:static z-50 lg:z-auto h-full overflow-y-auto ${isSidebarOpen ? "block inset-0" : "hidden lg:block"
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
                className={`block w-full border border-gray-200 text-left py-3 px-4 transition-all duration-200 font-bold text-lg md:text-base ${activeActivity?.path === item.path
                  ? "bg-mpgin-darkBlue text-mpgin-blue underline"
                  : "bg-mpgin-blue hover:bg-mpgin-darkBlue hover:text-white text-mpgin-darkBlue"
                  }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:w-2/4 xl:w-3/5">
          {activeActivity ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
              >
                {activeActivity.name}
              </motion.h3>

              {activeActivity.description && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6 text-gray-700"
                >
                  {activeActivity.description}
                </motion.p>
              )}

              {activeActivity.points && activeActivity.points.length > 0 && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="list-disc ml-5 mb-6 space-y-1 text-gray-700"
                >
                  {activeActivity.points.map((point: string, i: number) => (
                    <li key={i}>{point}</li>
                  ))}
                </motion.ul>
              )}

              {/* AICTE & NAAC Info */}
              {activeActivity.aicteNaac && (
                <div className="overflow-x-auto mt-6">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <tbody>
                      {activeActivity.aicteNaac.map((row, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="font-semibold border-r border-gray-300 px-4 py-2 bg-gray-100 w-1/3">
                            {row.label}
                          </td>
                          <td className="px-4 py-2">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Key Contacts Table */}
              {activeActivity.keyContacts && activeActivity.keyContacts.length > 0 && (
                <div className="overflow-x-auto mt-8">
                  <h3 className="text-xl font-bold text-mpgin-darkBlue mb-3">Key Contacts</h3>
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Post</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Branch</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Mobile</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeActivity.keyContacts.map((contact, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="border border-gray-300 px-4 py-2">{contact.post}</td>
                          <td className="border border-gray-300 px-4 py-2">{contact.name}</td>
                          <td className="border border-gray-300 px-4 py-2">{contact.branch}</td>
                          <td className="border border-gray-300 px-4 py-2">
                            <a
                              href={`mailto:${contact.email}`}
                              className="text-blue-600 underline"
                              aria-label={`Email to ${contact.email}`}
                            >
                              {contact.email}
                            </a>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <a
                              href={`tel:${contact.mobile}`}
                              className="text-blue-600 underline"
                              aria-label={`Call ${contact.mobile}`}
                            >
                              +91 {contact.mobile}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Departmental Coordinators Table */}
              {activeActivity.departmentalCoordinators && activeActivity.departmentalCoordinators.length > 0 && (
                <div className="overflow-x-auto mt-8">
                  <h3 className="text-xl font-bold text-mpgin-darkBlue mb-3">Departmental Coordinators</h3>
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Branch</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Name (Year of Exp)</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Mobile No</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeActivity.departmentalCoordinators.map((coord, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="border border-gray-300 px-4 py-2">{coord.branch}</td>
                          <td className="border border-gray-300 px-4 py-2">{coord.name}</td>
                          <td className="border border-gray-300 px-4 py-2">
                            <a
                              href={`mailto:${coord.email}`}
                              className="text-blue-600 underline"
                              aria-label={`Email to ${coord.email}`}
                            >
                              {coord.email}
                            </a>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <a
                              href={`tel:${coord.mobile}`}
                              className="text-blue-600 underline"
                              aria-label={`Call ${coord.mobile}`}
                            >
                              +91 {coord.mobile}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
              >
                No Activity Selected
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-700"
              >
                Please select a student activity from the sidebar to view details.
              </motion.p>
            </motion.div>
          )}
        </main>
      </div>
    </section>
  );
};

export default StudentActivities;