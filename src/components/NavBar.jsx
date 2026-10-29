
import logo from "../assets/logo.png"
import "./NavBar.css"

function NavBar() {
  return (
    <nav className=" navBar">
      <div className="NavBarLogo">
      <img src={logo} alt="" />
      <h1>SWEET BOOK</h1>
      </div>

      <div className="NavBarLinks">
      </div>
    </nav>
  );
}

export default NavBar;
