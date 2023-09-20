import { Sport } from "./components/Sport";
import { Sport2 } from "./components/Sport2";
import { Sport3 } from "./components/Sport3";
import { Player } from "./components/Player";
import { StudentClass } from "./components/StudentClass";
function App() {
  let student = {
    name: "Kosta",
    lastName: "Nichevski",
    index: 15025,
  };
  // let sportsAndPeople = [
  //   { name: "Kosta", sport: "Basketball" },
  //   { name: "Laura", sport: "Tennis" },
  //   { name: "Vedran", sport: "Table tennis" },
  //   { name: "Luciano", sport: "Football" },
  // ];
  // da napravime komponenta vo koja ke prikazuvame komentari, neka sekoj komentar ima id, author, text. Neka listata so komentari ja imame vo app.js i pratime preku props vo kreiranata komponenta i tamu da gi prikazeme informaciite
  // neka bidat vo nekoja tabela
  // pokraj ova imame nekoe kopce LIKE sto vo konzola ke pecati +1

  // let player = {
  //   firstName: "Kosta",
  //   score: 5,
  //   print: function () {
  //     //when we use `` we can write regular strings and if we want to use javascript we use ${}
  //     console.log(`name: ${player.firstName} - score: ${player.score}`);
  //   },
  // };
  return (
    <div className="App">
      <h1>Hello from React props</h1>
      {/* <Sport name="Kosta" sport="Basketball" />
      <Sport name="Laura" sport="Tennis" />
      <Sport name="Vedran" sport="Table Tennis" /> */}
      {/* {sportsAndPeople.map((object) => {
        return <Sport name={object.name} sport={object.sport} />;
      })} */}
      {/* <Sport3 sports={sportsAndPeople} /> */}
      {/* <Player player={Player} /> */}
      <StudentClass student={student} />
    </div>
  );
}

export default App;

//npx create-react-app
// npm install prop-types --save

// ZA DOMA

// da go konvertirame istiot primer od casot (primerot za komentarite) vo klasna komponenta
