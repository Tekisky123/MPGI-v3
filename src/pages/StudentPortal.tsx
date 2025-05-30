import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { FileText, Award, IndianRupee, Calendar, Briefcase, Book } from "lucide-react";

const StudentPortal = () => {
  return (
    <div>
      <PageHeader
        title="Student Portal"
        subtitle="Access your academic information and resources"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Quick Links */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Exam Results",
                icon: Award,
                description: "View your semester-wise examination results",
                link: "/student-portal/results",
              },
              {
                title: "Admit Cards",
                icon: FileText,
                description: "Download exam hall tickets",
                link: "/student-portal/admit-cards",
              },
              {
                title: "Fee Payment",
                icon: IndianRupee,
                description: "Pay your semester fees online",
                link: "/student-portal/fees",
              },
              {
                title: "Time Table",
                icon: Calendar,
                description: "View your class and exam schedules",
                link: "/student-portal/timetable",
              },
              {
                title: "Placements",
                icon: Briefcase,
                description: "Explore placement opportunities and job listings",
                link: "/student-portal/placements",
              },
              {
                title: "Syllabus",
                icon: Book,
                description: "Download course syllabus for your program",
                link: "/student-portal/syllabus",
              },
            ].map((item, index) => (
              <Link key={index} to={item.link} className="block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg h-full hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-[#0860b1]/10 p-3 rounded-full">
                      <item.icon className="w-6 h-6 text-[#0860b1]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/results" element={<Results />} />
            <Route path="/admit-cards" element={<AdmitCards />} />
            <Route path="/fees" element={<FeePayment />} />
            <Route path="/timetable" element={<TimeTable />} />
          </Routes>
        </div>
      </section>
    </div>
  );
};

// Sub-components
const Results = () => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6">Examination Results</h2>
    <div className="space-y-4">
      {["Winter 2023", "Summer 2023", "Winter 2022"].map((semester, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
        >
          <h3 className="font-semibold">{semester}</h3>
          <button className="text-[#0860b1] hover:text-[#064481] mt-2">
            View Result
          </button>
        </div>
      ))}
    </div>
  </div>
);

const AdmitCards = () => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6">Admit Cards</h2>
    <div className="space-y-4">
      {["Winter 2024 Final Exam", "Winter 2024 Mid-term"].map((exam, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
        >
          <h3 className="font-semibold">{exam}</h3>
          <button className="text-[#0860b1] hover:text-[#064481] mt-2">
            Download Admit Card
          </button>
        </div>
      ))}
    </div>
  </div>
);

const FeePayment = () => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6">Fee Payment</h2>
    <div className="space-y-6">
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold mb-2">Current Semester Fee</h3>
        <p className="text-gray-600 mb-4">Amount Due: ₹95,000</p>
        <button className="bg-[#0860b1] text-white px-6 py-2 rounded-md hover:bg-[#064481] transition-colors">
          Pay Now
        </button>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-semibold mb-4">Payment History</h3>
        <div className="space-y-2">
          {[
            { semester: "Winter 2023", amount: "₹95,000", status: "Paid" },
            { semester: "Summer 2023", amount: "₹95,000", status: "Paid" },
          ].map((payment, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 hover:bg-gray-50 rounded"
            >
              <span>{payment.semester}</span>
              <span>{payment.amount}</span>
              <span className="text-green-600">{payment.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const TimeTable = () => (
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6">Time Table</h2>
    <div className="space-y-4">
      {["Class Schedule", "Exam Schedule"].map((schedule, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
        >
          <h3 className="font-semibold">{schedule}</h3>
          <button className="text-[#0860b1] hover:text-[#064481] mt-2">
            View Schedule
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default StudentPortal;
