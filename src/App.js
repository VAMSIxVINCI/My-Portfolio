import React from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;

