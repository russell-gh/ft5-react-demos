import React, { useEffect, useState } from "react";

const App = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    //like component did mount AND update
    console.log("useEffect ran, no dep array");
  });

  useEffect(() => {
    console.log("useEffect ran, WITH dep array, COMPONENT DID MOUNT");
  }, []); //run once, just like component did mount

  useEffect(() => {
    console.log(
      "useEffect ran, WITH dep array for active, COMPONENT DID UPDATE"
    );
  }, [active]);

  return (
    <>
      <button
        onClick={() => {
          setActive(!active);
        }}
      >
        Toggle
      </button>
    </>
  );
};

export default App;
