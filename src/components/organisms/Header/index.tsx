import { NavLink, Link } from "react-router-dom";
import "./index.scss";
import { THeaderProps } from "./dto";

const NAVLINK = {
  login: "/login",
  register: "/register",
};

export const Header = ({}: THeaderProps) => {
  return (
    <header className="o-header">
      <h1>Tarot Booking</h1>
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
