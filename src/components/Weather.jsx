import WeaterItem from "./WeatherItem";

function Weather({ weather, deleteItem, toggleFav }) {
  const faved = weather.filter((item) => {
    return item.fav === true;
  });

  const _list = [...weather];
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
      {weather.map((item) => {
        return (
          <WeaterItem
            deleteItem={deleteItem}
            toggleFav={toggleFav}
            key={item.dt}
            item={item}
          />
        );
      })}
    </>
  );
}

export default Weather;
