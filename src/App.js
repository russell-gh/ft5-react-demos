import React, { Component } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getWeather();

    setInterval(() => {
      this.getWeather();
    }, 60000);
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

    weather.list[indexOf].fav = !weather.list[indexOf].fav;

    this.setState({ weather });
  };

  render() {
    if (!this.state.weather) {
      return <p>Loading...</p>;
    }
    // console.log(this.state.weather.list);
    return <Weather toggleFav={this.toggleFav} weather={this.state.weather} />;
  }
}

export default App;
