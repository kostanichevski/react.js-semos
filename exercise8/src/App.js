import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Movies } from "./components/Movies";
import { Book } from "./components/Book";
import { NewBook } from "./components/NewBook";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Movies">Movies</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/books/:i" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} />
      </Routes>
    </div>
  );
}

export default App;
