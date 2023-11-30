import { NavLink } from "react-router-dom";
import "./Style.scss";

function Nav() {
  return (
    <nav className="navigation">
      <NavLink to="/" className="nav_Header_home">
        Accueil
      </NavLink>

      <NavLink to="/about" className="nav_Header_about">
        A propos
      </NavLink>
    </nav>
  );
}

export default Nav;
