import { useDispatch } from "react-redux";
import { ADD_TODO, SET_TODO_TEXT } from "../redux/types";

const Controls = () => {
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        onInput={(e) => {
          dispatch({ type: SET_TODO_TEXT, text: e.target.value });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: ADD_TODO });
        }}
      >
        Add
      </button>
    </>
  );
};

export default Controls;
