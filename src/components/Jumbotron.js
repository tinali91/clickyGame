import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <h1 className="display-3 text-white">Clicky game!</h1>
        <p className="lead text-white">Click on an image to get points. Click on an image twice and you'll have to start over! Try to get a high score.</p>
      </div>
    </div>
  )
};

export default Jumbotron;