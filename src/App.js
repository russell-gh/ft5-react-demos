import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Interface from "./components/Interface";
import "./App.css";
import { SET_TODOS } from "./redux/types";
import Controls from "./components/Controls";

const App = () => {
  const dispatch = useDispatch();

  const getApiData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    dispatch({ type: SET_TODOS, data });
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <Controls />
      <Interface />
    </>
  );
};

export default App;
