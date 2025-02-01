// src/App.jsx
import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Modal from './components/Modal';
import Form from './components/Form';
import Notification from './components/Notification';
import './App.css';

function App() {
  const [records, setRecords] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState(null);
  const [editingRecord, setEditingRecord] = useState(null);

  // Загружаем записи из localStorage при старте
  useEffect(() => {
    const stored = localStorage.getItem('headacheRecords');
    if (stored) setRecords(JSON.parse(stored));
  }, []);

  const saveRecords = (newRecords) => {
    setRecords(newRecords);
    localStorage.setItem('headacheRecords', JSON.stringify(newRecords));
  };

  const handleAddRecord = (record) => {
    const newRecords = [record, ...records];
    saveRecords(newRecords);
    setNotification('Запись успешно сохранена!');
    setShowModal(false);
    setEditingRecord(null);
  };

  const handleEditRecord = (updatedRecord) => {
    const newRecords = records.map((rec) =>
      rec.date === editingRecord.date ? updatedRecord : rec
    );
    saveRecords(newRecords);
    setNotification('Запись успешно обновлена!');
    setShowModal(false);
    setEditingRecord(null);
  };

  const handleDeleteRecord = (recordToDelete) => {
    if (window.confirm('Удалить запись?')) {
      const newRecords = records.filter(
        (rec) => rec.date !== recordToDelete.date
      );
      saveRecords(newRecords);
      setNotification('Запись удалена!');
    }
  };

  const openAddModal = () => {
    setEditingRecord(null);
    setShowModal(true);
  };

  const openEditModal = (record) => {
    setEditingRecord(record);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Dashboard
        records={records}
        onAddClick={openAddModal}
        onEdit={openEditModal}
        onDelete={handleDeleteRecord}
      />

      {showModal && (
        <Modal onClose={() => { setShowModal(false); setEditingRecord(null); }}>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {editingRecord ? 'Редактирование записи' : 'Новая запись'}
          </h2>
          <Form
            onSave={editingRecord ? handleEditRecord : handleAddRecord}
            onClose={() => { setShowModal(false); setEditingRecord(null); }}
            initialData={editingRecord}
          />
        </Modal>
      )}

      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}
    </div>
  );
}

export default App;
