import { useState } from "react"
// import dataRecipes from "../assets/recipes.json"
import RecipesCard from "../components/RecipesCard"
import "../styles/RecipesList.css";
import SearchBar from "../components/SearchBar";

function RecipesList(props){
    //const [recipes, setRecipes] = useState(dataRecipes)
  const [ searchValue, setSearchValue ] = useState("")
const [filteredRecipes, setFilteredRecipes] = useState(props.allRecipes);

    
    const handleRemove = (index) =>{
        const stateClone = [...props.allRecipes]
        stateClone.splice(index, 1)
        props.setAllRecipes(stateClone)
    }
  
    
    return (
  <section className="recipes-section">

    <div className="recipes-heading">

      <SearchBar allRecipes={props.allRecipes} setFilteredRecipes={setFilteredRecipes} searchValue={searchValue} setSearchValue={setSearchValue}/>


      <span>THE SWEET COLLECTION</span>
      <h2>Our Recipes</h2>
      <p>A little sweetness for every occasion.</p>
    </div>

    <div className="recipes-grid">
      {filteredRecipes.map((recipe, index) => {
        return (
          <RecipesCard
            key={recipe.id}
            handleRemove={handleRemove}
            recipe={recipe}
            index={index}
          />
        );
      })}
   
    </div>

  </section>
);
};
export default RecipesList