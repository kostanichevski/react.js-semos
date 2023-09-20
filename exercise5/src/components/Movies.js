import { useState, useEffect } from "react";

export const Movie = () => {
  //   const [counter, setCounter] = useState(0);
  const [movie1Votes, setMovie1Votes] = useState(0);
  const [movie2Votes, setMovie2Votes] = useState(0);

  useEffect(() => {
    console.log("Voting");
    if (movie1Votes === 5) {
      console.log("Oppenheimer wins");
    }

    if (movie2Votes === 5) {
      console.log("Interstellar wins");
    }
  }, [movie1Votes, movie2Votes]);

  return (
    <div>
      <h1>Welcome to our voting app</h1>
      {/* <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h3>Counter: {counter}</h3> */}
      <div>
        <img
          src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
          style={{ width: 380, height: 550 }}
        />
        <br />
        <button onClick={setMovie1Votes}>Vote</button>
        <h2>Oppenheimer votes {movie1Votes} </h2>
      </div>
      <div>
        <img
          src="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
          style={{ width: 380, height: 550 }}
        />
        <br />
        <button onClick={setMovie2Votes + 1}>Vote</button>
        <h2>Interstellar votes {movie2Votes} </h2>
      </div>
    </div>
  );
};
