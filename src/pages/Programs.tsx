import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ProgramCard from '../components/ProgramCard';
import { programs } from '../data/programs';
import { BookOpen, Users, Clock } from 'lucide-react';

const Programs = () => {
  const programCategories = [
    {
      title: 'Engineering',
      description: 'Four-year B.Tech programs in various engineering disciplines.',
      programs: programs.filter(p => p.id.includes('btech'))
    },
    {
      title: 'Management',
      description: 'Two-year MBA program with multiple specializations.',
      programs: programs.filter(p => p.id.includes('mba'))
    },
    {
      title: 'Diploma',
      description: 'Three-year diploma programs in engineering.',
      programs: programs.filter(p => p.id.includes('diploma'))
    }
  ];

  return (
    <div>
      <PageHeader
        title="Our Programs"
        subtitle="Comprehensive academic programs designed for your success"
        backgroundImage="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Program Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                stat: '15+',
                text: 'Academic Programs'
              },
              {
                icon: Users,
                stat: '2000+',
                text: 'Current Students'
              },
              {
                icon: Clock,
                stat: '95%',
                text: 'Placement Rate'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg"
              >
                <div className="bg-[#0860b1] p-3 rounded-full">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{item.stat}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Categories */}
      {programCategories.map((category, categoryIndex) => (
        <section key={category.title} className={`py-20 px-4 ${categoryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.programs.map((program, index) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Programs;