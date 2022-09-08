import React from "react";
import './skill.css'


function Skill(props) {
  return (
    <div className="skillContainer">
      <div className="skillHeading">
        <p>{props.skill}</p>
        <p>{props.skillLevel}</p>
      </div>

      <div className="barChart">
        <hr style={props.style}></hr>
      </div>
    </div>
  );
}

export default Skill;
