// src/components/Dashboard.jsx
import React from 'react';
import RecordCard from './RecordCard';
import { FiPlus } from 'react-icons/fi';

function Dashboard({ records, onAddClick, onEdit, onDelete }) {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Дэшбоард</h2>
        <button
          onClick={onAddClick}
          className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all"
        >
          <FiPlus size={24} />
        </button>
      </div>
      {records.length === 0 ? (
        <div className="text-gray-500">Записей пока нет. Добавь новую!</div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {records.map((rec, index) => (
            <RecordCard
              key={rec.date + index}
              record={rec}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
