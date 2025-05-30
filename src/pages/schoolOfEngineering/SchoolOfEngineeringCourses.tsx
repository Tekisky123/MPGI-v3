import { GraduationCap, BookOpenCheck, Cpu, Factory, HardHat, CircuitBoard, Briefcase } from "lucide-react";

const SchoolOfEngineeringCourses = () => {
  const undergraduatePrograms = [
    { name: "Civil Engineering", intake: "60", code: "211619110" },
    { name: "Computer Science & Eng.", intake: "60", code: "211624210" },
    { name: "Electrical Engineering", intake: "60", code: "211629310" },
    { name: "Mechanical Engineering", intake: "60", code: "211661210" },
    { name: "Electronics and Telecommunication Engineering", intake: "60", code: "211629510" }, // Added new department
  ];

  const postgraduatePrograms = [
    { name: "Computer Science & Eng.", intake: "24", code: "211624210" },
    { name: "Mechanical Engineering", intake: "24", code: "211661210" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-mpgin-darkBlue">
      {/* Hero Section */}
      <div className="bg-mpgin-darkBlue text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Engineering Programs
            <span className="block text-mpgin-blue mt-2">At MPGIN</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            NAAC A++ Accredited | NBA Approved Programs | Industry-Aligned Curriculum
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
                About School Of Engineering
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Matoshri Pratishthan School of Engineering offers full time four
              years Bachelor's Degree in Engineering approved by the All India
              Council for Technical Education (AICTE), New Delhi and sanctioned
              by Govt. of Maharashtra (DTE) and affiliated to DR BABA SAHEB
              AMBEDKAR TECHNOLOGICA UNIVERSITY LONERE (BATU). Courses offered in
              Bachelor of Civil Engineering, Computer Science Engineering,
              Mechanical Engineering, Electrical Engineering, and Electronics and
              Telecommunication Engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Undergraduate Programs */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap className="w-8 h-8 text-mpgin-blue" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Undergraduate Programs (B.Tech)
              </h2>
            </div>

            <div className="overflow-x-auto shadow-sm">
              <table className="w-full">
                <thead className="bg-mpgin-darkBlue text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Program</th>
                    <th className="px-4 py-3 text-left">Intake</th>
                    <th className="px-4 py-3 text-left">DTE Code</th>
                  </tr>
                </thead>
                <tbody>
                  {undergraduatePrograms.map((program, index) => (
                    <tr key={index} className="hover:bg-gray-50 even:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{program.name}</td>
                      <td className="px-4 py-3">{program.intake}</td>
                      <td className="px-4 py-3">{program.code}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: <Factory className="w-6 h-6" />,
                  title: "Industry Connect",
                  text: "6-month mandatory industry internship",
                },
                {
                  icon: <CircuitBoard className="w-6 h-6" />,
                  title: "Lab Facilities",
                  text: "15+ advanced research laboratories",
                },
                {
                  icon: <HardHat className="w-6 h-6" />,
                  title: "Certifications",
                  text: "Integrated skill development programs",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-50 border-l-2 border-mpgin-blue"
                >
                  <div className="text-mpgin-blue mb-2">{item.icon}</div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Postgraduate Programs */}
          <div>
            <div className="flex items-center gap-4 mb-6 mt-12">
              <BookOpenCheck className="w-8 h-8 text-mpgin-blue" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Postgraduate Programs (M.Tech)
              </h2>
            </div>

            <div className="overflow-x-auto shadow-sm">
              <table className="w-full">
                <thead className="bg-mpgin-darkBlue text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Program</th>
                    <th className="px-4 py-3 text-left">Intake</th>
                    <th className="px-4 py-3 text-left">DTE Code</th>
                  </tr>
                </thead>
                <tbody>
                  {postgraduatePrograms.map((program, index) => (
                    <tr key={index} className="hover:bg-gray-50 even:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{program.name}</td>
                      <td className="px-4 py-3">{program.intake}</td>
                      <td className="px-4 py-3">{program.code}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: <Cpu className="w-6 h-6" />,
                  title: "Research Focus",
                  text: "Thesis work with industry collaboration",
                },
                {
                  icon: <GraduationCap className="w-6 h-6" />,
                  title: "Doctoral Pathway",
                  text: "Direct PhD admission opportunities",
                },
                {
                  icon: <BookOpenCheck className="w-6 h-6" />,
                  title: "Publications",
                  text: "Support for international journal publications",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-50 border-l-2 border-mpgin-blue"
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
              "AutoCAD Professional Certification",
              "Six Sigma Green Belt",
              "IoT Specialist Program",
              "Advanced CNC Programming",
              "PEB Design Certification",
              "Solar Energy Technician",
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
              Start Your Engineering Journey
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

export default SchoolOfEngineeringCourses;