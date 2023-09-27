import { Route, Routes, Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <h1>Welcome to my page</h1>
      <h2>I am learning react router</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

// kreirajte komponenta home koja sto vnatre kje ima nekoj tekst Welcome to my page, potoa vo nekoj h2 I am learning react router. Potoa da imame uste edna komponenta Movies i vnatre da prikazeme nekoja lista od filmovi, filmovite neka imaat ime i zanr
// Da kreirame ruti za home i za movies i navigacija do niv, za movies neka bide /movies a za home /
