import "./App.css";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />

      <div className="page-layout">
        <SideBar />

        <main className="main-content">
          <h1>WELCOME TO SWEET BOOK</h1>

          <p>
            Your favorite place to discover and share
            delicious homemade desserts.
          </p>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;