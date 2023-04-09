import { Outlet, Link } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
    return (
      <>
        <header className={css.header}>
          <nav>
            <ul className={css['nav-ul']}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Outlet />
      </>
    );
};

export default SharedLayout;