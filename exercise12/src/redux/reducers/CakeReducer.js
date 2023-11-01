import { BUY_CAKE } from "../../constants/CakeConstants";
import { RESTOCK_CAKES } from "../../constants/CakeConstants";

const initialState = {
  cakes: 15,
  message: undefined,
};

export const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      if (state.cakes - action.payload < 0) {
        return {
          ...state,
          message: `you cannot buy ${action.payload} amount of cakes, only ${state.cakes} left`,
        };
      } else {
        return {
          ...state,
          cakes: state.cakes - action.payload,
        };
      }
    case RESTOCK_CAKES:
      return {
        type: RESTOCK_CAKES,
        cakes: action.payload,
        message: undefined,
      };
    //morame sekogas da imame default case kaj sto ke go vrakjame state-ot
    default:
      return state;
  }
};

export default CakeReducer;
