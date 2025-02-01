// src/components/IconSelector.jsx
import React from 'react';
import { FiSun, FiVolume2 } from 'react-icons/fi';

function IconSelector({ selected, onToggle }) {
  return (
    <div className="flex space-x-4 p-2 bg-gray-800 rounded">
      <button
        type="button"
        onClick={() => onToggle('light')}
        className={`p-2 rounded transition-colors ${selected.includes('light') ? 'bg-yellow-400' : 'bg-gray-700'}`}
      >
        <FiSun size={24} className="text-white" />
      </button>
      <button
        type="button"
        onClick={() => onToggle('sound')}
        className={`p-2 rounded transition-colors ${selected.includes('sound') ? 'bg-blue-400' : 'bg-gray-700'}`}
      >
        <FiVolume2 size={24} className="text-white" />
      </button>
    </div>
  );
}

export default IconSelector;
