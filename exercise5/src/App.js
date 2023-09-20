import { useState, useEffect } from "react";
import { Movie } from "./components/Movies";
import { IncrementClass } from "./components/IncrementClass";
import { Users } from "./components/Users";

function App() {
  // const [username, setUsername] = useState("myUsername");
  // const [password, setPassword] = useState("myPassword");
  // let onChange = (event) => {
  //   setUsername(event.target.value);
  // };

  // we use it mostly for calling third party api or directly changing the UI
  //it is always called on the first render of the page
  // when we change the state of the useEffect is called
  // whichever state we put in the [] brackets, will call the useEffect when that state is changed
  // we must never change state inside the useEffect

  // useEffect(() => {
  //   console.log("Username: " + username);
  //   console.log("Password: " + password);
  // }, []); // [] - dependency array
  // vo [] dependency array gi stavame nasite stejtovi, vo nasiov primer ova se username i password

  return (
    <div className="App">
      {/* <h1> Welcome to class 5</h1> */}
      {/* <h1>{username}</h1> */}
      {/* <input
        placeholder="Enter your username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      /> */}
      {/* <input
        placeholder="enter your password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      /> */}
      {/* <Movie /> */}
      {/* <IncrementClass /> */}
      <Users />
    </div>
  );
}

export default App;
