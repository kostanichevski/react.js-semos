import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Movies } from "./components/Movies";
import { Book } from "./components/Book";
import { NewBook } from "./components/NewBook";
import { NewMovie } from "./components/NewMovie";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/" replace>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Movies">Movies</Link>
          </li>
          <li>
            <Link to="/movies/new">NewMovies</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        {/* <Route path="/books/:i" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        <Route path="/movies/new" element={<NewMovie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
