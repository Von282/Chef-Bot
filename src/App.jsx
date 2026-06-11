import { useState } from "react";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Pricing from "./pages/Pricing.jsx";
import Recipe from "./pages/Recipe.jsx";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Dashboard /> */}
      {/* <Pricing /> */}
      <Recipe />
      <Footer />
    </>
  );
}

export default App;
