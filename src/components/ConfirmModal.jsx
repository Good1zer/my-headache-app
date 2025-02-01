// src/components/ConfirmModal.jsx
import React from 'react';
import { FiX } from 'react-icons/fi';

function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg w-full max-w-sm relative animate-modalIn">
        <button
          className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          onClick={onCancel}
          type="button"
        >
          <FiX size={20} />
        </button>
        <div className="mb-4">{message}</div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-300 text-gray-800 hover:bg-gray-400 transition-colors"
          >
            Нет
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            Да
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
