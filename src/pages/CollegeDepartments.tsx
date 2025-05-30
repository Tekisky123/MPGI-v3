import { Link, useParams } from "react-router-dom";
import { colleges } from "../data/collegesData";
import { motion } from "framer-motion";

const CollegeDepartments = () => {
  const { collegeId } = useParams();
  const college = colleges.find(c => c.id === collegeId);

  if (!college) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
        <div className="text-red-600 text-xl font-semibold bg-white p-6 rounded-xl shadow-lg">
          College not found
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
                {college.name}
                <span className="block text-mpgin-blue mt-2">At MPGIN</span>
              </h1>
              <p className="text-lg md:text-xl max-w-3xl">
                Academic Departments & Programs
              </p>
            </div>
          </div>
        </motion.div>
      </header>


      {/* Departments Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {college.departments.map((department) => (
            <motion.article
              key={department.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <Link
                to={`/${college.id}/departments/${department.id}/overview`}
                className="block h-full"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={department.image}
                    alt={department.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
                    {department.name}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 leading-relaxed">
                    {department.description}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CollegeDepartments;