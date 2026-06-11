import { createContext, useContext, useState } from 'react';
import { initialStudents } from '../data/studentsData';

const StudentsContext = createContext();

export const useStudents = () => useContext(StudentsContext);

export const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState(initialStudents);

  // Add a new student
  const addStudent = (studentId, name) => {
    const newId = Math.max(...students.map(s => s.id), 0) + 1;
    const newStudent = {
      id: newId,
      studentId: studentId,
      name: name,
      attm: 0,
      q1: '',
      q2: '',
      q3: '',
      presn: '',
      assign: '',
      mt: '',
      mtIm: '',
      final: '',
      abs: false,
      wh: false
    };
    setStudents(prev => [...prev, newStudent]);
  };

  // Update an existing student
  const updateStudent = (id, updatedFields) => {
    setStudents(prev =>
      prev.map(student =>
        student.id === id ? { ...student, ...updatedFields } : student
      )
    );
  };

  // Delete a student
  const deleteStudent = (id) => {
    setStudents(prev => prev.filter(student => student.id !== id));
  };

  return (
    <StudentsContext.Provider value={{ students, addStudent, updateStudent, deleteStudent }}>
      {children}
    </StudentsContext.Provider>
  );
};