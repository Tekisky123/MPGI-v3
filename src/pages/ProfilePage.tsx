import { motion } from 'framer-motion';
import { profiles } from '../data/profilesData';

const ProfilePage = ({ id }: { id: string }) => {
  const profile = profiles.find((p) => p.id === id);

  if (!profile) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center p-8 bg-white shadow-md rounded-xl max-w-lg w-full transform transition-all hover:shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800">Profile Not Found</h1>
          <p className="mt-3 text-gray-600">The requested profile does not exist.</p>
        </div>
      </div>
    );
  }

  // Function to render content with paragraphs or lists
  const renderContent = (text: string) => {
    return text.split('\n\n').map((para, index) => {
      const isUnorderedList = para.startsWith('- ') || para.startsWith('* ');
      const isOrderedList = /^\d+\.\s/.test(para);

      if (isUnorderedList || isOrderedList) {
        const ListTag = isUnorderedList ? 'ul' : 'ol';
        const listStyle = isUnorderedList ? 'list-disc' : 'list-decimal';

        return (
          <ListTag key={index} className={`${listStyle} pl-6 mb-4 space-y-2`}>
            {para.split('\n').map((item, i) => (
              <li key={i} className="text-gray-700 leading-relaxed">
                {item.replace(/^[-*]\s|^\d+[.)]\s/, '')}
              </li>
            ))}
          </ListTag>
        );
      }

      return (
        <p key={index} className="mb-4 text-gray-800 leading-relaxed">
          {para}
        </p>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 lg:p-10">
        {/* Image Section - Displayed First on Mobile, Right on Desktop */}
        <div className="md:col-span-4 md:order-2 flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative rounded-lg overflow-hidden shadow-md mb-4 w-full"
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </motion.div>

          <div className="text-center w-full">
            <h2 className="text-xl font-bold text-mpgin-darkBlue">{profile.name}</h2>
            <p className="mt-2 text-md text-mpgin-blue">{profile.title}</p>
          </div>
        </div>

        {/* Profile Content Section - Displayed Second on Mobile, Left on Desktop */}
        <div className="md:col-span-8 md:order-1">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-mpgin-darkBlue mb-5 border-b pb-2 border-gray-300"
          >
            {profile.name}'s Profile
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 text-gray-700 leading-relaxed"
          >
            {renderContent(profile.content)}
            <p className="italic text-right text-mpgin-darkBlue font-semibold">– {profile.name}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
