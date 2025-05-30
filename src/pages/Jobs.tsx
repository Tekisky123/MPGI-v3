import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { Briefcase, GraduationCap, Clock, MapPin } from 'lucide-react';

const Jobs = () => {
  return (
    <div>
      <PageHeader
        title="Career Opportunities"
        subtitle="Join our team of dedicated professionals"
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Current Openings */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities at MPGIN
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: 'Assistant Professor - Computer Science',
                department: 'Computer Science & Engineering',
                location: 'Nanded Campus',
                type: 'Full Time',
                experience: '3-5 years',
                deadline: 'March 30, 2024'
              },
              {
                title: 'Lab Assistant - Mechanical Engineering',
                department: 'Mechanical Engineering',
                location: 'Nanded Campus',
                type: 'Full Time',
                experience: '2-4 years',
                deadline: 'March 25, 2024'
              },
              {
                title: 'Administrative Officer',
                department: 'Administration',
                location: 'Nanded Campus',
                type: 'Full Time',
                experience: '5-7 years',
                deadline: 'April 15, 2024'
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Briefcase className="w-5 h-5 text-[#0860b1]" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-5 h-5 text-[#0860b1]" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <GraduationCap className="w-5 h-5 text-[#0860b1]" />
                        <span>Experience: {job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-5 h-5 text-[#0860b1]" />
                        <span>Apply by: {job.deadline}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <button className="bg-[#0860b1] text-white px-6 py-2 rounded-md shadow-md hover:bg-[#064481] transition-all transform hover:scale-105">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Apply
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these steps to apply for a position at MPGIN
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Submit Application',
                description: 'Fill out the online application form and upload your updated resume.'
              },
              {
                step: '2',
                title: 'Document Verification',
                description: 'Submit required documents for verification if shortlisted.'
              },
              {
                step: '3',
                title: 'Interview Process',
                description: 'Attend technical and personal interviews as scheduled.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-[#0860b1] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
