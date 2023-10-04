import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import { Posts } from "./components/Posts";

function App() {
  return (
    <div className="App">
      <h1>I am learning API's</h1>
      <Navigation />
      <Routes>
        <Route path="/comments" element={<h1>Comments</h1>} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
