export function Player({ player: { firstName, print } }) {
  //   console.log(props);
  return (
    <div>
      <h1>Player name is {firstName}</h1>
      <button onClick={print}>Player score</button>
    </div>
  );
}

// export function Player2(props) {
//   return (
//     <div>
//       <h1>Player name is {props.player.firstName}</h1>
//       <button onClick={props.player.print}>Player score</button>
//     </div>
//   );
// }
