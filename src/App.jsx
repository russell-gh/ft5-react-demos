import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import Controls from "./components/Controls";

const App = () => {
  const [weather, setWeather] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocussed, setIsFocussed] = useState(false);
  const searchTermRef = useRef();

  const onInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const getApiData = async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=1.22&lon=2.22&APPID=17a3e02a9cc47ed1eac90bc2f9c0012a`
    );
    setWeather(data);
  };

  useEffect(() => {
    getApiData();
  }, []); //run only once

  useEffect(() => {
    console.log(searchTermRef);
    if (!isFocussed && searchTermRef && searchTermRef.current) {
      searchTermRef.current.focus();
      setIsFocussed(true);
    }
  }, [weather]);

  const toggleFav = (dt) => {
    const _weather = { ...weather };
    const indexOf = _weather.list.findIndex((item) => {
      return item.dt === dt;
    });
    if (indexOf === -1) {
      return;
    }
    _weather.list[indexOf].fav = !_weather.list[indexOf].fav;
    setWeather(_weather);
  };

  const deleteItem = (dt) => {
    const _weather = { ...weather };
    const indexOf = _weather.list.findIndex((item) => {
      return item.dt === dt;
    });
    if (indexOf === -1) {
      return;
    }
    _weather.list.splice(indexOf, 1);
    setWeather(_weather);
  };

  if (!weather) {
    return <p>Loading...</p>;
  }

  if (weather.list.length === 0) {
    return <p>You deleted everything</p>;
  }

  //once I have the data, filter
  const _weather = { ...weather };
  const filtered = _weather.list.filter((item) => {
    return (
      item.weather[0].main.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.weather[0].description
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  });
  // console.log(weather.list, filtered);

  let final = [..._weather.list];
  if (filtered.length) {
    final = filtered;
  }

  console.log(weather);

  return (
    <div>
      <Controls
        onInput={onInput}
        searchTerm={searchTerm}
        searchTermRef={searchTermRef}
      />
      <Weather toggleFav={toggleFav} deleteItem={deleteItem} weather={final} />
    </div>
  );
};

export default App;
