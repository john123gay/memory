import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
import boondocks from "./boondocks.json";


class App extends Component {
  state = {
    boondocks,
    clickedCard: [],
    score: 0
  };

  imageClick  = event => {
    const currentCard = event.target.alt;
    const CardAlreadyClicked = this.state.clickedCard.indexOf(currentCard) > -1;

    if(CardAlreadyClicked === true) {
      this.setState({
        boondocks: this.state.boondocks.sort(function(a,b) {
          return 0.7 - Math.random();
        }),
        clickedCard : [],
        score: 0
      });
      alert("Loss.... thats a Loss");
    } else {
      this.setState(
        {
          boondocks: this.state.boondocks.sort(function(a,b) {
            return 0.7 - Math.random();
          }),
          //put the state of the card into the clickedCard array
          clickedCard: this.state.clickedCard.concat(
            currentCard
          ),
          score: this.state.score + 1
        },
        () => {
          if(this.state.score === 12) {
            alert("You did the impossible!! Congrats");
            this.setState({
              boondocks: this.state.boondocks.sort(function(a, b) {
                return 0.7 - Map.random();
              }),
              clickedCard: [],
              score: 0
            });
          }
        }
      );
    }
  };
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score} />
          <Title />
          <div >
            {this.state.boondocks.map(boondocks => (
              <FriendCard 
                imageClick = {this.imageClick}
                id={boondocks.id}
                key={boondocks.id}
                image={boondocks.image}
              />
            ))}
          </div>
      </div>
    );
  }
}
export default App;
