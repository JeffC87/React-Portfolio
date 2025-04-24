import { NavLink } from "react-router-dom";

const Header = () => {
  return (
      <header>
        <p>Jeff Conrad</p>
        <nav>
          <NavLink to="/">About Me</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/resume">Resume</NavLink>
        </nav>
      </header>
  );
};

export default Header;
