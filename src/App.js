import NavBar from "./NavBar/NavBar";
import React, { useState } from "react";

import Loading from "./Components/LoadingSpinner/Loading";
import Hero from "./Components/HeroSection/Hero.js";
import About from "./Components/About/About";
import Skillss from "./Components/Skills/Skillss";
import Contact from "./Components/Contact/Contact";

function App() {
  const [loading, setLoading] = useState(false);

  //A function that runs for 5 seconds
  setInterval(function () {
    // method to be executed;
    setLoading(false);
  }, 5000);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return (
      <div className="App    ">
        <NavBar />

        <Hero />

        <About />

        <Skillss />

        <Contact />
      </div>
    );
  }
}
export default App;
