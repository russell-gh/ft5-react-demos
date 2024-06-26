import { TOGGLE_COMPLETED, DELETE_TODO } from "../redux/types";
import { useDispatch } from "react-redux";

const Todo = ({ id, title }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>{title}</p>
      <button
        onClick={() => {
          dispatch({ type: TOGGLE_COMPLETED, id: id });
        }}
      >
        Toggle
      </button>
      <button
        onClick={() => {
          dispatch({ type: DELETE_TODO, id: id });
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Todo;
