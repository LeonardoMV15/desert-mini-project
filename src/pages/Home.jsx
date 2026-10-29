import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to Sweet Book</h1>

      <h2>A little sweetness in every recipe</h2>

      <p>
        Discover our collection of delicious homemade desserts.
        From classic cakes to irresistible cookies,
        find the perfect recipe for every occasion.
      </p>

      <Link to="/recipes">
        Explore Recipes
      </Link>
    </div>
  );
}

export default HomePage;