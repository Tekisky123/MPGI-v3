import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import NotificationComponent from "../../components/NotificationComponent";
import {
  achievementData,
  navItems,
  placementData,
  profiles,
  nirfData,
  mandatoryDisclosureData,
  iqacData,
  visionMissionData
} from '../../data/SchoolOfManagementQuickLinkData';

// Function to render NPTEL table
const renderNptelTable = (data) => {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 font-bold">Sr No</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 font-bold">Department Name</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 font-bold">No Of Registrations</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 font-bold">Total Registrations</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border border-gray-300">{row.srNo}</td>
              <td className="px-4 py-2 border border-gray-300">{row.departmentName}</td>
              <td className="px-4 py-2 border border-gray-300">{row.noOfRegistrations}</td>
              <td className="px-4 py-2 border border-gray-300">{row.totalRegistrations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Function to render table for IQAC
const renderTable = (data) => {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 font-bold">Particulars of the post</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100 font-bold">Name of the Member</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border border-gray-300">{row.post}</td>
              <td className="px-4 py-2 border border-gray-300">{row.member}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Helper function to render content with line breaks and markdown-like formatting
const renderContent = (content: string, tableData: Array<{ srNo: number, departmentName: string, noOfRegistrations: number, totalRegistrations: number }> = [], iqacTableData: Array<{ post: string, member: string }> = []) => {
  const paragraphs = content.split('\n');

  return (
    <>
      {paragraphs.map((paragraph, index) => {
        if (paragraph.startsWith('![')) {
          // Handle image markdown syntax
          const imageAlt = paragraph.match(/!\[(.*?)\]/)?.[1] || '';
          const imageSrc = paragraph.match(/\((.*?)\)/)?.[1] || '';
          return (
            <div key={index} className="my-4">
              <img src={imageSrc} alt={imageAlt} className="w-full h-auto" />
            </div>
          );
        } else if (paragraph.startsWith('-')) {
          return (
            <ul key={index} className="list-disc pl-6 space-y-1 text-gray-700 font-semibold">
              {paragraph.slice(1).split(', ').map((item, i) => (
                <li key={i}>{item.trim()}</li>
              ))}
            </ul>
          );
        } else if (paragraph.startsWith('## ') || paragraph.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl font-bold text-mpgin-darkBlue mt-4 mb-2">{paragraph.slice(3)}</h3>
          );
        } else if (paragraph.startsWith('# ')) {
          return (
            <h2 key={index} className="text-2xl font-bold text-mpgin-darkBlue mt-6 mb-3 border-b pb-2 border-gray-300">{paragraph.slice(2)}</h2>
          );
        } else if ((paragraph.startsWith('**') && paragraph.endsWith('**')) || (paragraph.startsWith('*') && paragraph.endsWith('*'))) {
          return (
            <p key={index} className="font-bold text-gray-800">{paragraph.slice(1, -1)}</p>
          );
        } else {
          return (
            <p key={index} className="text-gray-700">{paragraph}</p>
          );
        }
      })}
      {tableData.length > 0 && renderNptelTable(tableData)}
      {iqacTableData.length > 0 && renderTable(iqacTableData)}
    </>
  );
};

const SchoolOfManagementQuickLinks = () => {
  const [activeId, setActiveId] = useState('dean');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !menuButtonRef.current?.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSidebarOpen(false);
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const renderMainContent = () => {
    switch (activeId) {
      case 'dean':
        const dean = profiles.find((p) => p.id === 'dean');
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 w-full"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/3 p-4 sm:p-8 lg:p-10 order-2 lg:order-1">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
                >
                  {dean?.name}'s Profile
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4 text-gray-700 leading-relaxed"
                >
                  {dean?.content && renderContent(dean.content)}
                </motion.div>
              </div>

              <div className="lg:w-1/3 p-6 sm:p-8 lg:p-10 border-l border-gray-200 flex flex-col items-center bg-gray-50 order-1 lg:order-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-lg overflow-hidden shadow-md mb-6 border-4 border-white ring-2 ring-mpgin-blue"
                >
                  <img
                    src={dean?.image}
                    alt={dean?.name}
                    className="w-full h-auto max-w-xs object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-mpgin-darkBlue">{dean?.name}</h2>
                  <p className="mt-2 text-lg  text-mpgin-blue">{dean?.title}</p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'placements':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
            >
              {placementData.title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose max-w-none text-gray-700  whitespace-pre-line"
            >
              {renderContent(placementData.content)}
            </motion.div>
          </motion.div>
        );

      case 'achievements':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
            >
              {achievementData.title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose max-w-none  text-gray-700 whitespace-pre-line"
            >
              {renderContent(achievementData.content)}
            </motion.div>
          </motion.div>
        );

      case 'nirf':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
            >
              {nirfData.title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose max-w-none text-gray-700 whitespace-pre-line"
            >
              {renderContent(nirfData.content)}
            </motion.div>
          </motion.div>
        );

      case 'mandatory-disclosure':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
            >
              {mandatoryDisclosureData.title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose max-w-none  text-gray-700 whitespace-pre-line"
            >
              {renderContent(mandatoryDisclosureData.content)}
            </motion.div>
          </motion.div>
        );

      case 'iqac':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
            >
              {iqacData.title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose max-w-none font-semibold text-gray-700 whitespace-pre-line"
            >
              {renderContent(iqacData.content, [], iqacData.tableData)}
            </motion.div>
          </motion.div>
        );

      case 'vision-mission':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
            >
              {visionMissionData.title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose max-w-none  text-gray-700 whitespace-pre-line"
            >
              {renderContent(visionMissionData.content)}
            </motion.div>
          </motion.div>
        );

      default:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 p-6 sm:p-8 lg:p-10 w-full"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
            >
              {navItems.find((item) => item.id === activeId)?.label}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-700 text-lg"
            >
              Content for this section is coming soon. Please check back later.
            </motion.p>
          </motion.div>
        );
    }
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      <div className="md:hidden flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-mpgin-darkBlue"></h2>
        <button
          ref={menuButtonRef}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-mpgin-darkBlue"
        >
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className="w-full mx-auto flex flex-col lg:flex-row gap-6">
        <aside
          className={`lg:w-1/4 xl:w-1/5 bg-gray-50 p-4 rounded-lg shadow-md transition-all duration-300 fixed lg:static z-50 lg:z-auto h-full  overflow-y-auto ${isSidebarOpen ? 'block inset-0' : 'hidden lg:block'}`}
          ref={sidebarRef}
        >
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden absolute top-4 right-4 text-mpgin-darkBlue"
          >
            <X size={24} />
          </button>
          <nav className="space-y-2 mt-6 md:mt-0">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ x: 5 }}
                onClick={() => {
                  setActiveId(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`block w-full border border-gray-200 text-left py-3 px-4 transition-all duration-200 font-bold text-lg md:text-base ${activeId === item.id
                  ? 'bg-mpgin-darkBlue text-mpgin-blue underline'
                  : 'bg-mpgin-blue hover:bg-mpgin-darkBlue hover:text-white text-mpgin-darkBlue'
                  }`}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 lg:w-2/4 xl:w-3/5">
          {renderMainContent()}
        </main>

        <aside className="lg:w-1/4 xl:w-1/5">
          <div className="sticky top-44">
            <NotificationComponent />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default SchoolOfManagementQuickLinks;
