import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddRecipes.css";

function AddRecipe(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [prepTime, setPrepTime] = useState(Number(""));
  const [difficulty, setDifficulty] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const navigate = useNavigate();

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

    const lastRecipe = props.allRecipes[props.allRecipes.length - 1];
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

    props.setAllRecipes([...props.allRecipes, newRecipe]);

    navigate("/recipes");
  };

  return (
  <div className="add-recipe-page">

    <div className="add-recipe-header">
      <h1>Add a New Recipe ♡</h1>
      <p>Share your favorite dessert recipe with us!</p>
    </div>

    <form className="recipe-form" onSubmit={handleSubmit}>

      <h2>Recipe Information</h2>

      <div className="recipe-form-grid">

        <div className="form-group">
          <label>Recipe Name</label>
          <input
            type="text"
            placeholder="Chocolate Cake"
            value={name}
            onChange={handleName}
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="url"
            placeholder="https://..."
            value={image}
            onChange={handleImage}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select value={category} onChange={handleCategory}>
            <option value="">Select a category</option>
            <option value="Cakes">Cakes</option>
            <option value="Cookies">Cookies</option>
            <option value="Pastries">Pastries</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Preparation Time (minutes)</label>
          <input
            type="number"
            placeholder="30"
            value={prepTime}
            onChange={handlePrepTime}
          />
        </div>

        <div className="form-group">
          <label>Difficulty</label>
          <select value={difficulty} onChange={handleDifficulty}>
            <option value="">Select difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

      </div>

      <h2 className="bake-title">Let's Bake!</h2>

      <div className="recipe-form-grid">

        <div className="form-group">
          <label>Ingredients</label>
          <textarea
            placeholder="Write the ingredients..."
            rows="4"
            value={ingredients}
            onChange={handleIngredients}
          />
        </div>

        <div className="form-group">
          <label>Instructions</label>
          <textarea
            placeholder="Write the instructions..."
            rows="4"
            value={instructions}
            onChange={handleInstructions}
          />
        </div>

      </div>

      <div className="form-actions">
        <button className="home-btn" type="submit">
          Add Recipe ♡
        </button>
      </div>

    </form>
  </div>
);
}

export default AddRecipe;
