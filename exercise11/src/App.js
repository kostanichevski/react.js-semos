import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { depositBalance } from "./redux/action/balanceActions";
import { withdrawBalance } from "./redux/action/balanceActions";

function App() {
  // const [balance, setBalance] = useState(100);
  const [value, setValue] = useState(0);

  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  const handleDeposit = () => {
    // console.log(balance);
    // console.log(value);
    // setBalance(balance + Number(value));
    dispatch(depositBalance(value));
  };
  const handleWithdraw = () => {
    // console.log(balance);
    // console.log(value);
    // setBalance(balance - Number(value));
    dispatch(withdrawBalance(value));
  };
  return (
    <div className="App">
      <h1>I am learning Redux!</h1>
      <div>
        <h1>My bank</h1>
        <h2>Balance: {balance}</h2>
        <input type="number" onChange={(e) => setValue(e.target.value)} />
        <div>
          <button>Deposit</button>
          <button>Withdraw</button>
        </div>
      </div>
    </div>
  );
}

export default App;
