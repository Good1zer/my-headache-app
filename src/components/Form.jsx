// src/components/Form.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PainSlider from './PainSlider';
import SideSelector from './SideSelector';
import ToggleButton from './ToggleButton';
import IconSelector from './IconSelector';
import PainCharacterSelector from './PainCharacterSelector';

function Form({ onSave, onClose, initialData }) {
  const [date, setDate] = useState(initialData ? new Date(initialData.date) : new Date());
  const [painLevel, setPainLevel] = useState(initialData ? initialData.painLevel : 5);
  const [side, setSide] = useState(initialData ? initialData.side : 'Лево');
  const [physicalEffort, setPhysicalEffort] = useState(initialData ? initialData.physicalEffort : false);
  const [nausea, setNausea] = useState(initialData ? initialData.nausea : false);
  const [vomiting, setVomiting] = useState(initialData ? initialData.vomiting : false);
  const [sensitivity, setSensitivity] = useState(initialData ? initialData.sensitivity : []);
  const [painCharacter, setPainCharacter] = useState(initialData ? initialData.painCharacter : []);
  const [pulse, setPulse] = useState(initialData ? initialData.pulse : '');
  const [medication, setMedication] = useState(initialData ? initialData.medication : '');
  const [additionalSymptoms, setAdditionalSymptoms] = useState(initialData ? initialData.additionalSymptoms : '');
  const [startTime, setStartTime] = useState(initialData ? initialData.duration.startTime : '00:00');
  const [endTime, setEndTime] = useState(initialData ? initialData.duration.endTime : '00:00');
  const [isLoading, setIsLoading] = useState(false);

  const handleSensitivityToggle = (type) => {
    if (sensitivity.includes(type)) {
      setSensitivity(sensitivity.filter((item) => item !== type));
    } else {
      setSensitivity([...sensitivity, type]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const record = {
      date: date.toISOString(),
      painLevel,
      side,
      physicalEffort,
      nausea,
      vomiting,
      sensitivity,
      painCharacter,
      pulse,
      medication,
      additionalSymptoms,
      duration: { startTime, endTime },
    };
    onSave(record);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Дата */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">Дата</label>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          className="p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>

      {/* Слайдер боли */}
      <PainSlider value={painLevel} onChange={(e) => setPainLevel(Number(e.target.value))} />

      {/* Сторона */}
      <div>
        <label className="block mb-1 font-medium">Сторона</label>
        <SideSelector selected={side} onChange={setSide} />
      </div>

      {/* Усиливается при физической нагрузке */}
      <ToggleButton
        label="Усиливается при физической нагрузке?"
        value={physicalEffort}
        onChange={setPhysicalEffort}
      />

      {/* Тошнота, Рвота */}
      <div className="flex items-center space-x-4">
        <label className="flex items-center space-x-1">
          <input type="checkbox" checked={nausea} onChange={(e) => setNausea(e.target.checked)} />
          <span>Тошнота</span>
        </label>
        <label className="flex items-center space-x-1">
          <input type="checkbox" checked={vomiting} onChange={(e) => setVomiting(e.target.checked)} />
          <span>Рвота</span>
        </label>
      </div>

      {/* Чувствительность к свету/звуку */}
      <div>
        <label className="block mb-1 font-medium">Чувствительность к свету/звуку</label>
        <IconSelector selected={sensitivity} onToggle={handleSensitivityToggle} />
      </div>

      {/* Характер боли */}
      <div>
        <label className="block mb-1 font-medium">Характер боли</label>
        <PainCharacterSelector selected={painCharacter} onChange={setPainCharacter} />
      </div>

      {/* Пульс */}
      <div>
        <label className="block mb-1 font-medium">Пульс</label>
        <input
          type="number"
          value={pulse}
          onChange={(e) => setPulse(e.target.value)}
          placeholder="Введите пульс (3 цифры)"
          className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          maxLength="3"
        />
      </div>

      {/* Препараты */}
      <div>
        <label className="block mb-1 font-medium">Препараты, дозировка, помогло или нет</label>
        <textarea
          value={medication}
          onChange={(e) => setMedication(e.target.value)}
          placeholder="Введите информацию о препаратах"
          className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>

      {/* Сопутствующие симптомы */}
      <div>
        <label className="block mb-1 font-medium">Сопутствующие симптомы</label>
        <textarea
          value={additionalSymptoms}
          onChange={(e) => setAdditionalSymptoms(e.target.value)}
          placeholder="Дополнительная информация"
          className="w-full p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>

      {/* Продолжительность */}
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
