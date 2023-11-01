import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import { Cake } from "./components/Cake";
import { Comments } from "./components/Comments";

function App() {
  return (
    <div className="App">
      <h1>Redux part 2</h1>
      <Navigation />
      <Routes>
        <Route path="/cake" element={<Cake />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;

//cd exercise12
// npm i react-router-dom
// npm i react-redux
// npm i redux
