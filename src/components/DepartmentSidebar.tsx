import { College, Department } from "../data/collegesData";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

interface Props {
  college: College;
  department: Department;
}

const DepartmentSidebar = ({ college, department }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Define tabs and their corresponding routes
  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "overview", label: "Overview" },
    { id: "faculty", label: "Faculty" },
    { id: "gallery", label: "Gallery" },
    { id: "labs", label: "Labs" },
  ];

  // Determine the active tab based on the current route
  const activeTab = location.pathname.split("/").pop() || "profile";

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !menuButtonRef.current?.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSidebarOpen(false);
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="lg:w-64">
      {/* Mobile Menu Button */}
      <div className="lg:hidden flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-mpgin-darkBlue"></h2>
        <button
          ref={menuButtonRef}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-mpgin-darkBlue"
        >
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`lg:block bg-gray-50  shadow-md p-4 transition-all duration-300 fixed lg:static z-50 lg:z-auto h-full overflow-y-auto ${
          isSidebarOpen ? "block inset-0" : "hidden lg:block"
        }`}
        ref={sidebarRef}
      >
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden absolute top-4 right-4 text-mpgin-darkBlue"
        >
          <X size={24} />
        </button>

        {/* Department Navigation */}
        <nav className="space-y-2 mb-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ x: 5 }}
              onClick={() => {
                navigate(tab.id);
                setIsSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-3  transition-all duration-200 font-bold  ${
                activeTab === tab.id
                  ? "bg-mpgin-darkBlue text-mpgin-blue underline"
                  : "bg-mpgin-blue hover:bg-mpgin-darkBlue hover:text-white text-mpgin-darkBlue"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </nav>

        {/* Other Departments */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="font-semibold text-gray-800 mb-3">
            Other Departments
          </h3>
          <ul className="space-y-2">
            {college.departments.map((dept) => (
              <motion.li
                key={dept.id}
                whileHover={{ x: 5 }}
                className={`border-l-4 ${
                  dept.id === department.id
                    ? "border-blue-500"
                    : "border-transparent hover:border-blue-500"
                }`}
              >
                <Link
                  to={`/${college.id}/departments/${dept.id}/profile`}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`block px-3 py-2 transition-colors ${
                    dept.id === department.id
                      ? "text-blue-700 font-medium"
                      : "text-gray-600 hover:text-blue-700"
                  }`}
                >
                  {dept.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DepartmentSidebar;
