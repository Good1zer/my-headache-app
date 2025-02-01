// src/components/RecordCard.jsx
import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

function RecordCard({ record, onEdit, onDelete }) {
  return (
    <div className="p-4 border rounded shadow-sm hover:shadow-md transition-all bg-white dark:bg-gray-800 cursor-pointer">
      <div className="flex justify-between items-center">
        <div className="font-semibold">
          {new Date(record.date).toLocaleDateString()}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={(e) => { e.stopPropagation(); onEdit(record); }}
            className="p-1 rounded hover:bg-blue-100 dark:hover:bg-blue-700 transition-colors"
          >
            <FiEdit size={18} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onDelete(record); }}
            className="p-1 rounded hover:bg-red-100 dark:hover:bg-red-700 transition-colors"
          >
            <FiTrash2 size={18} />
          </button>
        </div>
      </div>
      <div className="mt-2 text-sm">
        <span className="font-medium">Боль:</span> {record.painLevel}
      </div>
      <div className="mt-1 text-sm">
        <span className="font-medium">Характер:</span> {record.painCharacter.join(', ')}
      </div>
    </div>
  );
}

export default RecordCard;
