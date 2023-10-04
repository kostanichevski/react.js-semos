import { useParams } from "react-router-dom";

export const NewMovie = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>New Movie:{id}</h1>
      <div class="form">
        <form>
          <input placeholder="Movie name"></input>
          <br />
          <br />
          <input placeholder="Movie rating"></input>
          <br />
          <br />
          <input placeholder="Genre"></input>
          <br />
          <br />
          <button className="button">Submit</button>
        </form>
      </div>
    </div>
  );
};
