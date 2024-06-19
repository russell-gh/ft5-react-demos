import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Characters from "./components/Characters";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getSimpsons();
  }

  getSimpsons = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    //fixes api data
    data.forEach((element, index) => {
      element.id = index + 1;
    });
    this.setState({ simpsons: data });
  };

  render() {
    const { simpsons, totalLiked } = this.state;

    if (!simpsons) {
      return <p>Loading...</p>;
    }

    return (
      <>
        <h1>Total liked: {totalLiked}</h1>
        <Characters characters={simpsons} onLiked={this.onLiked} />
      </>
    );
  }
}

export default App;
