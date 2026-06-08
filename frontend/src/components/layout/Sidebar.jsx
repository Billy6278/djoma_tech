import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, Settings, Briefcase } from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Briefcase size={28} style={{ color: 'var(--primary)' }} />
        <span>Djoma Tech</span>
      </div>

      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
            end
          >
            <Home size={18} />
            <span>Accueil</span>
          </NavLink>
        </li>

        <li className="sidebar-item">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <Users size={18} />
            <span>Utilisateurs</span>
          </NavLink>
        </li>
      </ul>

      <div className="sidebar-footer">
        <div style={{
          fontSize: '0.78rem',
          color: 'var(--text-muted)',
          textAlign: 'center',
          padding: '0.5rem 0'
        }}>
          Djoma Tech v1.0.0
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
