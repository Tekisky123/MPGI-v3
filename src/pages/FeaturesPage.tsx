import { motion } from "framer-motion";
import {
  Wifi,
  Monitor,
  Book,
  Presentation,
  Settings,
  FlaskConical,
  Home,
  Bus,
  Utensils,
  Droplets,
  Briefcase,
  Users,
  Calendar,
  Megaphone,
  BadgePercent,
  Hotel,
  Trophy,
} from "lucide-react";

import wifi from "../assets/images/wifi.jpg";
import labs from "../assets/images/labs.avif";
import eLibrary from "../assets/images/e-Library.jpg";
import Classrooms from "../assets/images/DigitalClassrooms.jpg";
import Workshop from "../assets/images/AdvancedWorkshop.jpeg";
import Auditorium from "../assets/images/Digital Auditorium.jpeg";

const FeaturesPage = () => {
  const features = [
    {
      icon: <Wifi className="w-10 h-10" />,
      title: "WI-FI Campus",
      desc: "Fully wireless enabled campus with high-speed internet access covering entire 25-acre premises",
      image: wifi,
    },
    {
      icon: <Monitor className="w-10 h-10" />,
      title: "Advanced Computer Center",
      desc: "250+ latest i5 processors with 50 Mbps leased line connectivity and 24/7 access",
      image: labs,
    },
    {
      icon: <Book className="w-10 h-10" />,
      title: "Central e-Library",
      desc: "26,000+ physical and digital resources with DELNET access and 24/7 online journal availability",
      image: eLibrary,
    },
    {
      icon: <Presentation className="w-10 h-10" />,
      title: "Digital Classrooms",
      desc: "Smart classrooms with 4K LCD projectors, interactive whiteboards, and video conferencing systems",
      image: Classrooms,
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Advanced Workshop",
      desc: "10,000 sq.ft workshop with CNC machines, 3D printers, and industrial-grade equipment",
      image: Workshop,
    },
    {
      icon: <Hotel className="w-10 h-10" />,
      title: "Digital Auditorium",
      desc: "800-seat capacity auditorium with Dolby Atmos sound and 4K projection systems",
      image: Auditorium,
    },
    {
      icon: <FlaskConical className="w-10 h-10" />,
      title: "State-of-the-art Labs",
      desc: "30+ specialized labs with IoT, AI/ML, and advanced engineering research facilities",
      image: "/images/features/science-lab.jpg",
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: "Hostel Facilities",
      desc: "AC hostels with gym, laundry, and recreational facilities for 1500+ students",
      image: "/images/features/hostel.jpg",
    },
    {
      icon: <Bus className="w-10 h-10" />,
      title: "Transportation",
      desc: "Fleet of 25 GPS-enabled buses covering 150km radius with real-time tracking",
      image: "/images/features/transport.jpg",
    },
    {
      icon: <Utensils className="w-10 h-10" />,
      title: "Cafeteria",
      desc: "Multi-cuisine food court with 500-seat capacity and ISO-certified kitchen standards",
      image: "/images/features/cafeteria.jpg",
    },
    {
      icon: <Droplets className="w-10 h-10" />,
      title: "RO Water Plant",
      desc: "Centralized 10,000LPH RO plant with mineral enrichment and 24/7 monitoring",
      image: "/images/features/ro-plant.jpg",
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "Sports Complex",
      desc: "Olympic-size swimming pool, synthetic tracks, and professional coaching facilities",
      image: "/images/features/sports-complex.jpg",
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Placement Cell",
      desc: "Dedicated corporate relations team with 200+ national and international recruiters",
      image: "/images/features/placement-cell.jpg",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Personality Development",
      desc: "Regular workshops on leadership, communication, and industry readiness skills",
      image: "/images/features/personality-development.jpg",
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Structured Academics",
      desc: "Industry-aligned curriculum with flexible credit system and skill certifications",
      image: "/images/features/academics.jpg",
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Expert Lecture Series",
      desc: "Weekly sessions with industry leaders and Nobel laureate interactions",
      image: "/images/features/expert-lecture.jpg",
    },
    {
      icon: <BadgePercent className="w-10 h-10" />,
      title: "Scholarship Programs",
      desc: "Merit-based fee concessions up to 100% for top-performing students",
      image: "/images/features/scholarship.jpg",
    },
  ];

  const stats = [
    {
      value: 250,
      suffix: "+",
      label: "High-end Computers",
      color: "bg-[#001560]",
    },
    {
      value: 26000,
      suffix: "+",
      label: "Library Books",
      color: "bg-[#b71a34]",
    },
    { value: 30, suffix: "+", label: "Advanced Labs", color: "bg-[#001560]" },
    {
      value: 100,
      suffix: "%",
      label: "Placement Assistance",
      color: "bg-[#b71a34]",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    },
  };

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20 mt-10">
        {/* Hero Section */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24 mt-10"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-[#001560] mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#001560] to-[#b71a34]">
              World-Class Campus Infrastructure
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Experience next-generation learning environment with cutting-edge
            facilities designed to foster innovation and academic excellence
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          animate="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative h-48 bg-gray-100">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  {feature.icon}
                </div>
              </div>

              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-[#001560]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Stats Section */}
        <motion.section
          className="grid md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              className={`${stat.color} text-white p-8 rounded-2xl text-center 
              shadow-lg hover:shadow-xl transition-shadow`}
            >
              <motion.div
                className="text-5xl font-bold mb-2"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                {stat.value}
                {stat.suffix}
              </motion.div>
              <div className="text-sm font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Detailed Sections */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#001560]">
                Holistic Learning Ecosystem
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our campus integrates advanced technological infrastructure with
                wellness-focused amenities to create an environment that
                nurtures both academic and personal growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-[#b71a34] font-bold text-2xl">15K+</div>
                <div className="text-gray-600">Square Feet Library</div>
              </div>
              <div className="space-y-2">
                <div className="text-[#b71a34] font-bold text-2xl">24/7</div>
                <div className="text-gray-600">Security & Surveillance</div>
              </div>
              <div className="space-y-2">
                <div className="text-[#b71a34] font-bold text-2xl">5+</div>
                <div className="text-gray-600">Sports Arenas</div>
              </div>
              <div className="space-y-2">
                <div className="text-[#b71a34] font-bold text-2xl">10+</div>
                <div className="text-gray-600">Dedicated Research Centers</div>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#001560]/90 to-[#b71a34]/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xl font-medium">
                Campus Infrastructure Visualization
              </span>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default FeaturesPage;
