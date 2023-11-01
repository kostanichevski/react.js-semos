import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/cake">Cake</Link>
      </li>
      <li>
        <Link to="/comments">Comments</Link>
      </li>
    </ul>
  );
};
