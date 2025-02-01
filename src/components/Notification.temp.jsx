// src/components/Notification.jsx
import React, { useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const NOTIFICATION_DURATION = 3000;

function Notification({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, NOTIFICATION_DURATION);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded shadow-lg animate-fadeInOut z-50">
      {message}
      <button className="ml-4" onClick={onClose}>
        <FiX />
      </button>
    </div>
  );
}

export default Notification;
