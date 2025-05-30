import React, { useState, useEffect } from "react";
import { X, Info, Globe } from "lucide-react";
import { motion } from "framer-motion";

const PopupModal = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Hide the modal when the close button is clicked
  const handleClose = () => {
    setIsVisible(false);
  };

  // Ensure modal visibility on page load (initial state: visible)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 50000); // Auto-hide after 10 seconds (optional)
    return () => clearTimeout(timer);
  }, []);

  // Close the modal if clicking outside
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOutsideClick}
    >
      <motion.div
        initial={{ y: "-100px" }}
        animate={{ y: "0" }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center">
            <Info className="w-6 h-6 text-[#0860b1] mr-2" />
            Client Information
          </h3>
          <button onClick={handleClose}>
            <X className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
          </button>
        </div>
        <p className="text-gray-600 text-lg mb-4">
          Welcome to this website, developed by <strong>Tekisky Pvt Ltd</strong>
          . Please note that all the details, data, and images shown here are
          for demonstration purposes only.
        </p>
        <p className="text-gray-600 text-lg mb-4">
          For more information and services, visit our official website:
        </p>
        <a
          href="https://tekisky.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0860b1] hover:text-[#064481] text-lg font-semibold"
        >
          Visit Tekisky Pvt Ltd
          <Globe className="inline w-5 h-5 ml-2" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default PopupModal;
