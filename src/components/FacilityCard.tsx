import React from "react";
import { motion } from "framer-motion";
import { Facility } from "../types";
import * as Icons from "lucide-react";

interface FacilityCardProps {
  facility: Facility;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ facility }) => {
  const Icon = Icons[facility.icon as keyof typeof Icons];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transform transition-all"
    >
      {/* Image Section */}
      <div className="relative h-48">
        <img
          src={facility.images[0]}
          alt={facility.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center space-x-2">
            {Icon && <Icon className="w-7 h-7 text-white" />}
            <h3 className="text-xl font-bold">{facility.name}</h3>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <p className="text-gray-600 leading-relaxed">{facility.description}</p>

        {/* Learn More Button */}
        <button className="mt-4 text-[#0860b1] font-semibold hover:text-[#064481] transition-colors flex items-center space-x-1 group">
          <span>Learn More</span>
          <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default FacilityCard;
