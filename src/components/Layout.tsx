import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="app-layout">
      {/* Header component to be created */}
      <header>
        <nav>Header Navigation</nav>
      </header>

      {/* Main content area */}
      <main>
        <Outlet />
      </main>

      {/* Footer component to be created */}
      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  );
};
