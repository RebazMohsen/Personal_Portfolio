import NavBar from "./NavBar/NavBar";
import React, { useState } from "react";

import Loading from "./Components/LoadingSpinner/Loading";
import Particle from "./Components/Particles/Particle";
function App() {
  const [loading, setLoading] = useState(false);

  // make a function that runs for 5 seconds?
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
      <div className="App">
        <NavBar />

        <Particle />
        <h1 className="text-4xl">Hello</h1>
      </div>
    );
  }
}
export default App;
