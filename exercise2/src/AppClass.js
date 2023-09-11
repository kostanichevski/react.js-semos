// every component in react must start with a capital letter because react sees the small letters as html tags
import React from "react";
import { PlaceClass } from "./components/PlaceClass";
import { PersonalClass } from "./components/PersonalClass";
// we must export the component so we can use it anywhere
export class AppClass extends React.Component {
  //neka vo nekoj h1 element stoi vaseto ime i prezime
  // a potoa vo h2 neka bide vaseto mesto na ziveenje

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <PlaceClass />
        <PersonalClass />
      </div>
    );
  }
}
