import NavBar from "./NavBar/NavBar";
import React, { useState } from "react";
import Burger from "./assets/icons/menuV2.json";
import "@lottiefiles/lottie-player";
function App() {
  const [loading, setLoading] = useState(true);

  // make a function that runs for 5 seconds?
  setInterval(function () {
    // method to be executed;
    setLoading(false);
  }, 5000);

  if (loading) {
    return (
      <>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_usmfx6bp.json"
          background="transparent"
          speed="1"
          style={({ width: 800 + "px" }, { height: 800 + "px" })}
          loop
          autoplay
        ></lottie-player>
      </>
    );
  } else {
    return (
      <div className="App">
        <NavBar />

        {/*  <lottie-player
        src="https://assets3.lottiefiles.com/packages/lf20_b23ll34c.json"
        background="transparent"
        speed="1"
        // style={`width: 300px; height: 300px;`}
        style={({ width: 450 + "px" }, { height: 450 + "px" })}
        autoplay
        className="bg-red-500"
      ></lottie-player>
      <lottie-player
        src="https://assets3.lottiefiles.com/private_files/lf30_obidsi0t.json"
        background="transparent"
        speed="1"
        style={({ width: 450 + "px" }, { height: 450 + "px" })}
        loop
        autoplay
      ></lottie-player> */}

        {/* <Burger /> */}
      </div>
    );
  }
}
export default App;
