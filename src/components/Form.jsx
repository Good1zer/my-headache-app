// src/components/Form.jsx
import React, { useState } from 'react';
import Modal from './Modal';

function Form({ initialData, onSave, isLoading }) {
  const [startTime, setStartTime] = useState(initialData?.startTime || '');
  const [endTime, setEndTime] = useState(initialData?.endTime || '');
  const [painLevel, setPainLevel] = useState(initialData?.painLevel || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ startTime, endTime, painLevel }); // Passing form data to onSave
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block mb-1 font-medium">С</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1 font-medium">По</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      {/* Pain Level Slider */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Уровень боли</label>
        <input
          type="range"
          min="1"
          max="10"
          value={painLevel}
          onChange={(e) => setPainLevel(e.target.value)}
          className="w-full h-2 rounded-lg bg-gray-200"
        />
        <div className="text-right text-sm">{painLevel}</div>
      </div>

      <button
        type="submit"
        className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        disabled={isLoading}
      >
        {isLoading ? 'Сохранение...' : initialData ? 'Сохранить изменения' : 'Сохранить запись'}
      </button>
    </form>
  );
}

export default Form;
