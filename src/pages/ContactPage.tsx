import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import NotificationComponent from "../components/NotificationComponent";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Contact Data for Each College
const CONTACT_DATA = {
  "school-of-engineering": {
    title: "Contact - School of Engineering",
    contacts: [
      {
        name: "",
        email: "principal@engineering.mp.edu.in",
        phones: ["+91 9876543210", "+91 9765432109"],
      },
      {
        name: "Admissions",
        email: "admissions@engineering.mp.edu.in",
        phones: ["+91 9988776655", "+91 9876543210"],
      },
      {
        name: "Placement Cell",
        email: "placements@engineering.mp.edu.in",
        phones: ["+91 9876543210", "+91 9765432109"],
      },
    ],
  },
  "school-of-management": {
    title: "Contact - School of Management",
    contacts: [
      {
        name: "Prof. Sadanand shinde",
        email: "",
        phones: ["+91 9146390617"],
      },
      {
        name: "Asst. Prof Pallvi Nalewad",
        email: "",
        phones: ["+91 7447831978"],
      },
     
    ],
  },
  "vishwabharati-polytechnic-institute": {
    title: "Contact - Vishwabharati Polytechnic Institute",
    contacts: [
      {
        name: "",
        email: "1151principal@msbte.ac.in",
        phones: ["+91 9881321000"],
      },
      {
        name: "Admissions",
        email: "admissions@polytechnic.mp.edu.in",
        phones: ["+91 9881321000"],
      },
      {
        name: "Placement Cell",
        email: "placements@polytechnic.mp.edu.in",
        phones: [
          "+91 9422870908",
          "+91 8208618714",
          "+91 9422870908",
        ],
      },
    ],
  },
};

// Quick Links Navigation Items
const QUICK_LINKS = [
  { label: "Home", path: "/home" },
  //   { label: "Departments", path: "/departments" },
  { label: "Admission", path: "/admission" },
  { label: "Campus", path: "/campus" },
  { label: "Cells & Committees", path: "/cells-committees" },
];

const ContactPage = () => {
  const { collegeId } = useParams<{ collegeId: string }>();
  const currentCollegeData =
    CONTACT_DATA[collegeId || "school-of-engineering"];

  // Sidebar Toggle State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      {/* Mobile Navigation Toggle */}
      <div className="md:hidden flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-mpgin-darkBlue">Navigation</h2>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-mpgin-darkBlue"
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Sidebar - Quick Links */}
        <aside
          ref={sidebarRef}
          className={`lg:w-1/4 xl:w-1/5 bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-300 fixed lg:static z-20 h-full overflow-y-auto ${isSidebarOpen ? "block inset-0" : "hidden lg:block"
            }`}
        >
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden absolute top-4 right-4 text-mpgin-darkBlue"
          >
            <X size={24} />
          </button>
          <nav className="space-y-2 mt-6 md:mt-0">
            <h3 className="text-lg font-bold text-mpgin-darkBlue mb-4">
              Quick Links
            </h3>
            <ul>
              {QUICK_LINKS.map((item) => (
                <li key={item.label} >
                  <Link
                    to={`/${collegeId}${item.path}`}
                    className="block border my-3 border-gray-200 text-left py-3 px-4 transition-all duration-200 font-bold text-lg md:text-base bg-mpgin-blue hover:bg-mpgin-darkBlue hover:text-mpgin-blue hover:underline text-mpgin-darkBlue"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:w-2/4 xl:w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
            >
              {currentCollegeData.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {currentCollegeData.contacts.map((contact, index) => (
                <div key={index} className="border-t pt-4 first:border-t-0">
                  <h3 className="text-xl font-semibold text-mpgin-darkBlue mb-2">
                    {contact.name}
                  </h3>
                  <p className="mb-2">
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-blue-500 hover:underline"
                    >
                      {contact.email}
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    {contact.phones.map((phone, idx) => (
                      <span key={idx}>
                        <a
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="text-blue-500 hover:underline"
                        >
                          {phone}
                        </a>
                        {idx !== contact.phones.length - 1 && ", "}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </main>


      </div>
    </section>
  );
};

export default ContactPage;