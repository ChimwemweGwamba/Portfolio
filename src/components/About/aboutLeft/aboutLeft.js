import React from "react";
import "./aboutLeft.css";
import Button from "../../button/button";

function AboutLeft() {
  return (
    <div className="aboutLeftContainer">
      <h3><a>From Embedded Systems To Software Development</a></h3>

      <p className="aboutDescription">
        Donec volutpat imperdiet elit, non porttitor turpis convallis tempus.
        Quisque ultricies mi vitae massa facilisis molestie. Pellentesque
        consectetur massa sit amet lorem fermentum tincidunt. Mauris ipsum ante,
        convallis eu magna non, tempus pellentesque quam. Vestibulum lacinia
        tortor nunc, nec pulvinar neque sodales in <br></br><br></br>

        Donec volutpat imperdiet elit, non porttitor turpis convallis tempus.
        Quisque ultricies mi vitae massa facilisis molestie. Pellentesque
        consectetur massa sit amet lorem fermentum tincidunt. Mauris ipsum ante,
        convallis eu magna non, tempus pellentesque quam. Vestibulum lacinia
        tortor nunc, nec pulvinar neque sodales in
      </p>

      <Button heading = "Download Resume"></Button>
    </div>
  );
}

export default AboutLeft;
