import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { facilitiesData, Facility, CollegeFacilityGroup } from "../data/facilities";

const Facilities = () => {
  const { collegeId, facilityPath } = useParams<{ collegeId: string; facilityPath: string }>();
  const navigate = useNavigate();
  const [activeFacility, setActiveFacility] = useState<Facility | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const college = facilitiesData.find((c) => c.id === collegeId);

  useEffect(() => {
    if (!college) return;

    const matchedFacility = college.facilities.find(
      (f) => f.path === `/facilities/${facilityPath}`
    );
    setActiveFacility(matchedFacility || college.facilities[0]);
  }, [college, facilityPath]);

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

  const handleFacilityClick = (facility: Facility) => {
    const pathSegment = facility.path.split("/").pop();
    navigate(`/${collegeId}/facilities/${pathSegment}`);
    setActiveFacility(facility);
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
            {tableData.map((row, idx) => (
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
    );
  };

  const renderLibraryData = (libraryData?: Facility['libraryData']) => {
    if (!libraryData) return null;

    return (
      <div className="mt-6">
        <h3 className="text-xl font-bold text-mpgin-darkBlue mb-3">Library Information</h3>

        <h4 className="text-lg font-semibold text-mpgin-darkBlue mt-4 mb-2">Total Number of Titles</h4>
<div className="overflow-x-auto">
  <table className="min-w-full border-collapse border border-gray-300">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 px-4 py-2">Category</th>
        <th className="border border-gray-300 px-4 py-2">Number of Titles</th>
        <th className="border border-gray-300 px-4 py-2">Number of Books</th>
      </tr>
    </thead>
    <tbody>
      {libraryData.totalTitles.map((item, index) => (
        <tr key={index}>
          <td className="border border-gray-300 px-4 py-2">{item.label}</td>
          <td className="border border-gray-300 px-4 py-2">{item.titles}</td>
          <td className="border border-gray-300 px-4 py-2">{item.books}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


        <h4 className="text-lg font-semibold text-mpgin-darkBlue mt-4 mb-2">Journals</h4>
        <p>Printed: {libraryData.journals.printed}</p>
        <p>E-Journals: {libraryData.journals.eJournals}</p>
        <p>{libraryData.journals.nationalInternational}</p>

        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Department</th>
                <th className="border border-gray-300 px-4 py-2">National</th>
                <th className="border border-gray-300 px-4 py-2">International</th>
                <th className="border border-gray-300 px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {libraryData.journals.departmentWise.map((dept, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{dept.department}</td>
                  <td className="border border-gray-300 px-4 py-2">{dept.national}</td>
                  <td className="border border-gray-300 px-4 py-2">{dept.international}</td>
                  <td className="border border-gray-300 px-4 py-2">{dept.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h4 className="text-lg font-semibold text-mpgin-darkBlue mt-4 mb-2">Newspapers</h4>
        <ul className="list-disc ml-5">
          {libraryData.newspapers.map((paper, index) => (
            <li key={index}>{paper}</li>
          ))}
        </ul>

        <h4 className="text-lg font-semibold text-mpgin-darkBlue mt-4 mb-2">Additional Books</h4>
        <ul className="list-disc ml-5">
          {libraryData.additionalBooks.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>

        <h4 className="text-lg font-semibold text-mpgin-darkBlue mt-4 mb-2">Facilities</h4>
        <ul className="list-disc ml-5">
          {libraryData.facilities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </ul>

        <h4 className="text-lg font-semibold text-mpgin-darkBlue mt-4 mb-2">Staff Details</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Designation</th>
                <th className="border border-gray-300 px-4 py-2">Qualification</th>
                <th className="border border-gray-300 px-4 py-2">Experience</th>
                <th className="border border-gray-300 px-4 py-2">Duties</th>
              </tr>
            </thead>
            <tbody>
              {libraryData.staffDetails.map((staff, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{staff.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{staff.designation}</td>
                  <td className="border border-gray-300 px-4 py-2">{staff.qualification}</td>
                  <td className="border border-gray-300 px-4 py-2">{staff.experience}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <ul className="list-disc ml-5">
                      {staff.duties.map((duty, i) => (
                        <li key={i}>{duty}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  if (!college) {
    return <div className="text-center text-red-500 p-8">College not found</div>;
  }

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="md:hidden flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-mpgin-darkBlue">Facilities</h2>
        <button ref={menuButtonRef} onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-mpgin-darkBlue">
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className="w-full mx-auto flex flex-col lg:flex-row gap-6">
        <aside
          className={`lg:w-1/4 xl:w-1/5 bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-300 fixed lg:static z-20 h-full overflow-y-auto ${
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
            {college.facilities.map((item) => (
              <motion.button
                key={item.path}
                whileHover={{ x: 5 }}
                onClick={() => handleFacilityClick(item)}
                className={`block w-full border border-gray-200 text-left py-3 px-4 transition-all duration-200 font-bold text-lg md:text-base ${
                  activeFacility?.path === item.path
                    ? "bg-mpgin-darkBlue text-mpgin-blue underline"
                    : "bg-mpgin-blue hover:bg-mpgin-darkBlue hover:text-white text-mpgin-darkBlue"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 lg:w-2/4 xl:w-3/5">
          {activeFacility ? (
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
                {activeFacility.name}
              </motion.h3>

              {activeFacility.description && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6 text-gray-700"
                >
                  {activeFacility.description}
                </motion.p>
              )}

              {activeFacility.points && activeFacility.points.length > 0 && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="list-disc ml-5 mb-6 space-y-1 text-gray-700"
                >
                  {activeFacility.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </motion.ul>
              )}

              {activeFacility.tableData && renderTable(activeFacility.tableData)}

              {activeFacility.libraryData && renderLibraryData(activeFacility.libraryData)}

              {activeFacility.keyContacts && activeFacility.keyContacts.length > 0 && (
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
                      {activeFacility.keyContacts.map((contact, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="border border-gray-300 px-4 py-2">{contact.post}</td>
                          <td className="border border-gray-300 px-4 py-2">{contact.name}</td>
                          <td className="border border-gray-300 px-4 py-2">{contact.branch}</td>
                          <td className="border border-gray-300 px-4 py-2">
                            <a href={`mailto:${contact.email}`} className="text-blue-600 underline">
                              {contact.email}
                            </a>
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            <a href={`tel:${contact.mobile}`} className="text-blue-600 underline">
                              +91 {contact.mobile}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeFacility?.images && activeFacility.images.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <h3 className="text-xl font-bold text-mpgin-darkBlue col-span-full">Gallery</h3>
                  {activeFacility.images.map((imgUrl, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                      <img
                        src={imgUrl}
                        alt={`Facility ${idx + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </motion.div>
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
                No Facility Selected
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-700"
              >
                Please select a facility from the sidebar to view details.
              </motion.p>
            </motion.div>
          )}
        </main>
      </div>
    </section>
  );
};

export default Facilities;