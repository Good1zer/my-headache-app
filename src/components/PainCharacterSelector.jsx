// src/components/PainCharacterSelector.jsx
import React from 'react';

function PainCharacterSelector({ selected, onChange }) {
  const options = ['Пульсирующая', 'Давящая', 'Распирающая', 'Острая', 'Ноющая'];
  const toggleOption = (option) => {
    if (selected.includes(option)) {
      onChange(selected.filter((o) => o !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => toggleOption(option)}
          className={`px-3 py-1 rounded-full border transition-colors ${
            selected.includes(option) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default PainCharacterSelector;
