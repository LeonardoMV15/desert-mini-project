import  "./SideBar.css"

function SideBar() {


    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">THE MENU</h2>
            <nav className="sidebar-menu">
                <a href="/">⌂ Home</a>
                <a href="/recipes">♡ All Recipes</a>
                <a href="/add-recipe">+ Add Recipe</a>
            </nav>
            <div className="sidebar-bottom">
                <a href="/about">ABOUT US ↗</a>
            </div>
        </aside>

    )


}


export default SideBar