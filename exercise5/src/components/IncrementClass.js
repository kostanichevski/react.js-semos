import React from "react";

export class IncrementClass extends React.Component {
  constructor(props) {
    super(props); // this is a must

    // ova e istoto kako i useState
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    console.log("this is component did mount");
  }

  componentDidUpdate() {
    console.log("this is component did update");
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <button>Increment</button>
        <h2>Counter value: {this.state.counter}</h2>
      </div>
    );
  }
}
