export const depositBalance = (value) => {
  return {
    type: "DEPOSIT",
    payload: value,
  };
};

export const depositBalanceAsync = (value) => {
  return (dispatch) => {
    setTimeout(() => {
      console.log("Dispatching async");
      dispatch();
    });
  };
};

export const withdrawBalance = (value) => {
  return {
    type: "WITHDRAW",
    payload: value,
  };
};
