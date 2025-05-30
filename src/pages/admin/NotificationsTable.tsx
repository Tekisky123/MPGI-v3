import { useEffect, useState, useCallback, useRef } from 'react';
import { toast } from 'sonner';
import { PencilIcon, TrashIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import axios, { AxiosError } from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { collegeConfigs, CollegeType } from '../../data/colleges';
import api from '../../data/Api';

interface Notification {
  _id: string;
  title: string;
  message: string;
  date: string;
  college: CollegeType;
  category: 'Notice Board' | 'News & Events' | 'Important Notice';
  linkText?: string;
  linkUrl?: string;
}

const CATEGORIES = [ 'News & Events'] as const;

const NotificationsTable = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState<CollegeType>('engineering');
  const [form, setForm] = useState<Omit<Notification, '_id'>>({
    title: '',
    message: '',
    date: new Date().toISOString().split('T')[0],
    college: 'engineering',
    category: 'Notice Board',
    linkText: '',
    linkUrl: ''
  });
  const [editId, setEditId] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const fetchNotifications = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get(`/notifications/college/${selectedCollege}`);
      
      if (data.success && Array.isArray(data.data)) {
        setNotifications(data.data);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      const error = err as AxiosError;
      console.error('Fetch error:', error);
      setNotifications([]);
      toast.error(error.response?.data?.message || 'Failed to load notifications');
    } finally {
      setIsLoading(false);
    }
  }, [selectedCollege]);

  const handleSubmit = async () => {
    if (!form.title || !form.message) {
      toast.error('Title and message are required');
      return;
    }

    try {
      const payload = {
        ...form,
        date: form.date || new Date().toISOString().split('T')[0]
      };

      if (editId) {
        await api.put(`/notifications/updatedNotification/${editId}`, payload);
        toast.success('Notification updated successfully');
      } else {
        await api.post('/notifications/createNotification', payload);
        toast.success('Notification created successfully');
      }
      
      setIsModalOpen(false);
      setEditId(null);
      fetchNotifications();
    } catch (err) {
      const error = err as AxiosError;
      console.error('Submit error:', error);
      toast.error(error.response?.data?.message || 'Failed to save notification');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/notifications/deleteNotification/${id}`);
      toast.success('Notification deleted successfully');
      fetchNotifications();
    } catch (err) {
      const error = err as AxiosError;
      console.error('Delete error:', error);
      toast.error(error.response?.data?.message || 'Failed to delete notification');
    }
  };

  const openEditModal = (notification: Notification) => {
    setForm({
      title: notification.title,
      message: notification.message,
      date: new Date(notification.date).toISOString().split('T')[0],
      college: notification.college,
      category: notification.category,
      linkText: notification.linkText || '',
      linkUrl: notification.linkUrl || ''
    });
    setEditId(notification._id);
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setForm({
      title: '',
      message: '',
      date: new Date().toISOString().split('T')[0],
      college: selectedCollege,
      category: 'Notice Board',
      linkText: '',
      linkUrl: ''
    });
    setEditId(null);
  };

  // Close modal when clicking outside or pressing ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
        resetForm();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
        resetForm();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications, selectedCollege]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Notifications Management
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage and share updates for {collegeConfigs[selectedCollege].displayName}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <select
            value={selectedCollege}
            onChange={(e) => setSelectedCollege(e.target.value as CollegeType)}
            className="bg-gray-50 border border-gray-200 text-gray-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-auto"
          >
            {Object.entries(collegeConfigs).map(([key, college]) => (
              <option key={key} value={key}>
                {college.displayName}
              </option>
            ))}
          </select>
          
          <button
            onClick={() => {
              resetForm();
              setIsModalOpen(true);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors duration-200"
          >
            <PlusIcon className="w-4 h-4" />
            <span>Add Notification</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Message
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {isLoading ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center">
                  <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                </td>
              </tr>
            ) : notifications.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                  No notifications found
                </td>
              </tr>
            ) : (
              notifications.map((notification) => (
                <tr key={notification._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    {notification.title}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      notification.category === 'Notice Board' ? 'bg-blue-100 text-blue-800' :
                      notification.category === 'News & Events' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {notification.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500 max-w-xs truncate">
                    {notification.message}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {new Date(notification.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                    <div className="flex gap-2">
                      <button
                        onClick={() => openEditModal(notification)}
                        className="text-blue-600 hover:text-blue-900 p-1 rounded-md hover:bg-blue-50 transition-colors"
                        title="Edit"
                      >
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(notification._id)}
                        className="text-red-600 hover:text-red-900 p-1 rounded-md hover:bg-red-50 transition-colors"
                        title="Delete"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl shadow-xl w-full max-w-md"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {editId ? 'Edit Notification' : 'Create Notification'}
                  </h3>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      resetForm();
                    }}
                    className="text-gray-400 hover:text-gray-500 p-1 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        College *
                      </label>
                      <select
                        value={form.college}
                        onChange={(e) => setForm({...form, college: e.target.value as CollegeType})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {Object.entries(collegeConfigs).map(([key, college]) => (
                          <option key={key} value={key}>
                            {college.displayName}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category *
                      </label>
                      <select
                        value={form.category}
                        onChange={(e) => setForm({...form, category: e.target.value as typeof CATEGORIES[number]})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {CATEGORIES.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={form.title}
                      onChange={(e) => setForm({...form, title: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter notification title"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({...form, message: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter detailed message"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({...form, date: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Link Text
                      </label>
                      <input
                        type="text"
                        value={form.linkText}
                        onChange={(e) => setForm({...form, linkText: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="e.g., Read More"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Link URL
                      </label>
                      <input
                        type="url"
                        value={form.linkUrl}
                        onChange={(e) => setForm({...form, linkUrl: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      resetForm();
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {editId ? 'Update' : 'Create'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationsTable;