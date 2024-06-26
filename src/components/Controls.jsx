import { useDispatch } from "react-redux";
import { ADD_TODO, SET_TODO_TEXT } from "../redux/types";
import { useState } from "react";

const Controls = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  return (
    <>
      <input
        type="text"
        onInput={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: ADD_TODO, text: input });
        }}
      >
        Add
      </button>
    </>
  );
};

export default Controls;
