import NavBar from "./NavBar/NavBar";
import React, { useState } from "react";

import Loading from "./Components/LoadingSpinner/Loading";
import Particle from "./Components/Particles/Particle.jsx";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import HR from "./Components/BreakLine/HR";
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
      <div className="App ">
        <NavBar />

        <Particle />

        <About />
        <HR />
        <Skills />
        <HR />
        <Contact />
      </div>
    );
  }
}
export default App;
