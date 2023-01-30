import React from "react";
import "@lottiefiles/lottie-player";
export default function Loading() {
  return (
    <div>
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      <lottie-player
        src="https://assets3.lottiefiles.com/packages/lf20_usmfx6bp.json"
        background="transparent"
        speed="1"
        style={({ width: 800 + "px" }, { height: 800 + "px" })}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
}
