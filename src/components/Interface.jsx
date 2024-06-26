import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { TOGGLE_COMPLETED, DELETE_TODO } from "../redux/types";

const Interface = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (!todos) {
    return <p>Loading...</p>;
  }

  return todos.map((todo) => {
    return (
      <div className={todo.completed ? "completed" : "notCompleted"}>
        <p>{todo.title}</p>
        <button
          onClick={() => {
            dispatch({ type: TOGGLE_COMPLETED, id: todo.id });
          }}
        >
          Toggle
        </button>
        <button
          onClick={() => {
            dispatch({ type: DELETE_TODO, id: todo.id });
          }}
        >
          Delete
        </button>
      </div>
    );
  });
};

export default Interface;
