import React, { Component } from "react";
import WeaterItem from "./WeatherItem";

class Weather extends Component {
  render() {
    const faved = this.props.weather.list.filter((item) => {
      return item.fav === true;
    });

    const _list = [...this.props.weather.list];
    _list.sort((a, b) => {
      if (a.main.temp > b.main.temp) {
        return 1;
      }
      if (a.main.temp < b.main.temp) {
        return -1;
      }
      return 0;
    });

    return (
      <>
        <h1>Total favs: {faved.length}</h1>
        <p>Hotest: {new Date(_list[0].dt * 1000).toString()}</p>
        <p>Coldest: {new Date(_list[_list.length - 1].dt * 1000).toString()}</p>
        {this.props.weather.list.map((item) => {
          return (
            <WeaterItem
              toggleFav={this.props.toggleFav}
              key={item.dt}
              item={item}
            />
          );
        })}
      </>
    );
  }
}

export default Weather;
