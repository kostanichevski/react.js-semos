import { Route, Routes, Link } from "react-router-dom";
export const Movies = () => {
  return (
    <div>
      <li>
        <h2>Interstellar Sci-Fi</h2>
        <h2>Oppenheimer Historical</h2>
        <Link to="/Movies">Movies</Link>
      </li>
    </div>
  );
};
