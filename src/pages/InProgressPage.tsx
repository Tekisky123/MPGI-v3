import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const InProgressPage = () => {
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
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Page In Progress
                <span className="block text-mpgin-blue mt-2">At MPGIN</span>
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto">
                We are working hard to bring you an amazing experience.
              </p>
            </div>
          </div>
        </motion.div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Thank you for your patience!</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            This page is currently under construction. Please check back later for updates.
          </p>
          <Link
            to="/"
            className="inline-block bg-mpgin-blue text-white px-6 py-3 rounded-lg hover:bg-mpgin-darkBlue transition-colors duration-300"
          >
            Return to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InProgressPage;
