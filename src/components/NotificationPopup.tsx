import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../data/Api";

const NotificationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notificationData, setNotificationData] = useState([]);
  const popupRef = useRef(null);

  // Function to fetch notification data from an API
  const fetchNotificationData = async () => {
    try {
      const response = await api.get("/popupNotification/getPopupNotification");
      if (response.data && response.data.length > 0) {
        setNotificationData(response.data);
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    } catch (error) {
      console.error("Error fetching notification data:", error);
      setIsVisible(false);
    }
  };

  // Fetch notification data when the component mounts
  useEffect(() => {
    fetchNotificationData();
  }, []);

  // Close the popup when clicking outside of it or pressing the Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // If there's no image URL, don't render the popup
  if (!isVisible || !notificationData[0]?.imageUrl) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && notificationData[0]?.imageUrl && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center z-50 h-auto"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
          <div
            ref={popupRef}
            className="bg-white rounded-lg shadow-lg p-3 relative max-w-5xl w-auto max-h-[90vh] flex justify-center items-center"
            // className="bg-white rounded-lg shadow-lg p-3 relative max-w-5xl w-full mx-2"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <img
              src={notificationData[0].imageUrl}
              alt="Notification"
              className="max-w-full max-h-[90vh] h-auto w-auto rounded"
              // className="w-full h-auto rounded"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationPopup;
