import React, { useEffect, useState } from "react";

const JokeComponent = () => {
  const [joke, setJoke] = useState({});
  useEffect(() => {
    obtainJoke();
  }, [joke]);

  const obtainJoke = () => {};
  return <div>JokeComponent</div>;
};

export default JokeComponent;
