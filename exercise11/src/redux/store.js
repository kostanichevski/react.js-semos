// npm i redux
// npm i react-redux

import { createStore } from "redux";
import { balanceReducer } from "./reducer/balanceReducer";

const store = createStore(balanceReducer);

export default store;
