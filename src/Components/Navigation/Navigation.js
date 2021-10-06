import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
export default function Navigation() {
  return (
    <nav className={s.header}>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home
        </NavLink>
          <div className={s.auth}>
      <NavLink to="/register" className={s.link} activeClassName={s.activeLink}>
        Register
          </NavLink>
           <NavLink to="/login" className={s.link} activeClassName={s.activeLink}>
        Login
          </NavLink>
          </div>
           <NavLink to="/contacts" className={s.link} activeClassName={s.activeLink}>
       Contacts
      </NavLink>
    </nav>
  );
}