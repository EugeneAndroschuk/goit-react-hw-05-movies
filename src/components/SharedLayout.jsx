import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
    return (
      <>
        <header className={css.header}>
          <nav>
            <ul className={css['nav-ul']}>
              <li>
                <NavLink to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies">
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