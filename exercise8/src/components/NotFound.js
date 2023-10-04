import { useParams } from "react-router-dom";

export const NotFound = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>404</h1>
      <h2>The page you are looking for is not found{id}</h2>
    </div>
  );
};
