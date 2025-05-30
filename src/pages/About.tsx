import { motion } from "framer-motion";
import {
  Globe,
  Rocket,
  Users,
  Star,
  Shield,
  Handshake,
  GraduationCap,
} from "lucide-react";
import labImage from "../assets/images/labs.avif";
import studentsImage from "../assets/images/students.jpeg";

const AboutUs = () => {
  const aboutContent = {
    introduction: {
      title: "About MPGI",
      content: `Matoshri Pratishthan Group of Institutions (MPGI) has been a beacon of excellence in Engineering & Management Education since 2009. Our integrated campus offers multidisciplinary programs bridging academic knowledge with industry requirements through hands-on learning and strong corporate partnerships.`,
    },
    objectives: [
      {
        title: "Academic Excellence",
        icon: <Star className="w-6 h-6 text-mpgin-blue" />,
        points: [
          "World-class technical education in Engineering & Management",
          "Synergetic industry-institute partnerships",
          "E-learning and e-governance initiatives",
        ],
      },
      {
        title: "Student Development",
        icon: <GraduationCap className="w-6 h-6 text-mpgin-blue" />,
        points: [
          "Foster entrepreneurial mindset",
          "Encourage academic collaborations",
          "Nurture innovation and creativity",
        ],
      },
      {
        title: "Faculty Growth",
        icon: <Users className="w-6 h-6 text-mpgin-blue" />,
        points: [
          "Continuous technical upskilling",
          "Curriculum modernization",
          "Research culture promotion",
        ],
      },
    ],
    mission: {
      title: "Our Mission",
      content: `To establish world-class institutions delivering quality education in Engineering, Management, and IT, fostering socially responsible leaders through innovative teaching and industry-aligned programs.`,
      icon: <Rocket className="w-8 h-8 text-mpgin-blue" />,
    },
    vision: {
      title: "Our Vision",
      content: `To be a global center of excellence nurturing innovation and entrepreneurship while contributing to sustainable national development through holistic, value-based education.`,
      icon: <Globe className="w-8 h-8 text-mpgin-blue" />,
    },
    stats: [
      { value: "14+", label: "Years of Excellence", icon: <Shield className="text-mpgin-blue" /> },
      { value: "1500+", label: "Successful Alumni", icon: <Users className="text-mpgin-blue" /> },
      { value: "50+", label: "Industry Partners", icon: <Handshake className="text-mpgin-blue" /> },
    ],
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-mpgin-darkBlue mb-4">
            Shaping Future Leaders
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforming Education Through Innovation & Industry Integration
          </p>
        </motion.div>

        {/* Introduction */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-mpgin-darkBlue">
              {aboutContent.introduction.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {aboutContent.introduction.content}
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-4">
            {aboutContent.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center"
              >
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-mpgin-darkBlue">{stat.value}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Objectives */}
        <div className="space-y-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-mpgin-darkBlue text-center">
            Our Strategic Pillars
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {aboutContent.objectives.map((objective, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg border border-gray-200 p-6"
              >
                <div className="mb-4">{objective.icon}</div>
                <h4 className="text-xl font-bold text-mpgin-darkBlue mb-3">{objective.title}</h4>
                <ul className="space-y-2">
                  {objective.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <div className="w-1.5 h-1.5 bg-mpgin-blue rounded-full mt-2 mr-2" />
                      <span className="text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative rounded-lg overflow-hidden min-h-[300px] bg-gray-900"
          >
            <img
              src={labImage}
              alt="Lab"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-center">
              <div className="mb-3">{aboutContent.mission.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {aboutContent.mission.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {aboutContent.mission.content}
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative rounded-lg overflow-hidden min-h-[300px] bg-gray-900"
          >
            <img
              src={studentsImage}
              alt="Students"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 p-6 flex flex-col justify-center">
              <div className="mb-3">{aboutContent.vision.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {aboutContent.vision.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {aboutContent.vision.content}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;