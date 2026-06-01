import './Layout.css';
import NavBar from '../NavBar/NavBar';
import Sidebar from '../Sidebar/Sidebar';

export default function Layout({ children, currentPath }) {
  return (
    <div className="mds-layout">
      <NavBar />
      <div className="mds-layout__body">
        <Sidebar currentPath={currentPath} />
        <main className="mds-layout__content">
          {children}
        </main>
      </div>
    </div>
  );
}
