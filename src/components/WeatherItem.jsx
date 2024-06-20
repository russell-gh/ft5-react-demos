import Temp from "./Temp";
import Wind from "./Wind";

const WeaterItem = ({ item, toggleFav, deleteItem }) => {
  const { temp, temp_max, temp_min } = item.main;
  const { speed, gust } = item.wind;

  return (
    <div
      className={`weatherItem ${item.fav ? "fav" : ""}`}
      onClick={() => toggleFav(item.dt)}
    >
      <div>{item.weather[0].description}</div>
      <Temp temp={temp} tempMax={temp_max} tempMin={temp_min} />
      <Wind speed={speed} gust={gust} />
      <button
        onClick={() => {
          deleteItem(item.dt);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default WeaterItem;
