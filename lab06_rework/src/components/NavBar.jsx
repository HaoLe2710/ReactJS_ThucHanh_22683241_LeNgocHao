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
      <div><p className='text-center text-3xl font-bold p-3 m-3 bg-green-200 rounded-2xl'>ADMIN MANAGER</p></div>
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