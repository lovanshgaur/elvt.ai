import "./styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="nav-header">
          <div className="logo">elvt.ai</div>
          <div className="nav-icons">
            <div className="nav-icon nav-icons_portfolio">P</div>
            <div className="nav-icon nav-icons_github">G</div>
          </div>
        </div>
        <div className="navbar">
          <div className="navbar-links">
            <Link to="/" className="navbar-link">
              Dashboard
            </Link>
            <Link to="/analyzer" className="navbar-link">
              Resume Analyzer
            </Link>
            <Link to="/matcher" className="navbar-link">
              Job Matcher
            </Link>
            <Link to="/prep" className="navbar-link">
              Resume Prep
            </Link>
            <Link to="/ats" className="navbar-link">
              ATS Checker
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
