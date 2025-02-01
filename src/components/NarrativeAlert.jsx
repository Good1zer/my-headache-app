// src/components/NarrativeAlert.jsx
import React, { useEffect } from 'react';

function NarrativeAlert({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="mx-auto my-4 max-w-md p-4 bg-green-100 text-green-800 rounded border border-green-200 text-center">
      {message}
    </div>
  );
}

export default NarrativeAlert;
