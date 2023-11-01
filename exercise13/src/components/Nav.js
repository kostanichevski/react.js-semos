import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/local-weather">Local weather</Link>
      </li>
      <li>
        <Link to="/search-city">Search city</Link>
      </li>
    </ul>
  );
};
