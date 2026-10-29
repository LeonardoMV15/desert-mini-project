import "./App.css";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import RecipesList from "./pages/RecipesList.jsx";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import RecipeDetail from "./pages/RecipeDetail";




import { Link, Routes, Route  } from "react-router-dom"

import NotFound from "./pages/NotFound.jsx"


function App() {
  return (
    <>
      <NavBar />

      <div className="page-layout">
        <SideBar />

        <main className="main-content">
      
           <Routes>

          <Route path="/" element={ <Home /> } />
          <Route path="/recipes" element={ <RecipesList /> } />
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/recipes/:recipeId" element={ <RecipeDetail /> } />

         

          <Route path="*" element={ <NotFound /> }/>

        </Routes>

        </main>
      </div>
      

      <Footer />

      
      
    </>
  );
}

export default App;