import NavBar from "./NavBar/NavBar";
import React, { useState, useEffect } from "react";

import Loading from "./Components/LoadingSpinner/Loading";
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
      </div>
    );
  }
}
export default App;
