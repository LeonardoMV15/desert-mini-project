import "./App.css";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import RecipesList from "./pages/RecipesList.jsx";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import RecipeDetail from "./pages/RecipeDetail";
import AddRecipe from "./pages/AddRecipes.jsx"; 
import recipesData from "./assets/recipes.json";

import {  Routes, Route  } from "react-router-dom"

import NotFound from "./pages/NotFound.jsx"
import { useState } from "react";


function App() {
  const [allRecipes, setAllRecipes] = useState(recipesData);
  
  return (
    <>
      <NavBar />

      <div className="page-layout">
        <SideBar />

        <main className="main-content">
      
           <Routes>

          <Route path="/" element={ <Home /> } />
          <Route path="/recipes" element={ <RecipesList allRecipes={allRecipes} /> } />
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/recipes/:recipeId" element={ <RecipeDetail /> } />
          <Route path="/add-recipe" element={ <AddRecipe allRecipes={allRecipes} setAllRecipes={setAllRecipes}/> } />
          

         

          <Route path="*" element={ <NotFound /> }/>

        </Routes>

        </main>
      </div>
      

      <Footer />

      
      
    </>
  );
}

export default App;