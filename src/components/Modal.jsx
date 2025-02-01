// src/components/Modal.jsx
import React from 'react';
import { FiX } from 'react-icons/fi';

function Modal({ children, onClose, onSave, isLoading }) {
  // Handle the background click to close the modal
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close modal if clicking on the overlay
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
      onClick={handleOverlayClick} // Apply click handler to overlay
    >
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg w-full max-w-md relative animate-modalIn max-h-full overflow-auto">
        <button
          className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          onClick={onClose}
        >
          <FiX size={20} />
        </button>
        {children}
        {/* Only the Save button will close the modal and save */}
        <button
          type="button"
          onClick={onSave}
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors mt-4"
          disabled={isLoading}
        >
          {isLoading ? 'Сохранение...' : 'Сохранить запись'}
        </button>
      </div>
    </div>
  );
}

export default Modal;
