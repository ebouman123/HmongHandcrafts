import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <Link to="/" className="layout-title">Mandora’s Craft Studio</Link>
        <nav className="layout-nav">
          <Link to="/bio">About</Link>
          <Link to="/calendar">Classes</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>
      <main className="layout-main">
        {children}
      </main>
      <footer className="layout-footer">
        © {new Date().getFullYear()} Mandora’s Craft Studio. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
