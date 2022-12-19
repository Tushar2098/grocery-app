import { NavLink } from 'react-router-dom';
export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='notes' className={({ isActive }) => (isActive ? 'active' : '')}>
            Notes
          </NavLink>
        </li>
        <li>
          <NavLink to='checklist' className={({ isActive }) => (isActive ? 'active' : '')}>
            Checklist
          </NavLink>
        </li>
        <li>
          <NavLink to='reminder' className={({ isActive }) => (isActive ? 'active' : '')}>
            Reminder
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
