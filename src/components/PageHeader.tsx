import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle,
  backgroundImage = 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
}) => {
  return (
    <div className="relative h-[300px] flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0860b1]/90 to-[#064481]/90" />
      </div>
      
      <div className="relative text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;