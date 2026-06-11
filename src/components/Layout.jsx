import { Outlet } from 'react-router';
import Sidebar from './Sidebar';

const Layout = ({ onAddStudentClick }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar onAddStudentClick={onAddStudentClick} />
      <main className="flex-1 flex flex-col h-full overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;