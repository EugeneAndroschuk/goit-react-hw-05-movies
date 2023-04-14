import { Suspense } from 'react';
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
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </>
    );
};

export default SharedLayout;