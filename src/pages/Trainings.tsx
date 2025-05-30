import { motion } from "framer-motion";
import {
  Factory,
  ShieldAlert,
  CheckCircle,
  BookOpen,
  Presentation,
  Mic,
  Calendar,
  Globe,
  Award,
} from "lucide-react";

import img1 from "../assets/images/campus.avif";
import img2 from "../assets/images/labs.avif";
const trainingData = {
  incubation: {
    title: "Incubation, Training & Placement Cell",
    content: `The members of the training and placement cell (TPC) work round the clock with extensive zeal & zest to promote students' candidature to the Industry. Apart from campus recruitment, we arrange off-campus recruitments and ensure each student gets fair interview opportunities. We train students from day one with annual technical, personality development, and soft skill programs for Engineering, Management & Polytechnic students.`,
    image: img1,
    stats: [
      { value: "95%", label: "Placement Rate" },
      { value: "200+", label: "Companies Visited" },
      { value: "500+", label: "Students Placed" },
    ],
  },
  industrialVisits: {
    title: "Industrial Visits",
    content: `Through industrial visits, students gain practical knowledge of prevalent industry processes. This year, each department conducted organized visits to enhance practical understanding of corporate operations and technological advancements.`,
    image: img2,
    highlights: [
      "Hands-on experience with industry tools",
      "Interaction with industry experts",
      "Understanding real-world workflows",
    ],
  },
  personalityDev: {
    title: "Personality Development Programs",
    skills: {
      softSkills: [
        "Debates & Quiz Competitions",
        "Elocution Practice Sessions",
        "Psychological Assessments",
        "Leadership Workshops",
        "Motivational Seminars",
      ],
      technicalSkills: [
        "Technical Exhibitions",
        "Paper Presentations",
        "Technical Contests",
        "Workshops & Student Forums",
        "Conference Hosting",
      ],
      coreSkills: [
        "Self-Confidence Building",
        "Goal Setting Strategies",
        "Teamwork Dynamics",
        "Vision Development",
        "Stress & Time Management",
      ],
    },
  },
  parentTeacher: {
    title: "Parents-Teachers Meet",
    content: `Our structured meetings create collaborative partnerships between educators and families, featuring academic progress reviews, career guidance sessions, and customized learning strategies to ensure student success.`,
    features: [
      "Academic Progress Tracking",
      "Behavioral Development Plans",
      "Career Pathway Discussions",
      "Custom Learning Strategies",
      "Co-curricular Activity Planning",
    ],
    image: img1,
  },
  antiRagging: {
    title: "Anti-Ragging Policy",
    content: `Strictly adhering to Maharashtra Prohibition of Ragging Act, 1999 and AICTE Notification No. 37-3/Legal/AICTE/2009 (25-03-2009):`,
    measures: [
      "24/7 CCTV Surveillance",
      "Mandatory Awareness Workshops",
      "Immediate Disciplinary Action",
      "Confidential Reporting System",
      "Student Mentorship Programs",
    ],
  },
  additionalFeatures: {
    title: "Additional Features",
    items: [
      {
        icon: <Calendar className="w-8 h-8" />,
        title: "Regular Workshops",
        description: "Monthly workshops on emerging technologies and trends.",
      },
      {
        icon: <Globe className="w-8 h-8" />,
        title: "Global Exposure",
        description:
          "Opportunities for international internships and projects.",
      },
      {
        icon: <Award className="w-8 h-8" />,
        title: "Certifications",
        description: "Industry-recognized certification programs.",
      },
    ],
  },
};

const SkillCard = ({ title, items, icon }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 rounded-lg bg-[#001560]/10 text-[#001560]">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#b71a34]">{title}</h3>
    </div>
    <ul className="space-y-4">
      {items.map((item: string, index: number) => (
        <li key={index} className="flex items-center gap-3 text-gray-600">
          <CheckCircle className="w-5 h-5 text-[#001560]" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const StatCard = ({ value, label }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
  >
    <h3 className="text-4xl font-bold text-[#001560]">{value}</h3>
    <p className="text-lg text-gray-600 mt-2">{label}</p>
  </motion.div>
);

export default function TrainingPlacement() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24 mt-10"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-[#001560] mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#001560] to-[#b71a34]">
              Professional Development Ecosystem
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Comprehensive career preparation through industry-aligned training
            and holistic development
          </p>
        </motion.div>

        {/* TPC Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 mb-28"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-xl group">
            <img
              src={trainingData.incubation.image}
              alt="Placement Cell"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#b71a34] mb-6">
              {trainingData.incubation.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {trainingData.incubation.content}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {trainingData.incubation.stats.map((stat, index) => (
                <StatCard key={index} value={stat.value} label={stat.label} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Industrial Visits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#001560] to-[#b71a34] rounded-3xl p-8 lg:p-12 text-white mb-28"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Factory className="w-12 h-12" />
                <h3 className="text-3xl font-bold">
                  {trainingData.industrialVisits.title}
                </h3>
              </div>
              <p className="text-lg leading-relaxed mb-8">
                {trainingData.industrialVisits.content}
              </p>
              <ul className="space-y-3">
                {trainingData.industrialVisits.highlights.map(
                  (highlight, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      {highlight}
                    </li>
                  )
                )}
              </ul>
            </div>
            <img
              src={trainingData.industrialVisits.image}
              alt="Industrial Visit"
              className="rounded-2xl shadow-xl transform transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Personality Development */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-28"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#001560] mb-12 text-center">
            Holistic Development Programs
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <SkillCard
              title="Core Skills"
              items={trainingData.personalityDev.skills.coreSkills}
              icon={<BookOpen className="w-6 h-6" />}
            />
            <SkillCard
              title="Technical Excellence"
              items={trainingData.personalityDev.skills.technicalSkills}
              icon={<Presentation className="w-6 h-6" />}
            />
            <SkillCard
              title="Soft Skills"
              items={trainingData.personalityDev.skills.softSkills}
              icon={<Mic className="w-6 h-6" />}
            />
          </div>
        </motion.div>

        {/* Parent-Teacher Collaboration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 bg-[#f8f9fa] rounded-3xl p-8 lg:p-12 mb-28"
        >
          <img
            src={trainingData.parentTeacher.image}
            alt="Parent-Teacher Meet"
            className="rounded-2xl shadow-xl transform transition-transform duration-700 hover:scale-105"
          />
          <div>
            <h3 className="text-3xl font-bold text-[#b71a34] mb-8">
              {trainingData.parentTeacher.title}
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              {trainingData.parentTeacher.content}
            </p>
            <ul className="space-y-4">
              {trainingData.parentTeacher.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#001560]" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Anti-Ragging Policy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#b71a34] text-white rounded-3xl p-8 lg:p-12"
        >
          <div className="flex items-center gap-6 mb-8">
            <ShieldAlert className="w-12 h-12" />
            <h3 className="text-3xl font-bold">
              {trainingData.antiRagging.title}
            </h3>
          </div>
          <div className="space-y-6">
            <p className="text-lg">{trainingData.antiRagging.content}</p>
            <ul className="grid md:grid-cols-2 gap-6">
              {trainingData.antiRagging.measures.map((measure, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" />
                  {measure}
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm opacity-80">
              As per Maharashtra Act 1999 & AICTE Notification No.
              37-3/Legal/AICTE/2009
            </div>
          </div>
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-28"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#001560] mb-12 text-center">
            {trainingData.additionalFeatures.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingData.additionalFeatures.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-[#001560]/10 text-[#001560]">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#b71a34]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
