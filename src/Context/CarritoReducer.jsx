import { INITIAL_STATE } from "./CarritoContext";

const CarritoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        carrito: [...state.carrito, action.payload],
      };
    case "RESET":
      return {
        carrito: [],
      };
    default:
      return state;
  }
};

export default CarritoReducer;
