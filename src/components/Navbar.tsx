import { NavLink } from "react-router-dom";
import { navItems } from "../data/siteData";
import "../styles/Navbar.css";

interface NavbarProps {
  isOpen: boolean;
  onNavigate: () => void;
}

export default function Navbar({ isOpen, onNavigate }: NavbarProps) {
  return (
    <nav
      className={isOpen ? "navbar navbar-open" : "navbar"}
      aria-label="Main navigation"
    >
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === "/"}
              onClick={onNavigate}
              className={({ isActive }) =>
                isActive ? "navbar-link navbar-link-active" : "navbar-link"
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && <span className="nav-car" aria-hidden="true" />}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}