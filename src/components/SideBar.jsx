import  "./SideBar.css"
import { Link } from "react-router-dom"

function SideBar() {


    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">THE MENU</h2>
            <nav className="sidebar-menu">
                <Link to="/">⌂ Home</Link>
                <Link to="/recipes">♡ All Recipes</Link>
                <Link to="/add-recipe">+ Add Recipe</Link>
            </nav>
            <div className="sidebar-bottom">
                <a href="/about">ABOUT US ↗</a>
            </div>
        </aside>

    )


}


export default SideBar