import { NavLink, Link } from "react-router-dom";
import "./styles.scss";

const NAVLINK = {
  login: "/login",
  register: "/register",
};

type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  return (
    <header className="o-header">
      <div className="container">
        <Link to="/" className="o-header_logo">
          <img src="images/logo.svg" alt="" />
        </Link>
        <ul className="o-header_nav">
          <NavLink to={NAVLINK.register}>Register</NavLink>
          <NavLink to={NAVLINK.login}>Log In</NavLink>
        </ul>
      </div>
    </header>
  );
};
