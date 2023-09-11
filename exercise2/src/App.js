import "./css/example.css";
import { AppClass } from "./AppClass";
import { Hello } from "./components/Hello";
import { HelloInDeutsch } from "./components/HelloInDeutsch";
import { HelloInMacedonian } from "./components/HelloInMacedonian";
import { MyHobbies } from "./components/MyHobbies";
import { MyFavoriteHobby } from "./components/MyFavoriteHobby";
import { MyFavHobbyPic } from "./components/MyFavHobbyPic";
// creating application - npx create-react-app [name_of_the_app]
// for starting, navigate to newly created folder with command cd name_off_the_app
// then execute npm start

// every component in react must start with a capital letter

// how to start application which is not generatedby me
// navigate to the app folder, execute command npm install
// and then execute npm start

// we have two types of components: functional and class components

//this is a functional component
function App() {
  let number = 10;
  const element = <h1>Hello from javascript react</h1>;

  function toUpperCaseName(user) {
    return student.name.toUpperCase();
  }
  const student = {
    name: "Kosta",
    lastName: "Nichevski",
    image: "https://thispersondoesnotexist.com/",
  };

  function print() {
    console.log("I was clicked");
  }
  // jsx e sintaksna  ekstenzija na javascript, no toa ne e nitu javascript nitu html, no ja ima mokjta i funkcionalnosta na dvete
  // when we want to use javascript in jsx we nuse {} brackets

  // Zadaca
  // da kreirame funkcionalna komponenta kade vo nekoi html komponenti ke gi stavime nasite 3 hobia
  // a potoa da kreirame druga komponenta vo koja ke go stavime naseto omileno hobi

  // Da kreirame i treta komponenta kade ke imame nekoj tekst koj ke bide vo stil eve slika od moeto omileno hobby
  // da ima slika od hobito
  // da stavime css vnatre da toj tekst e oboen vo nekoja razlicna boja
  // i normalno slikata da ni bide vo razmer i toj css da bide importiran od nekoj nadvoresen css file
  // koga ke napravime hover so mouse vrz slikata da ispecatime vo konzola nekoj tekst(hello there!!!)

  return (
    <div className="App">
      {/* <h1 className="react-hello">Hello from React!</h1>
      <p>5+5</p>
      <p>{5 + 5 + number} result from this should be 20</p>
      {element}
      <h1>Hello, {toUpperCaseName(student)}</h1>
      <a target="blank" href="google.com">
        Google
      </a> */}
      {/* <img src={student.image} style={{ width: 300, height: 300 }}></img> */}
      {/* <button onClick={print}>Click me</button> */}
      <AppClass />
      {/* <Hello />
      <HelloInMacedonian />
      <HelloInDeutsch /> */}
      <MyHobbies />
      <MyFavoriteHobby />
      <MyFavHobbyPic />
    </div>
  );
}

export default App;
