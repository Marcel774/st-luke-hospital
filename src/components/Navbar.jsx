import { NavLink } from "react-router-dom";

function Navbar() {
  const getNavClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="brand">
          <div className="brand-icon">✚</div>

          <div>
            <h1>St. Luke Hospital</h1>
            <span>Musanze District</span>
          </div>
        </NavLink>

        <nav className="navigation">
          <NavLink to="/" className={getNavClass}>
            Dashboard
          </NavLink>

          <NavLink to="/patients" className={getNavClass}>
            Patients
          </NavLink>

          <NavLink
            to="/appointments"
            className={getNavClass}
          >
            Appointments
          </NavLink>

          <NavLink to="/billing" className={getNavClass}>
            Billing
          </NavLink>

          <NavLink to="/pharmacy" className={getNavClass}>
            Pharmacy
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;