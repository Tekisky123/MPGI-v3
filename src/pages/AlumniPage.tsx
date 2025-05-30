// AlumniPage.tsx

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  navItems as allNavItems,
  managementAlumni,
  engineeringAlumni,
  polytechnicAlumni,
} from "../data/alumniData";

// Helper function to render content with line breaks and markdown-like formatting
const renderContent = (content: string) => {
  const paragraphs = content.split("\n");

  return (
    <>
      {paragraphs.map((paragraph, index) => {
        if (paragraph.startsWith("![")) {
          // Handle image markdown syntax
          const imageAlt = paragraph.match(/!\[(.*?)\]/)?.[1] || "";
          const imageSrc = paragraph.match(/\((.*?)\)/)?.[1] || "";
          return (
            <div key={index} className="my-4">
              <img src={imageSrc} alt={imageAlt} className="w-full h-auto" />
            </div>
          );
        } else if (paragraph.startsWith("-")) {
          return (
            <ul
              key={index}
              className="list-disc pl-6 space-y-1 text-gray-700 font-semibold"
            >
              {paragraph
                .slice(1)
                .split(", ")
                .map((item, i) => (
                  <li key={i}>{item.trim()}</li>
                ))}
            </ul>
          );
        } else if (
          paragraph.startsWith("## ") ||
          paragraph.startsWith("### ")
        ) {
          return (
            <h3
              key={index}
              className="text-xl font-bold text-mpgin-darkBlue mt-4 mb-2"
            >
              {paragraph.slice(3)}
            </h3>
          );
        } else if (paragraph.startsWith("# ")) {
          return (
            <h2
              key={index}
              className="text-2xl font-bold text-mpgin-darkBlue mt-6 mb-3 border-b pb-2 border-gray-300"
            >
              {paragraph.slice(2)}
            </h2>
          );
        } else if (
          (paragraph.startsWith("**") && paragraph.endsWith("**")) ||
          (paragraph.startsWith("*") && paragraph.endsWith("*"))
        ) {
          return (
            <p key={index} className="font-bold text-gray-800">
              {paragraph.slice(1, -1)}
            </p>
          );
        } else {
          return (
            <p key={index} className="text-gray-700">
              {paragraph}
            </p>
          );
        }
      })}
    </>
  );
};

const AlumniPage = () => {
  const [activeId, setActiveId] = useState("management");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { college } = useParams<{ college: string }>();

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

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSidebarOpen(false);
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    // Update activeId based on the current route
    if (college) {
      if (college.includes("school-of-management")) {
        setActiveId("management");
      } else if (college.includes("school-of-engineering")) {
        setActiveId("engineering");
      } else if (college.includes("vishwabharati-polytechnic-institute")) {
        setActiveId("polytechnic");
      }
    }
  }, [college]);

  // Filter navItems based on the current route
  const navItems = allNavItems.filter((item) => {
    if (college) {
      if (
        college.includes("school-of-management") &&
        item.id === "management"
      ) {
        return true;
      } else if (
        college.includes("school-of-engineering") &&
        item.id === "engineering"
      ) {
        return true;
      } else if (
        college.includes("vishwabharati-polytechnic-institute") &&
        item.id === "polytechnic"
      ) {
        return true;
      }
    }
    // Always include "Alumni Speak" and "Alumni Register"
    return item.id === "speak" || item.id === "register";
  });
  const renderMainContent = () => {
    switch (activeId) {
      case "management":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 w-full"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-full p-4 sm:p-8 lg:p-10 order-2 lg:order-1">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
                >
                  SCHOOL OF MANAGEMENT ALUMNI
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {managementAlumni.map((alumni) => (
                    <div
                      key={alumni.id}
                      className="bg-white rounded-lg shadow-md p-4 border border-gray-200 flex flex-col items-center"
                    >
                      <img
                        src={alumni.image}
                        alt={alumni.name}
                        className="w-24 h-24 rounded-full object-cover mb-4"
                      />
                      <h4 className="text-lg font-bold text-mpgin-darkBlue  capitalized">
                        {alumni.name}
                      </h4>
                     
                      <p className="text-gray-700  capitalized">
                        Selected in: {alumni.selectedIn}
                      </p>
                      <p className="text-gray-700  capitalized">
                        PACKAGE: {alumni.package}
                      </p>
                      {alumni.content && (
                        <div className="mt-2 text-gray-700 text-sm ">
                          {renderContent(alumni.content)}
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        );
  
      case "engineering":
        return (
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
              School of Engineering Alumni's
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {engineeringAlumni.map((alumni) => (
                <div
                  key={alumni.id}
                  className="bg-white rounded-lg shadow-md p-4 border border-gray-200 flex flex-col items-center"
                >
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <h4 className="text-lg font-bold text-mpgin-darkBlue text-center capitalized">
                    {alumni.name}
                  </h4>
                  <p className="text-gray-700 text-center capitalized">
                    {alumni.profile}
                  </p>
                  <p className="text-gray-700 text-center capitalized">
                    SELECTED IN: {alumni.selectedIn}
                  </p>
                  <p className="text-gray-700 text-center capitalized">
                    PACKAGE: {alumni.package}
                  </p>
                  {alumni.content && (
                    <div className="mt-2 text-gray-700 text-sm text-center">
                      {renderContent(alumni.content)}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        );
  
      case "polytechnic":
        return (
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
              POLYTECHNIC ALUMNI
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {polytechnicAlumni.map((alumni) => (
                <div
                  key={alumni.id}
                  className="bg-white rounded-lg shadow-md p-4 border border-gray-200 flex flex-col items-center"
                >
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <h4 className="text-lg font-bold text-mpgin-darkBlue text-center capitalized">
                    {alumni.name}
                  </h4>
                  <p className="text-gray-700 text-center capitalized">
                    {alumni.profile}
                  </p>
                  <p className="text-gray-700 text-center capitalized">
                    SELECTED IN: {alumni.selectedIn}
                  </p>
                  <p className="text-gray-700 text-center capitalized">
                    PACKAGE: {alumni.package}
                  </p>
                  {alumni.content && (
                    <div className="mt-2 text-gray-700 text-sm text-center">
                      {renderContent(alumni.content)}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        );
  
      case "register":
        return (
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
              ALUMNI REGISTER
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 text-lg"
            >
              Content for the Alumni Register section is coming soon. Please
              check back later.
            </motion.p>
          </motion.div>
        );
  
      case "speak":
        return (
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
              ALUMNI SPEAK
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 text-lg"
            >
              Content for the Alumni Speak section is coming soon. Please check
              back later.
            </motion.p>
          </motion.div>
        );
  
      default:
        return (
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
              {navItems.find((item) => item.id === activeId)?.label.tocapitalized()}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 text-lg"
            >
              Content for this section is coming soon. Please check back later.
            </motion.p>
          </motion.div>
        );
    }
  };
  

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="md:hidden flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-mpgin-darkBlue"></h2>
        <button
          ref={menuButtonRef}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-mpgin-darkBlue"
        >
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className="w-full mx-auto flex flex-col lg:flex-row gap-6">
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
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ x: 5 }}
                onClick={() => {
                  setActiveId(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`block w-full border border-gray-200 text-left py-3 px-4 transition-all duration-200 font-bold text-lg md:text-base ${
                  activeId === item.id
                    ? "bg-mpgin-darkBlue text-mpgin-blue underline"
                    : "bg-mpgin-blue hover:bg-mpgin-darkBlue hover:text-white text-mpgin-darkBlue"
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 lg:w-2/4 xl:w-3/5">{renderMainContent()}</main>
      </div>
    </section>
  );
};

export default AlumniPage;
