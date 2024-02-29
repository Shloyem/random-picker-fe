import { Link, Outlet } from 'react-router-dom';

function Layout(): JSX.Element {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/result/">To fix</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
