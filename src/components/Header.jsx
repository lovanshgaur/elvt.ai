import './styles/header.css'
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
            <a href="" className="navbar-link">
              Dashboard
            </a>
            <a href="" className="navbar-link">
              Resume Analyzer
            </a>
            <a href="" className="navbar-link">
              Job Matcher
            </a>
            <a href="" className="navbar-link">
              Resume Prep
            </a>
            <a href="" className="navbar-link">
              ATS Checker
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
