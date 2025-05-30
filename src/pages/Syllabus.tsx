import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import {
  FileText,
  Download,
  Book,
  GraduationCap,
  Calendar,
} from "lucide-react";

const Syllabus = () => {
  return (
    <div>
      <PageHeader
        title="Syllabus"
        subtitle="Detailed course structure and curriculum"
        backgroundImage="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Program Syllabus */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Course Syllabus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download detailed syllabus for all programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "B.Tech Computer Science", semesters: 8, icon: Book },
              { title: "B.Tech Mechanical", semesters: 8, icon: Book },
              { title: "MBA", semesters: 4, icon: GraduationCap },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-[#0860b1]/10 p-3 rounded-full">
                      <program.icon className="w-6 h-6 text-[#0860b1]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {program.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {Array.from({ length: program.semesters }, (_, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-[#0860b1]" />
                          <span className="text-gray-700">
                            Semester {i + 1}
                          </span>
                        </div>
                        <button className="flex items-center space-x-2 text-[#0860b1] hover:text-[#064481] transition-colors">
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Academic Calendar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important dates and schedules for the academic year
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Odd Semester (July - December)",
                events: [
                  { date: "July 1, 2024", event: "Semester Begins" },
                  {
                    date: "September 15-20, 2024",
                    event: "Mid-term Examinations",
                  },
                  {
                    date: "December 1-15, 2024",
                    event: "End Semester Examinations",
                  },
                ],
              },
              {
                title: "Even Semester (January - June)",
                events: [
                  { date: "January 2, 2024", event: "Semester Begins" },
                  { date: "March 15-20, 2024", event: "Mid-term Examinations" },
                  {
                    date: "June 1-15, 2024",
                    event: "End Semester Examinations",
                  },
                ],
              },
            ].map((semester, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {semester.title}
                </h3>
                <div className="space-y-4">
                  {semester.events.map((event, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="bg-[#0860b1]/10 p-2 rounded-full">
                        <Calendar className="w-5 h-5 text-[#0860b1]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {event.date}
                        </p>
                        <p className="text-gray-600">{event.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Syllabus;
