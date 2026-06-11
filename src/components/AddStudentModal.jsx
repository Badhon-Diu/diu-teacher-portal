import { useState } from 'react';

const AddStudentModal = ({ isOpen, onClose, onAdd }) => {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentId.trim() && name.trim()) {
      onAdd(studentId.trim(), name.trim());
      setStudentId('');
      setName('');
      onClose();
      
    }
  };

  const handleAddAnother = () => {
    if (studentId.trim() && name.trim()) {
      onAdd(studentId.trim(), name.trim());
      setStudentId('');
      setName('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl p-6 text-white">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/70 hover:text-white text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
          Add New Student
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white/80">Student ID</label>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-white/50"
              placeholder="e.g., 232-15-999"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1 text-white/80">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-white/50"
              placeholder="e.g., John Doe"
              required
            />
          </div>
          <div className="flex gap-3">
            <button
            
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
            >
              Add & Close
            </button>
            <button
              type="button"
              onClick={handleAddAnother}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition"
            >
              Add Another
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentModal;