import React from "react";
import { motion } from "framer-motion";
import { Program } from "../types";
import { Clock, GraduationCap, Briefcase, IndianRupee } from "lucide-react";

interface ProgramCardProps {
  program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group hover:scale-105 transform transition-transform"
    >
      {/* Program Info */}
      <div className="p-6 space-y-6">
        <h3 className="text-2xl font-semibold text-[#0860b1] group-hover:text-[#064481] transition-colors">
          {program.name}
        </h3>
        <p className="text-gray-600">{program.description}</p>

        <div className="space-y-4">
          {/* Duration */}
          <div className="flex items-center space-x-3">
            <Clock className="text-[#ea1b26] w-5 h-5" />
            <span className="text-gray-700">{program.duration}</span>
          </div>
          {/* Eligibility */}
          <div className="flex items-center space-x-3">
            <GraduationCap className="text-[#ea1b26] w-5 h-5" />
            <span className="text-gray-700">{program.eligibility}</span>
          </div>
          {/* Fees */}
          <div className="flex items-center space-x-3">
            <IndianRupee className="text-[#ea1b26] w-5 h-5" />
            <span className="text-gray-700">{program.fees}</span>
          </div>
        </div>

        {/* Career Prospects */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-start space-x-3">
            <Briefcase className="text-[#ea1b26] w-5 h-5 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Career Prospects</h4>
              <p className="text-gray-600">{program.career}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Now Button */}
      <div className="px-6 py-4 bg-gray-50">
        <button className="w-full bg-[#0860b1] text-white py-3 rounded-md hover:bg-[#064481] focus:outline-none focus:ring focus:ring-[#0860b1]/50 transition-colors">
          Apply Now
        </button>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
