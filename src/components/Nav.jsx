
import "./index.css";
import './style.css';

const Nav = () => {
  return (
    <div>
      <nav className="navbar-expand-sm">
        <div classname="container-fluid">
          <div className="row">
          <div className="navbar-brand col-md-2 logo">
            <a href="/" className="nav-link">
          <h3 style={{"text-decoration":"none"}}>
            Abinand <br />
            <span>Krishna </span>
          </h3>
            </a>
          </div>
          <div className="col-md-6">
          <ul className="navbar-nav justify-content-center">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>

            <li className="nav-item">
              <a href="#service" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#project" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
