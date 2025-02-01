// src/components/PainSlider.jsx
import React from 'react';

function PainSlider({ value, onChange }) {
  const sliderStyle = {
    background: `linear-gradient(to right, #22c55e, #ef4444)`,
  };

  return (
    <div className="flex flex-col">
      <label className="mb-1 font-medium">Балл боли: {value}</label>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={onChange}
        style={sliderStyle}
        className="w-full h-2 rounded-lg appearance-none bg-gray-200 outline-none"
      />
    </div>
  );
}

export default PainSlider;
