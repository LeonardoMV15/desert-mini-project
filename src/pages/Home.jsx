import { Link } from "react-router-dom";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="home-page">

      <div className="home-content">

        <div className="home-text">
          <h1>Welcome to Sweet Book ♡</h1>

          <h2>A little sweetness in every recipe</h2>

          <p>
            Discover our collection of delicious homemade desserts!
            From classic cakes to irresistible cookies, find the
            perfect recipe for every occasion.
          </p>

          <p>
            Whether you love baking or just want to try something
            new, there's always something sweet waiting for you.
          </p>

          <Link to="/recipes" className="home-btn">
            Explore Recipes →
          </Link>
        </div>

        <div className="home-image">
          <img
            src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad"
            alt="Strawberry cheesecake"
          />
        </div>

      </div>

      <div className="home-features">

        <div className="home-feature">
          <h3>♡ Homemade</h3>
          <p>Recipes made with love</p>
        </div>

        <div className="home-feature">
          <h3>✦ Easy to follow</h3>
          <p>Step-by-step instructions</p>
        </div>

        <div className="home-feature">
          <h3>♡ For everyone</h3>
          <p>From beginners to baking lovers</p>
        </div>

      </div>

    </div>
  );
}

export default HomePage;