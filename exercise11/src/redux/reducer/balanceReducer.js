const initialState = { balance: 100 };

// action represents actions which are fired by the
export const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT": {
      return { ...state, balance: state.balance + Number(action.payload) };
    }

    case "WITHDRAW": {
      return { ...state, balance: state.balance - Number(action.payload) };
    }

    default: {
      return state;
    }
  }
};

// reducers must be pure functions

// RULES THAT REDUCERS MUST FOLLOW ////////////////////////////
// given a set of inputs, it must always return the same output
// No surprises, no side-effects, no API CALLS
