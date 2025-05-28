import { useState } from 'react';
import { navLinks } from '../data/navLinks';
import '../Css/Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Show hamburger only when sidebar is closed */}
      {!isOpen && (
        <button className="hamburger" onClick={toggleSidebar}>
          ☰
        </button>
      )}

      {/* Overlay (click to close) */}
      {isOpen && <div className="overlay" onClick={closeSidebar}></div>}

      {/* Sidebar panel */}
      <div className={`sidebar ${isOpen ? 'show' : ''}`}>
        <h2 className="sidebar-title" onClick={closeSidebar}>
          Healthcare.
        </h2>
        <h5 style={{ fontWeight: 600, color: 'gray', fontSize: '20px' }}>General</h5>
        <ul className="sidebar-list">
          {navLinks.map((link, i) => (
            <li key={i} className="sidebar-item">
              {link}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
