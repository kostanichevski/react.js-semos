import { BUY_CAKE } from "../../constants/CakeConstants";
import { RESTOCK_CAKES } from "../../constants/CakeConstants";

export const buyCake = (numOfCakes) => {
  return {
    type: "BUY_CAKE",
    payload: numOfCakes,
  };
};

export const restockCakes = () => {
  return {
    type: "RESTOCK_CAKES",
    payload: 15,
  };
};
