import { useState } from "react";

import RecipeCard from "../components/RecipesCard";

function AddRecipe(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [prepTime, setPrepTime] = useState(Number(""));
  const [difficulty, setDifficulty] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  //para que se guarden los cambios dentro del input
  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handlePrepTime = (e) => setPrepTime(e.target.value);
  const handleDifficulty = (e) => setDifficulty(e.target.value);
  const handleIngredients = (e) => setIngredients(e.target.value);
  const handleInstructions = (e) => setInstructions(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("bien")
    const lastRecipe = props.recipes[props.recipes.length - 1];
    const newId = lastRecipe ? Number(lastRecipe.id) + 1 : 1;

    const newRecipe = {
      id: newId, 
      name: name,
      image: image,
      category: category,
      prepTime: Number(prepTime),
      difficulty: difficulty,
      ingredients: ingredients,
      instructions: instructions,
    };
    //console.log(newRecipe)
    props.setRecipes([...props.recipes, newRecipe]);
  };

  return (
    <div className="add-recipe-page">
      <h1>Add a New Recipe ♡</h1>
      <p>Share your favorite dessert recipe with us!</p>

      <form className="recipe-form" onSubmit={handleSubmit}>
        <h2>Recipe Information</h2>

        <label>Recipe Name</label>
        <input
          type="text"
          placeholder="Chocolate Cake"
          value={name}
          onChange={handleName}
        />

        <label>Image URL</label>
        <input
          type="url"
          placeholder="https://..."
          value={image}
          onChange={handleImage}
        />

        <label>Category</label>
        <select value={category} onChange={handleCategory}>
          <option value="">Select a category</option>
          <option value="Cakes">Cakes</option>
          <option value="Cookies">Cookies</option>
          <option value="Pastries">Pastries</option>
          <option value="Other">Other</option>
        </select>

        <label>Preparation Time (minutes)</label>
        <input
          type="number"
          placeholder="30"
          value={prepTime}
          onChange={handlePrepTime}
        />

        <label>Difficulty</label>
        <select value={difficulty} onChange={handleDifficulty}>
          <option value="">Select difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <h2>Let's Bake!</h2>

        <label>Ingredients</label>
        <textarea
          placeholder="Write the ingredients..."
          rows="5"
          value={ingredients}
          onChange={handleIngredients}
        />

        <label>Instructions</label>
        <textarea
          placeholder="Write the instructions..."
          rows="5"
          value={instructions}
          onChange={handleInstructions}
        />

        <button type="submit">Add Recipe ♡</button>
      </form>
      {props.recipe &&
        props.recipe.map((recipe) => {
          return <RecipeCard key={recipe.name} recipe={recipe} />;
        })}
    </div>
  );
}

export default AddRecipe;
