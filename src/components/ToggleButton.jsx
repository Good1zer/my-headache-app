// src/components/ToggleButton.jsx
import React from 'react';

function ToggleButton({ label, value, onChange }) {
  return (
    <div className="flex items-center space-x-2">
      <span>{label}</span>
      <button
        type="button"
        onClick={() => onChange(!value)}
        className={`w-12 h-6 rounded-full relative transition-colors ${value ? 'bg-green-500' : 'bg-gray-300'}`}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 transition-transform ${value ? 'translate-x-6' : 'translate-x-0'}`}
        />
      </button>
    </div>
  );
}

export default ToggleButton;
