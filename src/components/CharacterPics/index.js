import React from "react";
import "./style.css";

function CharacterPics(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.picture} clicked={props.clicked} onClick={()=> props.handleClick(props.id)} alt={props.name} />
    </div>
  );
}

export default CharacterPics;
