// src/components/ui/Modal.tsx
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-6 w-full max-w-xl shadow-xl  h-[80vh] overflow-auto"
      >
        {title && (
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              ✕
            </button>
          </div>
        )}
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;