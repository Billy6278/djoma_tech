import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import { Sun, Moon, LogOut } from 'lucide-react';

export const Navbar = ({ title = 'Djoma Tech Portal' }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isLightTheme, setIsLightTheme] = useState(
    localStorage.getItem('djoma_theme') === 'light'
  );

  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.add('light-theme');
      localStorage.setItem('djoma_theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('djoma_theme', 'dark');
    }
  }, [isLightTheme]);

  const toggleTheme = () => {
    setIsLightTheme((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const getUserInitials = () => {
    if (!user) return 'DT';
    const first = user.firstName ? user.firstName[0].toUpperCase() : '';
    const last = user.lastName ? user.lastName[0].toUpperCase() : '';
    return `${first}${last}` || 'U';
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {title}
      </div>
      
      <div className="navbar-actions">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          title={isLightTheme ? 'Activer le mode sombre' : 'Activer le mode clair'}
        >
          {isLightTheme ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {user && (
          <div className="user-profile-badge">
            <div className="user-profile-avatar">
              {getUserInitials()}
            </div>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>
              {user.firstName} {user.lastName}
            </span>
            <span style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              backgroundColor: 'var(--bg-app)',
              padding: '2px 8px',
              borderRadius: '20px',
              border: '1px solid var(--border)'
            }}>
              {user.role}
            </span>
          </div>
        )}

        <button
          className="btn-icon btn-icon-danger"
          onClick={handleLogout}
          title="Se déconnecter"
          style={{
            background: 'none',
            border: '1px solid var(--border)',
            padding: '6px',
            borderRadius: 'var(--radius-sm)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LogOut size={18} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
