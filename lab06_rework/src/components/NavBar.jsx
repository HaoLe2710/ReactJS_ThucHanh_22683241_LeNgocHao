import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/projects', label: 'Projects' },
    { path: '/teams', label: 'Teams' },
    { path: '/analytics', label: 'Analytics' },
    { path: '/messages', label: 'Messages' },
    { path: '/integrations', label: 'Integrations' }
  ];

  return (
    <div className="flex flex-col gap-5 p-3 m-3">
      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            `rounded-xl p-3 transition-all ${
              isActive ? 'bg-blue-600 text-white font-bold shadow-md' : 'bg-blue-300 text-black'
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}