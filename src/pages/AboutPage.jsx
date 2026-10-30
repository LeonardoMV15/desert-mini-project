import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">

      <h1>About Sweet Book ♡</h1>

      <div className="about-content">

        <div className="about-text">

          <h2>Made with love, baked with passion</h2>

          <p>
            Welcome to Sweet Book, your little corner of sweetness!
            Here you can discover a collection of delicious dessert
            recipes, from classic homemade cakes to irresistible treats.
          </p>

          <p>
            Sweet Book was created as part of our Web Development
            Bootcamp at Ironhack.
          </p>

          <p>
            Our goal is to build a simple and beautiful place
            to explore and discover desserts.
          </p>

        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e"
            alt="Homemade cookies"
          />
        </div>

      </div>

      <div className="about-team">

        <h2>Meet the Team ♡</h2>

        <p>We are two students learning web development at Ironhack!</p>

        <div className="team-cards">

          <div className="team-card">
            <h3>Ainhoa</h3>
            <p>Full Stack Web Development Student</p>
          </div>

          <div className="team-card">
            <h3>Leo</h3>
            <p>Full Stack Web Development Student</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AboutPage;