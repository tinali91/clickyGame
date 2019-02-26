import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import images from "./characters.json";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import CharacterPics from "./components/CharacterPics";
import Jumbotron from "./components/Jumbotron";
import './App.css';

class App extends Component {
  state = {
    images,
    score: 0,
    highScore: 0,
  }

  displayImages = () => {
    return (
      <Wrapper>
        {this.state.images.map(image => (
          <CharacterPics
            alt={image.name}
            picture={image.picture}
            handleClick={this.handleClick}
            id={image.id}
            key={image.id}
            clicked={image.clicked}
          />
        )).sort(() => Math.random() - 0.5 )}
      </Wrapper>
    )
  }

  handleClick = (id) => {
    console.log(`This card's id is ${id}`)

    let imagesClone = this.state.images;

    if (imagesClone[id].clicked === false) {
      console.log(`This hasn't been clicked yet`);
      imagesClone[id].clicked = true;
      let newScore = this.state.score + 1;
      this.setState({ score: newScore, highScore: newScore, images: imagesClone })
    } else if (imagesClone[id].clicked === true) {
      console.log(`This has been clicked`)
      for (var i = 0; i < imagesClone.length; i++) {
        imagesClone[i].clicked = false;
      }
      alert(`Sorry! You've already clicked that image.`)
      this.setState({ score: 0, images: imagesClone })
    } else if (this.state.score === 12 ) {
      alert(`Congrats! You've reached the max score!`)
    }
    this.displayImages()
  }

  render() {
    return (
      <div>
        <NavBar score={this.state.score} highScore={this.state.highScore} />
        <Jumbotron />
        {this.displayImages()}
        <Footer />
      </div>
    );
  }
}

export default App;
