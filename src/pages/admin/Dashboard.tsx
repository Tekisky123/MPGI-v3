import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ManageAdmins from './ManageAdmins';
import SchoolComponent from './SchoolComponent';
import { motion } from 'framer-motion';
import { collegeConfigs, CollegeType } from '../../data/colleges';
import { LogOut } from 'lucide-react';
import NotificationsTable from './NotificationsTable';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<CollegeType | 'admins'>('engineering');
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();

  const tabs = [
    { id: 'engineering', label: collegeConfigs.engineering.displayName },
    { id: 'management', label: collegeConfigs.management.displayName },
    { id: 'polytechnic', label: collegeConfigs.polytechnic.displayName },
    { id: 'notifications', label: 'Notifications' },
    { id: 'admins', label: 'Manage Admins' },
  ];

  // Handle logout confirmation
  const handleLogout = () => {
    setIsLogoutModalOpen(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('authToken'); // Clear authToken
    navigate('/'); // Navigate to home route
  };

  const closeModal = () => {
    setIsLogoutModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 md:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Institution Dashboard
          </h1>
          <p className="text-gray-500 mt-1">Manage all school activities and administration</p>
        </div>
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-600 flex gap-2 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all"
        >
          <LogOut/>
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 md:gap-4 border-b border-gray-200 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as CollegeType | 'admins')}
            className={`relative px-5 py-2.5 rounded-full font-medium transition-all duration-300 ease-in-out focus:outline-none ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100'
              }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="tab-underline"
                className="absolute inset-0 rounded-full bg-blue-600 z-[-1]"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 md:p-10 transition-all duration-300 ease-in-out">
      {activeTab === 'admins' ? (
      <ManageAdmins />
    ) : activeTab === 'notifications' ? (
      <NotificationsTable />
    ) : (
      <SchoolComponent collegeType={activeTab} />
    )}
      </div>

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal} // Close modal on outside click
        >
          <div
            className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <h3 className="text-xl font-semibold mb-4">Confirm Logout</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to log out? You will be redirected to the Home page.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Handle Escape Key to Close Modal */}
      {isLogoutModalOpen && (
        <div
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeModal();
          }}
          tabIndex={0}
          className="fixed inset-0 z-40"
        ></div>
      )}
    </div>
  );
};

export default Dashboard;