import { Link } from "react-router-dom"


function RecipeCard(props) {
  return (
    <div className="recipe-card">



      <Link to={`/recipes/${props.recipe.id}`}>
      
      <div className="recipe-image">
        <img
          src={props.recipe.image}
          alt={props.recipe.name}
        />
      </div>
      </Link>

      <div className="recipe-info">

        <div className="recipe-header">
          <span className="recipe-category">
            {props.recipe.category}
          </span>

          {props.recipe.isFavorite && (
            <span className="recipe-favorite">♥</span>
          )}
        </div>

        <h3>{props.recipe.name}</h3>

        <div className="recipe-meta">
          <span>⏱ {props.recipe.prepTime} min</span>

          <span className={`difficulty ${props.recipe.difficulty.toLowerCase()}`}>
            {props.recipe.difficulty}
          </span>
        </div>

        <button
          className="recipe-remove"
          onClick={() => props.handleRemove(props.index)}
        >
          Remove Recipe
        </button>

      </div>
    </div>
  );
}

export default RecipeCard;