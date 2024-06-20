import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Characters from "./components/Characters";
import CharactersControls from "./components/CharactersControls";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getSimpsons();
  }

  getSimpsons = async () => {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
      );
      //fixes api data
      data.forEach((element, index) => {
        element.id = index + 1;
      });
      this.setState({ simpsons: data });
    } catch (e) {
      this.setState({ error: "Api Down" });
    }
  };

  onLikeToggle = (id) => {
    const simpsons = [...this.state.simpsons];
    const indexOf = simpsons.findIndex((item) => {
      return item.id === id;
    });
    if (indexOf === -1) {
      console.log("This should almost never occur");
      return;
    }
    simpsons[indexOf].liked = !simpsons[indexOf].liked;

    this.setState({ simpsons });
  };

  onDelete = (id) => {
    const simpsons = [...this.state.simpsons];
    const indexOf = simpsons.findIndex((item) => {
      return item.id === id;
    });
    if (indexOf === -1) {
      console.log("This should almost never occur");
      return;
    }
    simpsons.splice(indexOf, 1);
    this.setState({ simpsons });
  };

  getTotalLiked = () => {
    const liked = this.state.simpsons.filter((item) => {
      return item.liked;
    });

    return <h1>Total liked: {liked.length}</h1>;
  };

  onFormEvent = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  getSimpsonsToDisplay = () => {
    //filter based on search
    let filtered = [...this.state.simpsons];
    if (this.state.text) {
      filtered = filtered.filter((item) => {
        return item.character
          .toLowerCase()
          .includes(this.state.text.toLowerCase());
      });
    }

    //if no resuls, return all results
    filtered = filtered.length ? filtered : this.state.simpsons;

    //sort the data
    filtered.sort((a, b) => {
      if (a.character > b.character) {
        return 1;
      }
      if (a.character < b.character) {
        return -1;
      }
      return 0;
    });

    if (this.state.select === "DESC") {
      filtered.reverse();
    }

    return filtered; //either everything or if search term then filtered
  };

  render() {
    console.log(this.state);
    const { simpsons, error } = this.state;

    if (error) {
      return <h1>API down, try later!</h1>;
    }

    if (!simpsons) {
      return <p>Loading...</p>;
    }

    return (
      <>
        <CharactersControls callback={this.onFormEvent} />
        {this.getTotalLiked()}
        <Characters
          characters={this.getSimpsonsToDisplay()}
          onLikeToggle={this.onLikeToggle}
          onDelete={this.onDelete}
        />
      </>
    );
  }
}

export default App;
