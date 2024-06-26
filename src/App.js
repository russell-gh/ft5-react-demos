import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=n50`
    );
    console.log(data);
    //dispatch({ type: SET_TODOS, data });
  };

  useEffect(() => {
    getApiData();
  }, []);

  return <></>;
};

export default App;
