import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NavigationTabs from "./components/NavigationTabs/NavigationTabs";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <section id="navigation-section">
        <NavigationTabs />
      </section>

      <Footer />
    </div>
  );
};

export default App;
