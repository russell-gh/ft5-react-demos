import React, { Component } from "react";
import Temp from "./Temp";
import Wind from "./Wind";

class WeaterItem extends Component {
  render() {
    const { temp, temp_max, temp_min } = this.props.item.main;
    const { speed, gust } = this.props.item.wind;

    return (
      <div
        className={`weatherItem ${this.props.item.fav ? "fav" : ""}`}
        onClick={() => this.props.toggleFav(this.props.item.dt)}
      >
        <Temp temp={temp} tempMax={temp_max} tempMin={temp_min} />
        <Wind speed={speed} gust={gust} />
        <button
          onClick={() => {
            this.props.deleteItem(this.props.item.dt);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default WeaterItem;
