
function AboutPage() {
  return (
    <div className="about-page">
      <h1>About Sweet Book</h1>

      <h2>Made with love, baked with passion ♡</h2>

      <p>
        Welcome to Sweet Book, your little corner of sweetness!
        Here you can discover a collection of delicious dessert
        recipes, from classic homemade cakes to irresistible treats.
      </p>

      <p>
        Sweet Book was created as part of our Web Development
        Bootcamp at Ironhack. Our goal is to build a simple
        and beautiful place to explore and discover desserts.
      </p>

      <h2>Meet the Team</h2>

      <div className="team-container">
        <div className="team-member">
          <h3>Ainhoa</h3>
          <p>Full Stack Web Development Student</p>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          {" | "}
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <div className="team-member">
          <h3>Leo</h3>
          <p>Full Stack Web Development Student</p>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          {" | "}
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <p>Made with ♡ at Ironhack.</p>
    </div>
  );
}

export default AboutPage;