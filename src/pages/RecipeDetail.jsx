
import { Link, useParams } from "react-router-dom";
import recipesData from "../assets/recipes.json";
import "../styles/RecipeDetail.css";

function RecipeDetail() {
  const { recipeId } = useParams();

  const foundRecipe = recipesData.find(
    (recipe) => recipe.id === Number(recipeId)
  );

  if (!foundRecipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <article className="recipe-detail">
      <h1>{foundRecipe.name}</h1>

      <img
        className="recipe-detail__image"
        src={foundRecipe.image}
        alt={foundRecipe.name}
      />

      <div className="recipe-detail__metadata">
        <p>Category: {foundRecipe.category}</p>
        <p>Difficulty: {foundRecipe.difficulty}</p>
        <p>Preparation time: {foundRecipe.prepTime} minutes</p>
      </div>

      <section className="recipe-detail__section">
        <h2>Ingredients</h2>

        <ul>
          {foundRecipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </section>

      <section className="recipe-detail__section">
        <h2>Instructions</h2>

        <ol>
          {foundRecipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      <Link className="recipe-detail__back" to="/recipes">
        Back to Recipes
      </Link>
    </article>
  );
}

export default RecipeDetail;