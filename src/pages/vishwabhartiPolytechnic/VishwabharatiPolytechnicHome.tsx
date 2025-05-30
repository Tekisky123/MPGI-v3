import { motion } from "framer-motion";
import polytechnicHero from "../../assets/images/labs.avif";
import VishwabhartiPolytechnicQuickLinks from "./VishwabhartiPolytechnicQuickLinks";

const VishwabharatiPolytechnicHome = () => {


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] bg-mpgin-darkBlue text-white">
        <div className="absolute inset-0 bg-black/80">
          <img
            src={polytechnicHero}
            alt="Students working in polytechnic lab"
            className="w-full h-full object-cover object-center opacity-25"
            loading="lazy"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Skill-Based Technical Education at
              <br />
              <span className="text-mpgin-blue">Vishwabharati Polytechnic</span>
            </h1>

            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg sm:text-xl text-gray-200">
                AICTE Approved | 100% Practical Training | Industry-Ready
                Certification
              </p>

             
            </div>
          </motion.div>

        </div>
      </div>

      <VishwabhartiPolytechnicQuickLinks />
    </div>
  );
};

export default VishwabharatiPolytechnicHome;
