// src/components/SideSelector.jsx
import React from 'react';

function SideSelector({ selected, onChange }) {
  return (
    <div className="flex space-x-4">
      {['Лево', 'Право', 'Обе'].map((side) => (
        <button
          key={side}
          onClick={() => onChange(side)}
          className={`px-4 py-2 rounded border transition-all ${
            selected === side ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
          }`}
        >
          {side}
        </button>
      ))}
    </div>
  );
}

export default SideSelector;
