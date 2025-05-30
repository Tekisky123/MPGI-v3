import {
  Factory,
  Settings,
  CircuitBoard,
  HardHat,
  ArrowRight,
  Settings2,
} from "lucide-react";

const VishwabhartiPolytechnicCourses = () => {
  const diplomaPrograms = [
    { name: "Civil Engineering", intake: "60", code: "211619110" },
    { name: "Mechanical Engineering", intake: "60", code: "211624210" },
    { name: "Electrical Engineering", intake: "60", code: "211629310" },
    { name: "Computer Technology", intake: "60", code: "211661210" },
    { name: "Electronics & Telecom", intake: "30", code: "211692310" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-mpgin-darkBlue">
      {/* Hero Section */}
      <div className="bg-mpgin-darkBlue text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Polytechnic Programs
            <span className="block text-mpgin-blue mt-2">At Vishwabharti</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            MSBTE Approved | Industry-Focused Curriculum | Skill Development
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Factory className="w-8 h-8 text-mpgin-blue" />
              <h2 className="text-2xl md:text-3xl font-bold">
                About Vishwabharti Polytechnic
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Established in 2009, Vishwabharti Polytechnic Institute offers
              3-year diploma programs in various engineering disciplines.
              Affiliated to MSBTE and approved by AICTE, our institute focuses
              on hands-on training and industry-relevant skills development. We
              bridge the gap between theoretical knowledge and practical
              implementation through our state-of-the-art workshops and industry
              partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Diploma Programs */}
      <section className="py-16 px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Settings className="w-8 h-8 text-mpgin-blue" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Diploma Programs
              </h2>
            </div>

            {/* Program Table */}
            <div className="overflow-x-auto shadow-sm">
              <table className="w-full">
                <thead className="bg-mpgin-darkBlue text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Program</th>
                    <th className="px-4 py-3 text-left">Intake</th>
                    <th className="px-4 py-3 text-left">MSBTE Code</th>
                  </tr>
                </thead>
                <tbody>
                  {diplomaPrograms.map((program, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 even:bg-gray-50"
                    >
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
                  icon: <Settings2 className="w-6 h-6" />,
                  title: "Workshop Training",
                  text: "500+ hours of practical workshop sessions",
                },
                {
                  icon: <CircuitBoard className="w-6 h-6" />,
                  title: "Lab Facilities",
                  text: "15+ industry-standard laboratories",
                },
                {
                  icon: <HardHat className="w-6 h-6" />,
                  title: "Internships",
                  text: "Mandatory 6-month industry training",
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
              Skill Development Certifications
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              NSDC approved certifications integrated with diploma programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "CNC Machine Programming",
              "AutoCAD Mechanical",
              "PLC & SCADA Training",
              "Welding Technology",
              "Electric Vehicle Maintenance",
              "Solar Panel Installation",
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

    </div>
  );
};

export default VishwabhartiPolytechnicCourses;
