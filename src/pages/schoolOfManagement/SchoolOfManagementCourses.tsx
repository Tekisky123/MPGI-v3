import { Briefcase, BookOpenCheck, DollarSign, Users, Globe, ArrowRight } from "lucide-react";

const SchoolOfManagementCourses = () => {
  const managementPrograms = [
    { name: "Marketing Management", intake: "120", code: "211610110" },
    { name: "Financial Management", intake: "120", code: "211610110" },
    { name: "Human Resource Management", intake: "120", code: "211610110" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-mpgin-darkBlue">
      {/* Hero Section */}
      <div className="bg-mpgin-darkBlue text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Management Programs
            <span className="block text-mpgin-blue mt-2">At MPGIN</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            AICTE Approved | SRTMU Affiliated | Industry-Aligned Curriculum
          </p>
        
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-8 h-8 text-mpgin-blue" />
              <h2 className="text-2xl md:text-3xl font-bold">
                About School of Management
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The School of Management of Matoshri Pratishthan Group of
              Institutions offers a two-year postgraduate program in Business
              Administration with specializations in Marketing Management,
              Finance, Human Resource Management, IT, and Banking. Established
              in 2009, the department is affiliated to Swami Ramanand Teerth
              Marathwada University, Nanded, and approved by AICTE, Govt. of
              Maharashtra. Our mission is to groom young and aspiring
              professionals to shape the future of the country.
            </p>
          </div>
        </div>
      </section>

      {/* Management Programs */}
      <section className="py-16 px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <BookOpenCheck className="w-8 h-8 text-mpgin-blue" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Postgraduate Programs (MBA)
              </h2>
            </div>

            {/* Program Table */}
            <div className="overflow-x-auto shadow-sm">
              <table className="w-full">
                <thead className="bg-mpgin-darkBlue text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Specialization</th>
                    <th className="px-4 py-3 text-left">Intake</th>
                    <th className="px-4 py-3 text-left">DTE Code</th>
                  </tr>
                </thead>
                <tbody>
                  {managementPrograms.map((program, index) => (
                    <tr key={index} className="hover:bg-gray-50 even:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{program.name}</td>
                      <td className="px-4 py-3">{program.intake}</td>
                      <td className="px-4 py-3 font-mono">{program.code}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Program Highlights */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: <DollarSign className="w-6 h-6" />,
                  title: "Financial Expertise",
                  text: "Advanced training in financial analysis and management",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "HR Development",
                  text: "Focus on talent acquisition and organizational behavior",
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "Global Marketing",
                  text: "Strategies for international market penetration",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white shadow-sm hover:shadow-md transition-shadow border-l-2 border-mpgin-blue"
                >
                  <div className="text-mpgin-blue mb-2">{item.icon}</div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification Programs */}
      <section className="py-16 px-6 lg:px-8 bg-mpgin-darkBlue text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Value-Added Certifications
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Industry-recognized certifications integrated with degree programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Digital Marketing Certification",
              "Financial Modeling & Valuation",
              "HR Analytics",
              "Business Analytics",
              "Supply Chain Management",
              "Entrepreneurship Development",
            ].map((certification, idx) => (
              <div
                key={idx}
                className="p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-mpgin-blue" />
                  <h3 className="font-medium">{certification}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Start Your Management Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Admissions open for 2024-25 academic year
            </p>
            <button className="bg-mpgin-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-mpgin-darkBlue transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolOfManagementCourses;