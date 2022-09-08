import React from "react";
import "./bannerLeft.css";
import Button from '../../button/button'

function BannerLeft() {
  return (
    <div className="bannerLeftContainer">
      <h1>
        Hi! I'm<br></br>
        <a>Chimwemwe</a>
      </h1>

      <p>
        Sed interdum metus eget tellus blandit, eget congue sem accumsan. Fusce
        maximus laoreet placerat donec eget orci fringilla laoreet mauris ut,
        ornare felis.
      </p>

      <Button heading ="Hire Me"></Button>
    </div>
  );
}

export default BannerLeft;
