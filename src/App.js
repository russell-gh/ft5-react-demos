import React, { Component } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import Controls from "./components/Controls";

class App extends Component {
  state = { searchTerm: "" };

  inputRef = React.createRef(); //react way to run dom methods/api

  componentDidMount() {
    this.getWeather();
  }

  getWeather = async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=1.22&lon=2.22&APPID=17a3e02a9cc47ed1eac90bc2f9c0012a`
    );
    this.setState({ weather: data });
  };

  toggleFav = (dt) => {
    const weather = { ...this.state.weather };

    const indexOf = weather.list.findIndex((item) => {
      return item.dt === dt;
    });

    if (indexOf === -1) {
      return;
    }

    weather.list[indexOf].fav = !weather.list[indexOf].fav;

    this.setState({ weather });
  };

  deleteItem = (dt) => {
    const weather = { ...this.state.weather };

    const indexOf = weather.list.findIndex((item) => {
      return item.dt === dt;
    });

    if (indexOf === -1) {
      return;
    }

    weather.list.splice(indexOf, 1);

    this.setState({ weather });
  };

  onInput = (e) => {
    console.log("j");
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    console.log(this.state);
    if (!this.state.weather) {
      return <p>Loading...</p>;
    }

    if (this.state.weather.list.length === 0) {
      return <p>You deleted everything</p>;
    }

    //once I have the data, filter
    const weather = { ...this.state.weather };
    const filtered = weather.list.filter((item) => {
      return (
        item.weather[0].main
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        item.weather[0].description
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase())
      );
    });
    // console.log(weather.list, filtered);

    let final = [...weather.list];
    if (filtered.length) {
      final = filtered;
    }

    return (
      <div>
        <Controls onInput={this.onInput} searchTerm={this.state.searchTerm} />
        <Weather
          toggleFav={this.toggleFav}
          deleteItem={this.deleteItem}
          weather={final}
        />
      </div>
    );
  }
}

export default App;
