import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
    return (
      <>
        <header className={css.header}>
          <nav>
            <ul className={css['nav-ul']}>
              <li>
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies" style={{ textDecoration: 'none' }}>
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Outlet />
      </>
    );
};

export default SharedLayout;