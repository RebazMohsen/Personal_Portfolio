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
        player: "#firstLottie",
        actions: [
          {
            visibility: [0, 1],
            type: "seek",
            frames: [0, 80],
          },
        ],
      });
    });
  }
  render() {
    return (
      <div className="App">
        <lottie-player
          ref={this.myRef} // 2. set the reference for the player
          id="firstLottie"
          mode="normal"
          className=" mx-auto w-[100%] mobile:h-[300px]  mobile:w-[300px]  h-[400px] lg:h-[800px] "
          src="https://assets9.lottiefiles.com/packages/lf20_8pL7DHZXvo.json"
          /*   style={({ width: 800 + "px" }, { height: 800 + "px" })} */
        ></lottie-player>
      </div>
    );
  }
}

export default Avatar;
