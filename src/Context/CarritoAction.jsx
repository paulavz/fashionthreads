export const addToCart = (camisa, dispatch) => {
  dispatch({ type: "ADD_TO_CART", payload: camisa });
};

export const resetCart = (dispatch) => {
  dispatch({ type: "RESET" });
};
