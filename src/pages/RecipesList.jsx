// import { useState } from "react"
// import dataRecipes from "../assets/recipes.json"
import RecipesCard from "../components/RecipesCard"
import "../styles/RecipesList.css";

function RecipesList(props){
    //const [recipes, setRecipes] = useState(dataRecipes)

    const handleRemove = (index) =>{
        const stateClone = [...props.allRecipes]
        stateClone.splice(index, 1)
        props.setAllRecipes(stateClone)
    }
  
    
    return (
  <section className="recipes-section">

    <div className="recipes-heading">
      <span>THE SWEET COLLECTION</span>
      <h2>Our Recipes</h2>
      <p>A little sweetness for every occasion.</p>
    </div>

    <div className="recipes-grid">
      {props.allRecipes.map((recipe) => {
        return (
          <RecipesCard
            key={recipe.id}
            handleRemove={handleRemove}
            recipe={recipe}
            
          />
        );
      })}
    </div>

  </section>
);
};
export default RecipesList