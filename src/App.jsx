import { Routes, Route } from 'react-router';
import { useState } from 'react';
import Layout from './components/Layout';
import MarksSheet from './components/MarksSheet';
import AddStudentModal from './components/AddStudentModal';
import { StudentsProvider, useStudents } from './context/StudentsContext';

// Inner component to use context and manage modal
const AppContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addStudent } = useStudents();

  const handleAddStudent = (studentId, name) => {
    addStudent(studentId, name);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout onAddStudentClick={() => setIsModalOpen(true)} />}>
          <Route index element={<MarksSheet />} />
        </Route>
      </Routes>
      <AddStudentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddStudent}
      />
    </>
  );
};

function App() {
  return (
    <StudentsProvider>
      <AppContent />
    </StudentsProvider>
  );
}

export default App;