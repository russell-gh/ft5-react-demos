import { useParams, useNavigate } from "react-router-dom";
import simpsons from "../simpsons.json";
import Character from "./Character";
import { useEffect, useState } from "react";

const OneItem = () => {
  const { name } = useParams();
  const redirect = useNavigate();
  const [char, setChar] = useState();

  useEffect(() => {
    const char = simpsons.find((char) => {
      return char.character.toLowerCase().includes(name.toLowerCase());
    });

    if (!char) {
      return redirect("/");
    }

    setChar(char);
  }, []);

  if (!char) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Character {...char} name={char.character} />
    </>
  );
};

export default OneItem;
