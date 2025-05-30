import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import api from "../data/Api";
import { format } from 'date-fns';

interface Notification {
  _id: string;
  title: string;
  message: string;
  date: string;
  category: string;
  linkText?: string;
  linkUrl?: string;
}

const NotificationCard = ({ items }: { items: Notification[] }) => {
  const [itemHeight, setItemHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  const tripledItems = items.length > 0 ? [...items, ...items, ...items] : [];

  // Measure item height on mount and resize
  useEffect(() => {
    const updateItemHeight = () => {
      if (itemRef.current) {
        setItemHeight(itemRef.current.clientHeight);
      }
    };

    updateItemHeight();
    window.addEventListener("resize", updateItemHeight);
    return () => window.removeEventListener("resize", updateItemHeight);
  }, []);

  // Animate scroll on mount and when items change
  useEffect(() => {
    if (items.length === 0 || itemHeight === 0) return;

    let cancelled = false;

    const animateScroll = async () => {
      while (!cancelled) {
        await controls.start({
          y: [0, -itemHeight * items.length],
          transition: {
            duration: items.length * 10,
            ease: "linear",
          },
        });
        if (!cancelled) controls.set({ y: 0 });
      }
    };

    animateScroll();
    return () => {
      cancelled = true;
      controls.stop();
    };
  }, [itemHeight, controls, items]);

  if (items.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <div className="p-4 bg-mpgin-darkBlue text-white font-bold text-lg">
          News & Events
        </div>
        <div className="h-48 flex items-center justify-center bg-gray-50">
          <p className="text-gray-500">No news available at the moment</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-mpgin-darkBlue text-white font-bold text-lg">
        News & Events
      </div>
      <div className="relative h-[60vh] overflow-hidden">
        <motion.div
          ref={containerRef}
          className="absolute inset-x-0 flex flex-col"
          animate={controls}
        >
          {tripledItems.map((notification, index) => (
            <div
              key={`${notification._id}-${index}`}
              ref={index === 0 ? itemRef : null}
              className="flex-shrink-0 border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer px-5 py-4"
            >
              <div className="flex-1">
                <p className="font-bold text-lg mb-1 line-clamp-2">
                  {notification.title}
                </p>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {notification.message}
                </p>
                <p className="text-xs text-mpgin-blue mb-2">
                  {format(new Date(notification.date), 'MMM dd, yyyy')}
                </p>
                {notification.linkText && notification.linkUrl && (
                  <a
                    href={notification.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1 bg-mpgin-darkBlue text-white text-sm font-medium rounded hover:bg-mpgin-blue transition-colors"
                  >
                    {notification.linkText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const NotificationComponent = () => {
  const location = useLocation();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getCollegeFromRoute = () => {
    const path = location.pathname.toLowerCase();
    if (path.includes('polytechnic')) return 'polytechnic';
    return 'polytechnic'; // Default fallback
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        setError(null);
        const college = getCollegeFromRoute();
        const response = await api.get(`/notifications/college/${college}`);

        if (response.data?.success) {
          const newsAndEvents = response.data.data?.filter(
            (n: Notification) => n.category === 'News & Events'
          ) || [];
          setNotifications(newsAndEvents);
        } else {
          throw new Error(response.data?.message || 'Failed to fetch news');
        }
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to load news. Please try again later.');
        toast.error('Failed to load news');
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="bg-gray-50 p-4 min-h-64 flex items-center justify-center rounded-lg">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-mpgin-blue mb-2"></div>
          <p className="text-gray-600">Loading news...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-50 p-4 min-h-64 flex items-center justify-center rounded-lg">
        <div className="text-center max-w-md">
          <div className="text-red-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="mt-2 font-medium">{error}</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-mpgin-darkBlue text-white rounded-lg hover:bg-mpgin-blue transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return <NotificationCard items={notifications} />;
};

export default NotificationComponent;
