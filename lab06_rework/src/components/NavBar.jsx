import { NavLink } from 'react-router-dom';
import dashboard from '../assets/dashboard.png'
import teams from '../assets/group.png'
import integrations from '../assets/integrations.png'
import messages from '../assets/messages.png'
import projects from '../assets/project.png'
import analytics from '../assets/analytics.png'

export default function NavBar() {
  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: dashboard },
    { path: '/projects', label: 'Projects', icon: projects },
    { path: '/teams', label: 'Teams', icon: teams },
    { path: '/analytics', label: 'Analytics', icon: analytics },
    { path: '/messages', label: 'Messages', icon: messages },
    { path: '/integrations', label: 'Integrations', icon: integrations }
  ];

  return (
    <div className="flex flex-col gap-5 p-3 m-3">
      <div className="flex items-center justify-center p-4 m-4 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="bg-white p-2 rounded-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h3M4 6h3M17 6h3M6 10.5v3M6 17h3M10.5 17h3M17 17h3M12 12v.01"
              />
            </svg>
          </div>
          <h1 className="text-white text-3xl font-extrabold tracking-wider drop-shadow">
            ADMIN MANAGER
          </h1>
        </div>
      </div>

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
            <div className='flex gap-5 align-middle '>
                <img className='size-[30px]' src={item.icon} alt={item.label} />
                <span>{item.label}</span>
            </div>
        </NavLink>
      ))}
    </div>
  );
}