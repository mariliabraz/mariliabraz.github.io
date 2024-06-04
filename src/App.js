import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NavigationTabs from "./components/NavigationTabs/NavigationTabs";
import "./styles/global.scss";

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
