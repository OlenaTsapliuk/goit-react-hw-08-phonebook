import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
export default function Navigation() {
  return (
    <nav className={s.header}>
      <div className={s.auth}>
        <NavLink
          to="/register"
          className={s.link}
          activeClassName={s.activeLink}
        >
          Register
        </NavLink>
        <NavLink to="/login" className={s.link} activeClassName={s.activeLink}>
          Login
        </NavLink>
      </div>
      {/* <NavLink to="/contacts" className={s.link} activeClassName={s.activeLink}>
        Contacts
      </NavLink> */}
    </nav>
  );
}
