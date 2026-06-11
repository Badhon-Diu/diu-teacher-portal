import { NavLink } from 'react-router';

const Sidebar = ({ onAddStudentClick }) => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { name: 'Marks Entry', path: '/', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white shrink-0 flex flex-col h-full hidden md:flex">
      <div className="h-20 flex items-center px-4 border-b border-slate-800 bg-slate-900">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">DIU</div>
          <div>
            <h1 className="text-lg font-bold leading-tight tracking-wide text-blue-400">Daffodil</h1>
            <p className="text-xs text-green-500 font-semibold tracking-wider">International University</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors group ${
                    isActive ? 'hover:bg-blue-700/20 text-blue-100' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                </svg>
                <span className="font-medium text-sm">{item.name}</span>
              </NavLink>
            </li>
          ))}
          {/* Add Student Button */}
          <li>
            <button
              onClick={onAddStudentClick}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors text-slate-300 hover:bg-green-700 hover:text-white group mt-4 border-t border-slate-800 pt-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              <span className="font-medium text-sm">Add Student</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;