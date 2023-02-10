import React from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // 1. create a reference for the lottie player
  }
  componentDidMount() {
    // 3. listen for player load. see lottie player repo for other events
    this.myRef.current.addEventListener("load", function (e) {
      // 4. configure the interactivity library
      create({
        mode: "scroll",
        player: "#Avatar",
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 90],
          },
        ],
      });
    });
  }
  render() {
    return (
      <div className="mx-auto w-[100%] h-[300px] mobile:h-[300px]  mobile:w-[300px]   lg:h-[800px]">
        <lottie-player
          ref={this.myRef} // 2. set the reference for the player
          id="Avatar"
          mode="normal"
          className="   "
          src="https://assets9.lottiefiles.com/packages/lf20_8pL7DHZXvo.json"
          /*  style={({ width: 300 + "px" }, { height: 300 + "px" })} */
        ></lottie-player>
      </div>
    );
  }
}

export default Avatar;
