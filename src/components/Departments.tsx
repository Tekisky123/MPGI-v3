import { motion } from "framer-motion";
import { ChevronRight, Building2, GraduationCap, School } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollingText from "./ScrollingText";
// import feesStructure from '../assets/pdf/fees_structure.pdf';
import appprovedFeesStructure from '../assets/pdf/appproved_fees_2025-26.pdf';
import revisedFeesStructure from '../assets/pdf/revised_fees_2024-25.pdf';

interface Department {
  title: string;
  code: string;
  content: string;
  icon: React.ReactNode;
  route: string;
}

const Departments = () => {
  const navigate = useNavigate();

  const departments: Department[] = [
    {
      title: "School Of Engineering",
      code: "DTE CODE- 2116",
      content:
        "The School of Engineering at Matoshri Pratishthan Group of Institutions (MPGI), Nanded is a premier engineering institute established in 2009 to provides an ideal environment for technical education and research. The institute is a vibrant and innovative centre for education to develop of cadre of socially responsive managers, technocrats, entrepreneurs and professionals.",
      icon: <GraduationCap className="w-6 h-6 text-mpgin-darkBlue" />,
      route: "/school-of-engineering/home",
    },
    {
      title: "School Of Management",
      code: "DTE CODE- 2116",
      content: `The Department of school of management was started in 2009 with two year’s Full time Program of Post graduation in Business Administration. The MBA program was introduced with a vision to create prospective managers with leadership skills, lateral thinking and critical evolution abilities that go to make successful entrepreneurs and corporate Heads of tomorrow.
The goal of department is to prepare executes destined for a successful management career. Since its inception, the department has endeavored to give its students an education encompassing all management disciplines, in order to prepare them for any change in professional life.`,
      icon: <Building2 className="w-6 h-6 text-mpgin-darkBlue" />,
      route: "/school-of-management/home",
    },

    {
      title: "Vishwabharti Polytechnic Institute",
      code: "DTE CODE- 2194",
      content: `The Vishwabharati Polytechnic Institute (MPVPI) at Matoshri Pratishthan Group of Institutions (MPGI), Nanded, is a premier polytechnic institute established in 2009 to provide an ideal environment for technical education and to give "technical wings to the brain."

MPVPI is a vibrant and innovative centre for education focused on developing a cadre of socially responsive managers, technocrats, entrepreneurs, and professionals. The institute is approved by the All India Council for Technical Education (AICTE), New Delhi, and affiliated to the Maharashtra State Board of Technical Education (MSBTE), Mumbai.

MPVPI takes pride in its thriving alumni community of over 1000 MPVPIians who are making significant contributions worldwide through industry and academia.`,
      icon: <School className="w-6 h-6 text-mpgin-darkBlue" />,
      route: "/vishwabharati-polytechnic-institute/home",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <ScrollingText 
        backgroundColor="#e0f2fe"
        speed={20}
        items={[
          {
            text:"📢 Fee Structure for 2025–26 as approved by FRA, Click here to download.",
            link:appprovedFeesStructure,
            textColor:"#0369a1"
          },
          {
            text:"📢 Revised Fee Structure for 2024–25, Click here to download.",
            link:revisedFeesStructure,
            textColor:"#0369a1"
          }
        ]}
        
      />
      <div className="max-w-7xl mx-auto mt-10">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Colleges
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-mpgin-blue to-mpgin-darkBlue mx-auto rounded-full"></div>
        </motion.header>

        {/* Department Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {departments.map((dept, index) => (
            <motion.article
              key={`dept-${index}`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
              }}
              className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden cursor-pointer flex flex-col h-full relative group"
              onClick={() => navigate(dept.route)}
              aria-label={`Navigate to ${dept.title} department`}
            >
              {/* Top Right Floating Arrow Icon */}
              <div className="absolute top-4 right-0 z-10">
                <ChevronRight className="w-10 h-10  text-mpgin-darkBlue bg-mpgin-blue  opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Icon and Title */}
                <div className="flex items-start mb-4">
                  <div className="bg-mpgin-blue p-3 rounded-lg mr-4 border border-gray-200 group-hover:border-mpgin-blue transition-colors">
                    {dept.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-mpgin-darkBlue transition-colors">
                      {dept.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">{dept.code}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 font-semibold flex-1 line-clamp-3">
                  {dept.content}
                </p>

                {/* Footer Button */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <button
                    className="flex items-center bg-mpgin-blue p-3 rounded-lg justify-between w-full text-left text-mpgin-darkBlue font-medium  transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(dept.route);
                    }}
                  >
                    <span>See Details</span>
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Active state indicator */}
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-mpgin-blue to-mpgin-darkBlue transition-all duration-300"></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
