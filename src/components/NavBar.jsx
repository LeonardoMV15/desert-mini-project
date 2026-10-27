
import logo from "../assets/logo.png"
import "./NavBar.css"

function NavBar() {
  return (
    <nav className=" navBar">
      <div className="NavBarLogo">
      <img src={logo} alt="" />
      <h1>Sweet Book</h1>
      </div>

      <div className="NavBarLinks">
        <a href="">Home</a>
        <a href="">Recipes</a>
        <a href="">About</a>
      </div>
    </nav>
  );
}

export default NavBar;
