import { useParams, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import DepartmentSidebar from "../components/DepartmentSidebar";
import { colleges } from "../data/collegesData";
import { AlertCircle } from "lucide-react";

const DepartmentPage = () => {
  const { collegeId, departmentId } = useParams();

  const college = colleges.find((c) => c.id === collegeId);
  const department = college?.departments.find((d) => d.id === departmentId);

  if (!college || !department) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="flex items-center gap-4 bg-red-50 p-6 rounded-2xl max-w-2xl">
          <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-semibold text-red-800">Department Not Found</h2>
            <p className="text-red-700 mt-2">The requested department could not be located.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Header Section */}
      <header className="bg-mpgin-blue text-white">
        <motion.div
          className="relative h-64 lg:h-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-mpgin-darkBlue text-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {department.name}
                <span className="block text-mpgin-blue mt-2">At MPGIN</span>
              </h1>
              <p className="text-lg md:text-xl max-w-3xl">
                {college.name}
              </p>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Content Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Sidebar */}
          <motion.aside
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <DepartmentSidebar college={college} department={department} />
          </motion.aside>

          {/* Main Content */}
          <motion.main
            className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="p-6 sm:p-8">
              <Outlet />
            </div>
          </motion.main>
        </div>
      </section>
    </div>
  );
};

export default DepartmentPage;