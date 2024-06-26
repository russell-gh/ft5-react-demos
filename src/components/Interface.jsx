import { useSelector } from "react-redux";
import Todo from "./Todo";

const Interface = () => {
  const todos = useSelector((state) => state.todos);

  if (!todos) {
    return <p>Loading...</p>;
  }

  return todos.map((todo) => {
    return (
      <div className={todo.completed ? "completed" : "notCompleted"}>
        <Todo id={todo.id} title={todo.title} />
      </div>
    );
  });
};

export default Interface;
