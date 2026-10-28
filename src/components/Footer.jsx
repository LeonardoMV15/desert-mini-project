import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-links">
        <a href="/">HOME</a>
        <a href="/recipes">RECIPES</a>
        <a href="/about">ABOUT</a>
      </div>

      <h1 className="footer-title">SWEET BOOK</h1>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SWEET BOOK</p>
        <p>BAKED WITH LOVE ♡</p>
      </div>

    </footer>
  );
}

export default Footer;